import React from 'react';
import { TranslationFunc } from '../types';
import { UserIcon, ShieldCheckIcon } from './icons/Icons';

interface EmployeeInfoProps {
  t: TranslationFunc;
}

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center bg-slate-100 p-3 rounded-lg">
    <div className="text-teal-500 mr-4">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-md font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ t }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">{t('employeeInfoTitle')}</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white mb-3 shadow-lg">
           <UserIcon className="w-14 h-14" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{t('employeeName')}</h3>
        <p className="text-sm text-gray-500">{t('employeeId')}</p>
      </div>

      <div className="space-y-3">
        <InfoCard icon={<UserIcon className="w-6 h-6" />} label={t('department')} value={t('itDepartment')} />
        <InfoCard icon={<ShieldCheckIcon className="w-6 h-6" />} label={t('position')} value={t('softwareEngineer')} />
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-gray-600 mb-3">{t('benefitsTitle')}</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
          <li>{t('benefit1')}</li>
          <li>{t('benefit2')}</li>
          <li>{t('benefit3')}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeInfo;
