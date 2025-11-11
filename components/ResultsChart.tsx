import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { VoteCounts, VoteOption, TranslationFunc } from '../types';

interface ResultsChartProps {
  voteCounts: VoteCounts;
  options: VoteOption[];
  t: TranslationFunc;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ voteCounts, options, t }) => {
  const chartData = useMemo(() => {
    return options.map(option => ({
      // Fix: Use translation key for name
      name: t(option.titleKey),
      value: voteCounts[option.id] || 0,
      color: option.color
    }));
  }, [voteCounts, options, t]);

  const totalVotes = useMemo(() => chartData.reduce((sum, entry) => sum + entry.value, 0), [chartData]);
  
  const maxVotes = useMemo(() => Math.max(...chartData.map(d => d.value)), [chartData]);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent === 0) {
      return null;
    }

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold text-sm">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  if (totalVotes === 0) {
      // Fix: Use translation key
      return <div className="text-center p-8 text-gray-500">{t('noVotesYet')}</div>
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Fix: Use translation keys */}
      <h2 className="text-xl font-bold text-gray-700 mb-2 text-center">{t('resultsTitle')}</h2>
      <p className="text-center text-gray-500 mb-4">{t('totalVotesText').replace('{count}', String(totalVotes))}</p>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  transform={entry.value === maxVotes && maxVotes > 0 ? 'scale(1.05)' : 'scale(1)'}
                  style={{transition: 'transform 0.3s ease-in-out', transformOrigin: 'center center'}}
                />
              ))}
            </Pie>
            {/* Fix: Use translation keys for tooltip */}
            <Tooltip formatter={(value: number) => [`${value} ${t('votes')}`, t('voteCountLabel')]} />
            <Legend
                iconType="circle"
                wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
                formatter={(value, entry) => <span className="text-gray-600">{value}</span>}
             />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsChart;
