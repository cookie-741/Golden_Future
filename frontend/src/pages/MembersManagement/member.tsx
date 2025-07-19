import React from 'react';
import AdminLayout from '../../components/adminLayout'; 
import filter from "../../assets/images/mi_filter.png";
import search from "../../assets/images/ic_outline-search.png";
import MemberTable from '../../components/Members/MemberTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const MemberPage: React.FC = () => {
  return (
    <AdminLayout pageTitle="Member List">
      {/* Specific content for the Dashboard page goes here */}
      <div className="flex justify-between gap-5 flex-wrap">
        <section className="flex-1 bg-[#F2F2F2] border border-black rounded-xl px-10 py-7 min-w-[180px] h-14">
          <div className="flex justify-between items-center h-full">
            <p className="text-xl font-sideBarSubtitle">Search Member Information</p>
          </div>
        </section>

        <button className="w-44 h-14 bg-actionButton border border-black rounded-md font-sideBarSubtitle text-xl shadow-lg">
          Add Member <FontAwesomeIcon icon={faEye} />
        </button>
        <MemberTable/>
      </div>
      
    </AdminLayout>
  );
};

export default MemberPage;