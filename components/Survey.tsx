import React, { useState, useEffect } from 'react';
import { TranslationFunc } from '../types';
import { SURVEY_DATA } from '../constants';
import { surveyService } from '../services/surveyService';

interface SurveyProps {
  t: TranslationFunc;
}

const RatingOption: React.FC<{
    name: string;
    value: string;
    label: string;
    selectedValue: string;
    onChange: (value: string) => void;
}> = ({ name, value, label, selectedValue, onChange }) => (
    <label className="flex flex-col items-center cursor-pointer text-xs">
        <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
            className="sr-only"
        />
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${selectedValue === value ? 'bg-teal-500 border-teal-600 text-white font-bold' : 'bg-slate-200 border-slate-300 text-slate-600 hover:bg-slate-300'}`}>
            {value}
        </div>
        <span className="mt-1 text-center text-gray-600">{label}</span>
    </label>
);

const Survey: React.FC<SurveyProps> = ({ t }) => {
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (surveyService.hasSubmittedSurvey()) {
      setIsSubmitted(true);
    }
  }, []);

  const handleRatingChange = (itemKey: string, value: string) => {
    setRatings(prev => ({ ...prev, [itemKey]: value }));
  };
  
  const handleCommentChange = (itemKey: string, value: string) => {
      setComments(prev => ({ ...prev, [itemKey]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    surveyService.submitSurvey({ ratings, comments });
    surveyService.setSurveySubmitted();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">{t('surveyThanksTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('surveyThanksMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{t('surveyTitle')}</h2>
      
      {SURVEY_DATA.map(({ categoryKey, items }) => (
        <div key={categoryKey} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-teal-600 border-b-2 border-teal-100 pb-2 mb-4">{t(categoryKey)}</h3>
          <div className="space-y-5">
            {items.map(itemKey => (
              <div key={itemKey} className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
                <p className="text-md font-semibold text-gray-700 mb-3">{t(itemKey)}</p>
                <div className="flex justify-between items-start space-x-2 px-1">
                    <RatingOption name={itemKey} value="1" label={t('rating1')} selectedValue={ratings[itemKey]} onChange={(v) => handleRatingChange(itemKey, v)} />
                    <RatingOption name={itemKey} value="2" label={t('rating2')} selectedValue={ratings[itemKey]} onChange={(v) => handleRatingChange(itemKey, v)} />
                    <RatingOption name={itemKey} value="3" label={t('rating3')} selectedValue={ratings[itemKey]} onChange={(v) => handleRatingChange(itemKey, v)} />
                    <RatingOption name={itemKey} value="4" label={t('rating4')} selectedValue={ratings[itemKey]} onChange={(v) => handleRatingChange(itemKey, v)} />
                    <RatingOption name={itemKey} value="5" label={t('rating5')} selectedValue={ratings[itemKey]} onChange={(v) => handleRatingChange(itemKey, v)} />
                </div>
                <textarea
                    value={comments[itemKey] || ''}
                    onChange={(e) => handleCommentChange(itemKey, e.target.value)}
                    placeholder={t('itemCommentsPlaceholder')}
                    rows={2}
                    className="w-full mt-3 p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition text-sm"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full mt-6 bg-teal-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        {t('submitSurvey')}
      </button>
    </form>
  );
};

export default Survey;
