
import { VoteCounts } from '../types';
import { VOTE_OPTIONS } from '../constants';

const VOTE_COUNTS_KEY = 'voteCounts';
const HAS_VOTED_KEY = 'hasVoted';

// Initialize with some mock data for better visualization
const getInitialVotes = (): VoteCounts => {
    const initial: VoteCounts = {};
    VOTE_OPTIONS.forEach(option => {
        initial[option.id] = Math.floor(Math.random() * 20) + 5; // Random initial votes between 5 and 25
    });
    return initial;
};

const getVoteResults = (): VoteCounts => {
  try {
    const storedVotes = localStorage.getItem(VOTE_COUNTS_KEY);
    if (storedVotes) {
      return JSON.parse(storedVotes);
    } else {
      const initialData = getInitialVotes();
      localStorage.setItem(VOTE_COUNTS_KEY, JSON.stringify(initialData));
      return initialData;
    }
  } catch (error) {
    console.error("Error reading vote results from localStorage", error);
    return {};
  }
};

const submitVote = (optionId: string): void => {
  const currentVotes = getVoteResults();
  currentVotes[optionId] = (currentVotes[optionId] || 0) + 1;
  try {
    localStorage.setItem(VOTE_COUNTS_KEY, JSON.stringify(currentVotes));
  } catch (error) {
    console.error("Error saving vote to localStorage", error);
  }
};

const hasVoted = (): boolean => {
  try {
    return localStorage.getItem(HAS_VOTED_KEY) === 'true';
  } catch (error) {
    console.error("Error checking vote status from localStorage", error);
    return false;
  }
};

const setVoted = (): void => {
  try {
    localStorage.setItem(HAS_VOTED_KEY, 'true');
  } catch (error) {
    console.error("Error setting vote status in localStorage", error);
  }
};

export const voteService = {
  getVoteResults,
  submitVote,
  hasVoted,
  setVoted,
};
