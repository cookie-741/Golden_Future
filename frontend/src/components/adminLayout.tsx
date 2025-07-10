import React from "react";
import Sidebar from "./sidebar"; // Assuming Sidebar is in the same directory or a sibling
import Profile from "../assets/images/profile.png"; // Adjust path as needed

interface AdminLayoutProps {
  children: React.ReactNode; // This prop will hold the specific page content
  pageTitle: string; // To dynamically set the page title (e.g., "Dashboard", "Bonus Management")
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-80 p-6 w-full">
        {/* Profile image at top right */}
        <div className="flex justify-end">
          <img src={Profile} alt="Profile" />
        </div>

        {/* Dynamic Page Title */}
        <p className="text-3xl font-sideBarSubtitle mt-6 mb-4">{pageTitle}</p>

        {/* This is where the specific page content will be rendered */}
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;