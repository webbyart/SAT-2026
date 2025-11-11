import React, { useState } from 'react';
import { VoteOption, TranslationFunc } from '../types';

interface VotingFormProps {
  options: VoteOption[];
  onSubmit: (optionId: string) => void;
  t: TranslationFunc;
}

const VotingForm: React.FC<VotingFormProps> = ({ options, onSubmit, t }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      onSubmit(selectedOption);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-gray-700 mb-4 px-1">{t('votingTitle')}</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`bg-white p-4 rounded-lg shadow-md border-2 transition-all cursor-pointer ${
              selectedOption === option.id
                ? 'border-teal-500 ring-2 ring-teal-200'
                : 'border-transparent'
            }`}
          >
            <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold`} style={{backgroundColor: option.color}}>
                    {/* Fix: Use the icon component from the option */}
                    <option.icon className="w-5 h-5" />
                </div>
                {/* Fix: Use translation key for title */}
                <h3 className="text-md font-semibold text-gray-800">{t(option.titleKey)}</h3>
            </div>
            {/* Fix: Use translation key for budget */}
            <p className="text-sm font-medium text-gray-500 mb-3">{t(option.budgetKey)}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {/* Fix: Use translation keys for details */}
              {option.detailsKeys.map((detailKey, index) => (
                <li key={index}>{t(detailKey)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={!selectedOption}
        className="w-full mt-6 bg-teal-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        {t('submitVote')}
      </button>
    </form>
  );
};

export default VotingForm;
