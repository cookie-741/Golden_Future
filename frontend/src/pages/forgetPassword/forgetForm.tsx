import React from "react";
import FormCard from "../../components/formCard";
import { useNavigate } from "react-router-dom";

function ForgetForm() {
  const navigate = useNavigate(); 

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    navigate("/updatePassword"); 
  };

  return (
    <FormCard title="Forget your password">
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-loginBorder text-textLogin rounded-lg w-full p-2.5"
            placeholder="name@company.com"
            required
          />
        </div>
        <button
          onClick={handleResetClick}
          type="submit"
          className="w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center bg-btnForget "
        >
          Request a reset link
        </button>
        <p className="text-center text-[#B10003] font-loginText font-semibold">
          Fail to access
        </p>
      </form>
    </FormCard>
  );
}

export default ForgetForm;
