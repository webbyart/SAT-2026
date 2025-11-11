import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import VotingForm from './components/VotingForm';
import ResultsChart from './components/ResultsChart';
import EmployeeInfo from './components/EmployeeInfo';
import News from './components/News';
import Survey from './components/Survey';
import { voteService } from './services/voteService';
import { VoteCounts, View, Language } from './types';
import { VOTE_OPTIONS } from './constants';
import { translations } from './locales/translations';

const App: React.FC = () => {
  const [view, setView] = useState<View>('voting');
  const [language, setLanguage] = useState<Language>('th');
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [voteCounts, setVoteCounts] = useState<VoteCounts>({});
  const [showVotedMessage, setShowVotedMessage] = useState(false);

  // Fix: Broaden the type of `key` to string to allow for dynamic keys from components.
  const t = (key: string) => (translations[language] as Record<string, string>)[key] || (translations.en as Record<string, string>)[key];

  const fetchResults = useCallback(() => {
    const results = voteService.getVoteResults();
    setVoteCounts(results);
  }, []);

  useEffect(() => {
    setHasVoted(voteService.hasVoted());
    fetchResults();
  }, [fetchResults]);

  const handleVoteSubmit = (optionId: string) => {
    voteService.submitVote(optionId);
    voteService.setVoted();
    setHasVoted(true);
    fetchResults();
    setShowVotedMessage(true);
    setTimeout(() => {
        setShowVotedMessage(false);
        setView('results');
    }, 2000); 
  };

  const renderContent = () => {
    if (showVotedMessage) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700">{t('thankYouMessage')}</h2>
          <p className="text-gray-500 mt-2">{t('showingResults')}</p>
        </div>
      );
    }
    
    switch(view) {
        case 'voting':
            return hasVoted 
                ? <ResultsChart voteCounts={voteCounts} options={VOTE_OPTIONS} t={t} /> 
                : <VotingForm options={VOTE_OPTIONS} onSubmit={handleVoteSubmit} t={t} />;
        case 'results':
            return <ResultsChart voteCounts={voteCounts} options={VOTE_OPTIONS} t={t}/>;
        case 'employeeInfo':
            return <EmployeeInfo t={t} />;
        case 'news':
            return <News t={t} />;
        case 'survey':
            return <Survey t={t} />;
        default:
            return <VotingForm options={VOTE_OPTIONS} onSubmit={handleVoteSubmit} t={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans flex flex-col max-w-lg mx-auto shadow-2xl">
      <Header setLanguage={setLanguage} currentLang={language} t={t} />
      <main className="flex-grow overflow-y-auto px-4 pt-4 pb-24">
        {renderContent()}
      </main>
      <BottomNav currentView={view} setView={setView} t={t} />
    </div>
  );
};

export default App;