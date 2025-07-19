import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../components/pop_up/LogOut";
import "../index.css";

import logo from "../assets/images/logo.png";
import control from "../assets/images/sidebar_icon/control.png";
import controlRight from "../assets/images/sidebar_icon/rightsideCollapase.png";
import dashboardIcon from "../assets/images/sidebar_icon/dashboard.png";
import memberIcon from "../assets/images/sidebar_icon/member.png";
import bonusIcon from "../assets/images/sidebar_icon/bonus.png";
import settingIcon from "../assets/images/sidebar_icon/setting.png";
import logoutIcon from "../assets/images/sidebar_icon/logout.png";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}
interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: dashboardIcon,
      path: "/dashboard",
    },
    {
      id: "member",
      label: "Members Management",
      icon: memberIcon,
      path: "/member",
    },
    { id: "bonus", label: "Bonus ", icon: bonusIcon, path: "/bonus" },
    { id: "setting", label: "Setting", icon: settingIcon, path: "/setting" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <section
      className={`fixed top-0 left-0 ${
        isCollapsed ? "w-20" : "w-80"
      } h-[100dvh] bg-sidebarColor border rounded-r-2xl p-4 border-r-[#986F2D] border-r-6 flex flex-col justify-between transition-all duration-300 overflow-y-auto no-scrollbar`}
    >
      {/* Toggle Collapse Button */}
      <div
        className={`flex  ${
          isCollapsed ? "w-[55px] justify-center" : "w-74 justify-end  mb-4 p-4"
        }`}
      >
        <img
          src={isCollapsed ? controlRight : control}
          alt="Toggle"
          className="h-6 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* Logo Section */}
      <div
        className={` ${
          isCollapsed ? "w-10" : " flex items-center justify-center gap-4  w-56"
        }`}
      >
        <img src={logo} alt="Logo" className={`${isCollapsed ? "" : "h-12"}`} />
        {!isCollapsed && (
          <p className="font-sideBarTitle text-gold text-lg">
            Golden Future <br /> company limited
          </p>
        )}
      </div>

      {/* Menu Items */}
      <div className="mt-10">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigate(item.path)}
            className={`${
              isCollapsed
                ? "h-28  flex gap-4"
                : "flex gap-2 text-white w-60 rounded-md pb-4 pt-5 pl-2 mb-5 items-center cursor-pointer"
            }
              ${
                location.pathname === item.path && !isCollapsed
                  ? "border border-white bg-white/20"
                  : ""
              }
            `}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`${isCollapsed ? "h-[22px]" : "h-6"}`}
            />
            {!isCollapsed && (
              <p className="font-sideBarSubtitle text-lg whitespace-nowrap">
                {item.label}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <footer className="mt-[40%]">
        <div
          onClick={() => setShowLogoutPopup(true)}
          className={`flex gap-4 w-60 rounded-md p-2 items-center cursor-pointer transition-all duration-200
            ${
              location.pathname === "/logout" && !isCollapsed
                ? "border border-white bg-white/20 text-white"
                : "text-white"
            }
          `}
        >
          <img src={logoutIcon} alt="Logout" className="h-6" />
          {!isCollapsed && (
            <p className="font-sideBarSubtitle font-normal text-lg">Logout</p>
          )}
        </div>
      </footer>
      {showLogoutPopup && (
        <LogOutPopUp
          onCancel={() => setShowLogoutPopup(false)}
          onConfirm={() => {
            setShowLogoutPopup(false);
            navigate("/login");
          }}
        />
      )}
    </section>
  );
};

export default Sidebar;
