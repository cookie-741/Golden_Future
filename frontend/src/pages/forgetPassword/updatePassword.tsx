import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../../components/formCard";
import PopUp from "../../components/pop_up/updatePassword";

const UpdatePassword: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleLoginBack = () => {
    navigate("/login");
  };

  return (
    <div className="relative">
      {/* FormCard with blur when popup appears */}
      <div className={showPopup ? "filter blur-sm pointer-events-none" : ""}>
        <FormCard title="Reset Password">
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm md:text-lg font-medium text-black"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="••••••••"
                className="border-loginBorder text-textLogin rounded-lg w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm md:text-lg font-medium text-black"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="border-loginBorder text-textLogin rounded-lg w-full p-2.5"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleButtonClick}
              className="w-full text-white font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 text-center bg-btnForget mt-8"
            >
              Reset
            </button>
          </form>
        </FormCard>
      </div>

      {/* PopUp */}
      {showPopup && (
        <div className="absolute inset-0 z-50">
          <PopUp onLoginBack={handleLoginBack} />
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
