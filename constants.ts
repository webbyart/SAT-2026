import { VoteOption } from './types';
import { PartyIcon, GiftIcon, VoucherIcon, MoneyIcon } from './components/icons/IllustrativeIcons';

export const VOTE_OPTIONS: VoteOption[] = [
  {
    id: 'option1',
    titleKey: 'option1Title',
    detailsKeys: ['option1Detail1', 'option1Detail2'],
    budgetKey: 'option1Budget',
    color: '#10B981', // Green
    gradient: 'from-green-400 to-teal-500',
    icon: PartyIcon,
  },
  {
    id: 'option2a',
    titleKey: 'option2aTitle',
    detailsKeys: ['option2aDetail1', 'option2aDetail2'],
    budgetKey: 'option2aBudget',
    color: '#3B82F6', // Blue
    gradient: 'from-blue-400 to-indigo-500',
    icon: GiftIcon,
  },
  {
    id: 'option2b',
    titleKey: 'option2bTitle',
    detailsKeys: ['option2bDetail1', 'option2bDetail2'],
    budgetKey: 'option2bBudget',
    color: '#F97316', // Orange
    gradient: 'from-orange-400 to-amber-500',
    icon: VoucherIcon,
  },
  {
    id: 'option2c',
    titleKey: 'option2cTitle',
    detailsKeys: ['option2cDetail1'],
    budgetKey: 'option2cBudget',
    color: '#EC4899', // Pink
    gradient: 'from-pink-400 to-rose-500',
    icon: MoneyIcon,
  },
];

export const SURVEY_DATA = [
  {
    categoryKey: 'surveyCat1',
    items: ['surveyCat1Item1', 'surveyCat1Item2', 'surveyCat1Item3', 'surveyCat1Item4', 'surveyCat1Item5', 'surveyCat1Item6'],
  },
  {
    categoryKey: 'surveyCat2',
    items: ['surveyCat2Item1', 'surveyCat2Item2', 'surveyCat2Item3', 'surveyCat2Item4', 'surveyCat2Item5', 'surveyCat2Item6'],
  },
  {
    categoryKey: 'surveyCat3',
    items: ['surveyCat3Item1', 'surveyCat3Item2'],
  },
  {
    categoryKey: 'surveyCat4',
    items: ['surveyCat4Item1', 'surveyCat4Item2'],
  },
  {
    categoryKey: 'surveyCat5',
    items: ['surveyCat5Item1', 'surveyCat5Item2', 'surveyCat5Item3', 'surveyCat5Item4', 'surveyCat5Item5', 'surveyCat5Item6', 'surveyCat5Item7', 'surveyCat5Item8', 'surveyCat5Item9'],
  },
  {
    categoryKey: 'surveyCat6',
    items: ['surveyCat6Item1', 'surveyCat6Item2', 'surveyCat6Item3', 'surveyCat6Item4', 'surveyCat6Item5', 'surveyCat6Item6'],
  },
];
