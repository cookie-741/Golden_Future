import React from "react";
import AdminLayout from "../../components/adminLayout";
import SettingTable from "../../components/Settings/SettingTable";
import { useNavigate } from "react-router-dom";

const MemberPage: React.FC = () => {
    const navigate = useNavigate();
    const handleForgotPassword = () => {
      navigate("/updatePassword");
    };
  return (
    <AdminLayout pageTitle="Settings">
      <div className="flex flex-col space-y-8 mt-9">
        <p className=" text-xl font-loginText">Change Password</p>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-medium text-black font-loginText">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-loginBorder text-textLogin rounded-md w-64 text-sm md:w-96"
            placeholder="name@company.com"
            required
          />
        </div>
        <button
         onClick={handleForgotPassword}
          type="submit"
          className="w-64 text-sm md:w-96 text-white  rounded-md  px-5 py-2 text-center bg-btnForget border border-black font-loginText"
        >
          Send
        </button>
      </div>
      <p className="font-loginText font-medium text-xl py-8">Recent Bonus History</p>
      <SettingTable />
    </AdminLayout>
  );
};

export default MemberPage;
