import React from 'react';
import AdminLayout from '../../components/adminLayout';
import BonusTable from '../../components/Bonus/BonusTable'; 

const MemberPage: React.FC = () => {
  return (
    <AdminLayout pageTitle="Bonus List">
      {/* Specific content for the Dashboard page goes here */}
      <div className="flex justify-between gap-5 flex-wrap">
        <section className="flex-1 bg-[#F2F2F2] border border-black rounded-xl px-10 py-7 min-w-[180px] h-14">
          <div className="flex justify-between items-center h-full">
            <p className="text-xl font-sideBarSubtitle">Search Member Information</p>
            <div className="flex gap-4">
              <div className="w-16 h-12 bg-actionButton border border-black rounded-md" />
              <div className="w-16 h-12 bg-actionButton border border-black rounded-md" />
            </div>
          </div>
        </section>

        <button className="w-44 h-14 bg-actionButton border border-black rounded-md font-sideBarSubtitle text-xl shadow-lg">
          Referral List
        </button>
      </div>
      <BonusTable/>
    </AdminLayout>
  );
};

export default MemberPage;