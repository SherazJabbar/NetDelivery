import React, { useState } from "react";
import CrossIcon from "../../assets/cross-icon.svg";
import VisaCard from "../../assets/visa.svg";
import Mastercard from "../../assets/mastercard.png";
import CashIcon from "../../assets/cash-icon.svg";
import TickIcon from "../../assets/tick-icon.svg";
import PlusIcon from "../../assets/plus-icon.svg";
import ProfileIcon from "../../assets/profile.svg";
import BusinessIcon from "../../assets/business.svg";
const PaymentOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <button className="bg-primary text-white px-4 py-2" onClick={openModal}>
          Open Modal
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 h-max w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
                <img src={CrossIcon} className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">Payment Options</h2>

            <div className="flex flex-col sm:flex-row mb-8 gap-3">
              <button className="rounded-full bg-primary text-white text-md px-4 py-1 flex items-center">
                <img
                  src={ProfileIcon}
                  alt="Profile Icon"
                  className="h-4 w-4 mr-2 filter invert"
                />
                Personal
              </button>
              <button className="rounded-full bg-gray text-secondary text-md px-4 py-1 flex items-center">
                <img
                  src={BusinessIcon}
                  alt="Business Icon"
                  className="h-4 w-4 mr-2 filter brightness-0"
                />
                Business
              </button>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={VisaCard}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Visa -<span>&nbsp;</span> <span>1945</span>
                </p>
                <div className="ml-auto">
                  <img src={TickIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={Mastercard}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Mastercard -<span>&nbsp;</span> <span>1945</span>
                </p>
                <div className="ml-auto">
                  <img src={TickIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={CashIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Cash <span>&nbsp;</span> <span></span>
                </p>
                <div className="ml-auto">
                  <img src={TickIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <img src={PlusIcon} alt="Plus Icon" className="h-3 w-3 mr-2" />
                <h2 className="text-xs font-semibold py-4">
                  Add Payment Method
                </h2>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-primary rounded text-white px-4 py-2 w-full">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PaymentOptions;
