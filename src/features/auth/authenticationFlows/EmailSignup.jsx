import logoImage from "../../../assets/net-delivery-logo.png";
import React, { useState } from "react";

const EmailSignup = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-semibold mb-4">
            Enter the 4 digit code sent to you at
            <div className="emailId text-lg font-medium">
              testing@netdelivet.co.uk
            </div>
          </h1>
          <form>
            <div className="grid grid-cols-4 gap-x-3">
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-full"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-full"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-full"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-full"
                type="text"
              />
            </div>
            <div>
              <p className="text-left text-sm">
                Tip: Make sure to recheck your inbox and spam folder
              </p>
            </div>
          </form>
          <div className="w-full">
            <button className="w-max bg-primary text-secondary text-xs font-semibold float-left py-2 px-4 rounded-full my-4">
              Resend
            </button>
          </div>

          <div className="mb-4 w-full flex justify-between">
            <button className="w-max bg-gray text-secondary text-xs font-semibold  py-2 px-4 rounded-full my-4">
              Back
            </button>

            <button className="w-max bg-primary text-secondary text-xs font-semibold py-2 px-4 rounded-full my-4">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
