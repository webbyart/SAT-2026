import React from 'react';

export type View = 'voting' | 'results' | 'employeeInfo' | 'news' | 'survey';

export type Language = 'en' | 'th' | 'ja';

export interface VoteOption {
  id: string;
  titleKey: string;
  detailsKeys: string[];
  budgetKey: string;
  color: string;
  gradient: string;
  icon: React.FC<{className?: string}>;
}

export interface VoteCounts {
  [key: string]: number;
}

export type TranslationFunc = (key: string) => string;