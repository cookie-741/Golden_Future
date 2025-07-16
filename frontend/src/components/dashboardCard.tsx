import React from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
      <div className="border stroke-[#E7E7E7] rounded-lg w-60 h-32 shadow-lg flex justify-between py-5 px-2">
      <div>
       <p
          className="text-[#4C4C4C] font-sideBarSubtitle"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[#214351] font-semibold text-xl pt-2">{value}</p>
      </div>
      <img src={icon} className="w-12 h-12" alt={title} />
    </div>
  );
};

export default DashboardCard;
