// src/components/pop_up/updatePassword.tsx
import React from "react";

interface PopUpProps {
  onLoginBack: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onLoginBack }) => {
  return (
  <section className="fixed inset-0 flex justify-center items-center min-h-screen bg-black bg-opacity-40 z-50">
      <div className="flex flex-col justify-center items-center border bg-white rounded-3xl w-64 h-44 md:w-96 md:h-56 p-4 space-y-6 md:space-y-10 shadow-lg">
        <div className="">
          <p className="text-[#00A058] font-sideBarSubtitle text-2xl md:text-3xl font-semibold">
          Password changed
        </p>
        <p className="font-sideBarSubtitle text-nowrap text-[9px] md:text-sm mt-4 text-center">
          Your password has been successfully changed!
        </p>
        </div>
        <button
          onClick={onLoginBack}
          className="border bg-[#00A058] text-white font-loginText w-44 md:w-72 h-10 md:h-12 rounded-md text-[9px] md:text-sm"
        >
          Login Back
        </button>
      </div>
    </section>
  );
};

export default PopUp;
