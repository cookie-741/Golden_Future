import React from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../../components/formCard";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    navigate("/forgetPassword");
  };

  return (
    <FormCard title="Login to your account">
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm md:text-lg font-medium text-black"
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
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm md:text-lg font-medium text-black"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="border-loginBorder text-textLogin rounded-lg w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start"></div>
          <button
           onClick={handleForgotPassword}
            className="text-md md:text-lg font-medium text-btnForget "
          >
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full text-white font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 text-center bg-btnForget "
        >
          Log in
        </button>
      </form>
    </FormCard>
  );
};

export default LoginForm;
