import React from 'react';
import { TranslationFunc } from '../types';
import { NewspaperIcon } from './icons/Icons';

interface NewsProps {
  t: TranslationFunc;
}

const NewsItem: React.FC<{ title: string; date: string; content: string; }> = ({ title, date, content }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
        <h3 className="font-bold text-md text-teal-600">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{date}</p>
        <p className="text-sm text-gray-700">{content}</p>
    </div>
);


const News: React.FC<NewsProps> = ({ t }) => {
  return (
    <div className="animate-fade-in">
        <div className="flex items-center mb-4">
            <NewspaperIcon className="w-6 h-6 mr-2 text-teal-500" />
            <h2 className="text-xl font-bold text-gray-700">{t('newsTitle')}</h2>
        </div>
        <div className="space-y-4">
            <NewsItem 
                title={t('news1Title')}
                date={t('news1Date')}
                content={t('news1Content')}
            />
            <NewsItem 
                title={t('news2Title')}
                date={t('news2Date')}
                content={t('news2Content')}
            />
             <NewsItem 
                title={t('news3Title')}
                date={t('news3Date')}
                content={t('news3Content')}
            />
        </div>
    </div>
  );
};

export default News;
