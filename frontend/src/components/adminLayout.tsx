import React, { useState,useEffect } from "react";
import Sidebar from "./sidebar";
import Profile from "../assets/images/profile.png";

interface AdminLayoutProps {
  children: React.ReactNode; // This prop will hold the specific page content
  pageTitle: string; // To dynamically set the page title (e.g., "Dashboard", "Bonus Management")
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    () => localStorage.getItem("isCollapsed") === "true"
  );
   useEffect(() => {
    localStorage.setItem("isCollapsed", String(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <main className={`transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-80"} p-6 md:w-full`}>
        <div className="flex justify-end">
          <img src={Profile} alt="Profile" />
        </div>

        <p className="text-3xl font-sideBarSubtitle mt-6 mb-4">{pageTitle}</p>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
