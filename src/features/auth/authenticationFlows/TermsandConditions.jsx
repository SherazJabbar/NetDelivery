import logoImage from "../../../assets/net-delivery-logo.png";
import React from "react";

const TermsandConditions = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex">
            <img src="" alt="terms-and-cond" />
            <h1 className="text-sm font-medium pl-4 mb-4 leading-6 text-left">
              Accept NetDelivery's Terms & Review Privacy Notice
            </h1>
          </div>

          <form>
            <div>
              <p className="text-xs my-4">
                By Selecting "I Agree" below, I have reviewed and agree to the{" "}
                <span className="text-blue-500 cursor-pointer">
                  Terms of Use
                </span>
                <span>&nbsp;</span>
                and acknowledge the{" "}
                <span className="text-blue-500 cursor-pointer">
                  Privacy Notice.
                </span>{" "}
                <span>&nbsp;</span>I am at least 18 years of age.
              </p>
            </div>
          </form>

          <hr className="my-4 border-darkgray w-full"></hr>
          <div className="mt-4 w-full flex justify-between">
            <p className="text-xs"> I Agree </p>
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <div className=" w-full flex justify-between">
            <button className="w-max bg-gray text-secondary text-xs font-semibold  py-2 px-4 rounded my-4">
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

export default TermsandConditions;
