import React from "react";

interface PopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onCancel, onConfirm }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center min-h-screen bg-black bg-opacity-40 z-50">
      <div className="flex flex-col justify-center items-center border bg-white rounded-2xl w-96 h-56 p-4 space-y-10 shadow-lg">
       <div className="mt-5">
         <p className="text-[#353535] font-sideBarSubtitle text-5xl font-semibold text-center">
          Logout
        </p>
        <p className="font-sideBarSubtitle text-nowrap text-sm text-center mt-5">
          Are you sure you want to log out?
        </p>
       </div>
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
