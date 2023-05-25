import logoImage from "../../../assets/net-delivery-logo.png";
import React from "react";

const PasswordLogin = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-semibold mb-4">
            Welcome Back , <span>Tatelo !</span>
          </h1>
          <h1 className="emailId text-lg font-bold text">Not You?</h1>

          <form>
            <div className="grid grid-cols-1">
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-full"
                placeholder="Enter your password"
                type="text"
              />
            </div>
          </form>

          <div className="w-full flex flex-col gap-3">
            <button className="w-max bg-primary text-secondary float-left py-2 px-4 rounded-full ">
              More Options
            </button>

            <button className="w-max bg-primary text-secondary float-left py-2 px-4 rounded-full">
              Forgot Password
            </button>
          </div>
          <div className="my-4 w-full flex justify-between">
            <button className="w-max bg-gray text-secondary text-sm  py-2 px-4 rounded-full my-4">
              Back
            </button>

            <button className="w-max bg-primary text-secondary text-sm font-medium py-2 px-4 rounded-full my-4">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
