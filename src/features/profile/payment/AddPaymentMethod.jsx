import React, { useState } from "react";
import CreditCardIcon from "../../../assets/credit-card.svg"
import PayPalIcon from "../../../assets/paypal.svg"
import GiftCardIcon from "../../../assets/gift-card.svg"
import NextBtnIcon from "../../../assets/next-button.svg"
import CrossIcon from "../../../assets/cross-icon.svg"

const AddPaymentMethod = () => {
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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-scroll">
          <div className="bg-white p-4 h-1/2 w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
               <img src={CrossIcon} className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">Add Payment Method</h2>

            <div className="grid grid-cols-1">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={CreditCardIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Credit or Debit Card</p>
                <div className="ml-auto">
                  <img
                    src={NextBtnIcon}
                    alt=""
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src= {GiftCardIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Gift Card</p>
                <div className="ml-auto">
                  <img
                    src={NextBtnIcon}
                    alt=""
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={PayPalIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Paypal</p>
                <div className="ml-auto">
                  <img
                    src={NextBtnIcon}
                    alt=""
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddPaymentMethod;
