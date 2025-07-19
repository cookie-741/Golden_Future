import React from "react";
import AdminLayout from "../../components/adminLayout";
import DashboardCard from "../../components/dashboardCard";

import member from "../../assets/images/TotalMember.png";
import bonus from "../../assets/images/Bonus.png";
import active from "../../assets/images/active.png";
import payment from "../../assets/images/payment.png";

import dashboard from "../../assets/images/dashboard.png";

const DashboardPage: React.FC = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section>
      <div className="w-screen md:w-[70vw] grid grid-cols-2 lg:grid-cols-4 gap-x-40 sm:gap-x-10 gap-y-2">
          <DashboardCard title="Total Members" value="1,248" icon={member} />
          <DashboardCard title="Total Bonus" value="฿12,800" icon={bonus} />
          <DashboardCard title="Active Network" value="99%" icon={active} />
          <DashboardCard
            title="Payment This <br /> Month"
            value="$24,100"
            icon={payment}
          />
        </div>
        <img src={dashboard} alt="" className="mt-6 w-[520px] lg:w-screen " />
        <footer className="mx-auto flex gap-4 mt-6">
          <div className="w-64 lg:w-1/2 border border-black bg-[#F6FBFF] rounded-md shadow-md p-6 text-center font-sideBarSubtitle font-semibold text-sm md:text-xl text-nowrap">
            Member Management
          </div>
          <div className="w-64 lg:w-1/2 border border-black bg-[#F6FBFF] rounded-md shadow-md p-6 text-center font-sideBarSubtitle font-semibold text-sm md:text-xl text-nowrap">
            Bonus Management
          </div>
        </footer>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
