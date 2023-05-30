import React, { useState } from "react";
import VisaLogo from "../../../assets/visa.svg";
import MastercardLogo from "../../../assets/mastercard.png";
import CashIcon from "../../../assets/cash-icon.svg";
import ProfileIcon from "../../../assets/profile.svg";
import BusinessIcon from "../../../assets/business.svg";
import PlusIcon from "../../../assets/plus-icon.svg";
import CreditCardIcon from "../../../assets/credit-card.svg";
import PayPalIcon from "../../../assets/paypal.svg";
import GiftCardIcon from "../../../assets/gift-card.svg";
import NextBtnIcon from "../../../assets/next-button.svg";
import CrossIcon from "../../../assets/cross-icon.svg";

const PaymentMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDetailsModal, setCardDetailsModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSetCardDetails = () => {
    setIsModalOpen(false);
    setCardDetailsModal(true);
  };

  const closeCardDetailsModal = () => {
    setCardDetailsModal(false);
  };

  const cards = [
    { name: "Visa", logo: VisaLogo, number: "1234" },
    { name: "Mastercard", logo: MastercardLogo, number: "5678" },
    { name: "Cash", logo: CashIcon, number: "" },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-16 w-full md:w-1/2">
        <div className="py-8 text-center">
          <h2 className="text-lg font-semibold ml-2">Payment Methods</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm p-6 w-full md:w-96 h-48 ${
                card.name === "Visa"
                  ? "bg-darkblue"
                  : card.name === "Mastercard"
                  ? "bg-grayish"
                  : card.name === "Cash"
                  ? "bg-dullgreen"
                  : ""
              } ${index % 2 === 0 ? "justify-self-end" : "justify-self-start"}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="card-name text-sm font-semibold text-white">
                    {card.name}
                  </p>
                </div>
                <div>
                  <img src={card.logo} alt="Card Logo" className="w-8 h-8" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-white">
                  **** <span>{card.number}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center my-4 cursor" onClick={openModal}>
            <div className="w-3 h-3 rounded-full overflow-hidden ">
              <img
                src={PlusIcon}
                alt="Item"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-md font-bold ml-2 py-4">Add Payment Method</h2>
          </div>

          <hr className="my-2 border-darkgray"></hr>
          <div className="mt-2">
            <div>
              <h2 className="text-xl font-bold ml-2 my-4">Profiles</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={ProfileIcon}
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-sm font-semibold ml-2">Personal</h2>
            </div>
            <hr className="my-2 border-darkgray"></hr>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={BusinessIcon}
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-sm font-semibold ml-2">Business</h2>
            </div>
            <hr className="my-2 border-darkgray"></hr>
          </div>
          <div className="mt-6">
            <div>
              <h2 className="text-xl font-bold ml-2 my-4">Vouchers</h2>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full overflow-hidden">
                <img
                  src={PlusIcon}
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-md font-medium ml-2">Add Voucher</h2>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 h-1/2 w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
                <img src={CrossIcon} className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">Add Payment Method</h2>

            <div className="grid grid-cols-1">
              <div
                className="flex items-center cursor"
                onClick={openSetCardDetails}
              >
                <div className="w-8 h-8 mr-2">
                  <img
                    src={CreditCardIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Credit or Debit Card</p>
                <div className="ml-auto">
                  <img src={NextBtnIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center cursor">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={GiftCardIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Gift Card</p>
                <div className="ml-auto">
                  <img src={NextBtnIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center cursor">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={PayPalIcon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Paypal</p>
                <div className="ml-auto">
                  <img src={NextBtnIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {cardDetailsModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeCardDetailsModal}>
                X
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">
              Add Credit Card or Debit Card
            </h2>

            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col">
                <label
                  htmlFor="cardNumber"
                  className="text-sm font-semibold mb-1 text-xs"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label
                    htmlFor="expiryDate"
                    className="text-sm font-semibold mb-1  text-xs"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="securityCode"
                    className="text-sm font-semibold mb-1  text-xs"
                  >
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="securityCode"
                    className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-sm font-semibold mb-1  text-xs"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none"
                >
                  <option value="">Select a country</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="nickname"
                  className="text-sm font-semibold mb-1  text-xs"
                >
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-primary text-white px-4 py-2 w-full rounded">
                Add Card
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={closeCardDetailsModal}
                className="bg-white border border-red text-red px-4 py-2 w-full rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PaymentMethods;
