import React from "react";

interface PopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onCancel, onConfirm }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center min-h-screen bg-black bg-opacity-40 z-50">
      <div className="flex flex-col justify-center items-center border bg-white rounded-lg w-80 h-44 p-4 space-y-4 shadow-lg">
        <p className="text-[#00A058] font-sideBarSubtitle text-2xl font-semibold">
          Logout
        </p>
        <p className="font-sideBarSubtitle text-nowrap text-[9px]">
          Are you sure you want to log out?
        </p>
        <div className="flex space-x-4 ">
          <button
            onClick={onCancel}
            className="border bg-[#939393] text-white font-loginText w-32 h-10 rounded-md text-[12px]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="border bg-[#EF4444] text-white font-loginText w-32 h-10 rounded-md text-[12px]"
          >
            Yes
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopUp;
