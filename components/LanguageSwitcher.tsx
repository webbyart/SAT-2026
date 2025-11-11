import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  setLanguage: (lang: Language) => void;
  currentLang: Language;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLanguage, currentLang }) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'th', label: 'TH' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' },
  ];

  return (
    <div className="flex bg-slate-100 rounded-full p-1 text-sm font-semibold">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`px-3 py-1 rounded-full transition-colors ${
            currentLang === code
              ? 'bg-white text-teal-500 shadow'
              : 'text-gray-500 hover:bg-slate-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
