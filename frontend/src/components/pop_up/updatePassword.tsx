import React from "react";
import PopUp from "./Popup";

interface PopUpProps {
  onLoginBack: () => void;
}

const updatePassword: React.FC<PopUpProps> = ({ onLoginBack }) => {
  return (
    <PopUp
      title="Password changed"
      message="Your password has been successfully changed!"
      buttons={[
        { label: "Login Back", onClick: onLoginBack, color: "bg-[#00A058]" },
      ]}
      width="w-64 md:w-96"
      height="h-44 md:h-56"
      titleColor="text-[#00A058]"
    />
  );
};

export default updatePassword;
