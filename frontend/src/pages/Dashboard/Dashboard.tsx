import React from "react";
import AdminLayout from "../../components/adminLayout";
import DashboardCard from "../../components/dashboardcCard";

import member from "../../assets/images/TotalMember.png";
import bonus from "../../assets/images/Bonus.png";
import active from "../../assets/images/active.png";
import payment from "../../assets/images/payment.png";

const DashboardPage: React.FC = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <section>
         <div className="flex space-x-4 flex-wrap gap-4">
          <DashboardCard title="Total Members" value="1,248" icon={member} />
          <DashboardCard title="Total Bonus" value="฿12,800" icon={bonus} />
          <DashboardCard title="Active Network" value="99%" icon={active} />
          <DashboardCard title="Payment This Month" value="$24,100" icon={payment} />
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
