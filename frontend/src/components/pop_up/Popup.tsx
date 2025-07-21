import React from "react";

interface PopUpButton {
  label: string;
  onClick: () => void;
  color: string; // Tailwind class like 'bg-[#00A058]'
}

interface PopUpProps {
  title: string;
  message: string;
  buttons: PopUpButton[];
  width?: string; // Optional override for width
  height?: string; // Optional override for height
  titleColor?: string; // Optional text color for title
}

const PopUp: React.FC<PopUpProps> = ({
  title,
  message,
  buttons,
  width = "w-96",
  height = "h-56",
  titleColor = "text-[#353535]",
}) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center min-h-screen bg-black bg-opacity-40 z-50">
      <div className={`flex flex-col justify-center items-center border bg-white rounded-2xl ${width} ${height} p-4 space-y-6 md:space-y-10 shadow-lg`}>
        <div>
          <p className={`${titleColor} font-sideBarSubtitle text-2xl md:text-4xl font-semibold text-center text-nowrap`}>
            {title}
          </p>
          <p className="font-sideBarSubtitle text-nowrap text-[10px] md:text-sm text-center mt-4">
            {message}
          </p>
        </div>
        <div className={`flex ${buttons.length === 1 ? '' : 'space-x-4'}`}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className={`border ${btn.color} text-white font-loginText w-32 h-10 rounded-md text-[12px]`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopUp;
