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
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-semibold mb-4">
            Enter the 4 digit code sent to you at
            <div className="emailId">testing@netdelivet.co.uk</div>
          </h1>
          <form>
            <div className="grid grid-cols-4 gap-x-3">
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-1/4"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-1/4"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-1/4"
                type="text"
              />
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 w-1/4"
                type="text"
              />
            </div>
            <button className="w-full bg-primary text-secondary py-2 rounded mb-4">
              Continue
            </button>
          </form>
          <div className="mb-4 flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="mx-2 text-gray-500">- Or -</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <p className="text-left text-sm">
            By proceeding, you consent to get calls, Whatsapp or SMS messages,
            including by automated means, from NetDelivery and its affiliates to
            the number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
