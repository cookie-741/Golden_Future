import React from "react";
import PopUp from "./Popup";

interface PopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const logOut: React.FC<PopUpProps> = ({ onCancel, onConfirm }) => {
  return (
    <PopUp
      title="Logout"
      message="Are you sure you want to log out?"
      buttons={[
        { label: "Cancel", onClick: onCancel, color: "bg-[#939393]" },
        { label: "Yes", onClick: onConfirm, color: "bg-[#EF4444]" },
      ]}
    />
  );
};

export default logOut;
