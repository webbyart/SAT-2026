import React from 'react';
import { Language, TranslationFunc } from '../types';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  setLanguage: (lang: Language) => void;
  currentLang: Language;
  t: TranslationFunc;
}

const Header: React.FC<HeaderProps> = ({ setLanguage, currentLang, t }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10 max-w-lg w-full mx-auto">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
          V
        </div>
        <h1 className="text-xl font-bold text-gray-800 truncate">{t('appTitle')}</h1>
      </div>
      {/* Assuming LanguageSwitcher exists and works as intended. The file was not provided. */}
      <LanguageSwitcher setLanguage={setLanguage} currentLang={currentLang} />
    </header>
  );
};

export default Header;
