import React from 'react';
import backgroundImage from '../assets/images/LoginBg.png'; 

interface FormCardProps {
  title: string; 
  children: React.ReactNode; 
}

const FormCard: React.FC<FormCardProps> = ({ title, children }) => {
  return (
     <section className="flex flex-col justify-center items-center min-h-screen ">
      <p className=" mb-16 text-5xl font-sideBarSubtitle text-btnForget font-medium">GOLDEN FUTURE</p>
    <div
      className="w-[500px] h-[450px] border border-[#B8B8B8] rounded-xl shadow-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-black font-loginText">
          {title} {/* Dynamic title */}
        </h1>
        {children} {/* This is where your form content will be rendered */}
      </div>
    </div>
    </section>
  );
};

export default FormCard;