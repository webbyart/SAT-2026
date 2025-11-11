import React from 'react';
import { HomeIcon, ChartPieIcon, UserIcon, NewspaperIcon, ClipboardListIcon } from './icons/Icons';
import { View, TranslationFunc } from '../types';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
  t: TranslationFunc;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView, t }) => {
  const navItems = [
    { id: 'voting', labelKey: 'navVoting', icon: HomeIcon, view: 'voting' as View },
    { id: 'results', labelKey: 'navResults', icon: ChartPieIcon, view: 'results' as View },
    { id: 'survey', labelKey: 'navSurvey', icon: ClipboardListIcon, view: 'survey' as View },
    { id: 'employeeInfo', labelKey: 'navEmployeeInfo', icon: UserIcon, view: 'employeeInfo' as View },
    { id: 'news', labelKey: 'navNews', icon: NewspaperIcon, view: 'news' as View },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] max-w-lg mx-auto border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.view)}
              className={`flex flex-col items-center justify-center transition-colors w-1/5 pt-1 ${
                isActive ? 'text-teal-500' : 'text-gray-500 hover:text-teal-400'
              }`}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-semibold">{t(item.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
