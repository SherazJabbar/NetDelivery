import logoImage from "../../../assets/net-delivery-logo.png";
import React from "react";

const NewSignupStep2 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <h1 className="text-xl font-semibold mb-4">
              What's your email address?
            </h1>
            <h1 className="text-xs font-medium mb-4">
              Let us knnow how to properly address you.
            </h1>
          </div>

          <form>
            <div className="grid grid-cols-1">
              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 text-sm w-full"
                placeholder="Enter your first name"
                type="text"
              />

              <input
                className="px-4 py-2 rounded border-none bg-gray mb-4 text-sm w-full"
                placeholder="Enter your last name"
                type="text"
              />
            </div>
          </form>

          <div className="my-4 w-full flex justify-between">
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

export default NewSignupStep2;
