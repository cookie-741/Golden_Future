// src/components/pop_up/updatePassword.tsx
import React from "react";

interface PopUpProps {
  onLoginBack: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onLoginBack }) => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-black bg-opacity-40">
      <div className="flex flex-col justify-center items-center border bg-white rounded-lg w-72 h-44 p-4 space-y-4 shadow-lg">
        <p className="text-[#00A058] font-sideBarSubtitle text-2xl font-semibold">
          Password changed
        </p>
        <p className="font-sideBarSubtitle text-nowrap text-[9px]">
          Your password has been successfully changed!
        </p>
        <button
          onClick={onLoginBack}
          className="border bg-[#00A058] text-white font-loginText w-64 h-10 rounded-md text-[12px]"
        >
          Login Back
        </button>
      </div>
    </section>
  );
};

export default PopUp;
