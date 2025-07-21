import React from "react";
import PopUp from "./Popup";

interface PopUpProps {
  backMain: () => void;
  addMember: () => void;
}

const addMember: React.FC<PopUpProps> = ({ backMain, addMember }) => {
  return (
    <PopUp
      title="Success"
      message="Member have been successfully created and saved to list!"
      buttons={[
        { label: "Back to main", onClick: backMain, color: "bg-[#939393]" },
        { label: "Add other", onClick: addMember, color: "bg-[#00A058]" },
      ]}
    />
  );
};

export default addMember;
