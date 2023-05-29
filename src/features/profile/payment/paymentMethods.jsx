import React from "react";
import VisaLogo from "../../../assets/visa.svg";
import MastercardLogo from "../../../assets/mastercard.png";
import CashIcon from "../../../assets/cash-icon.svg";
import ProfileIcon from "../../../assets/profile.svg";
import BusinessIcon from "../../../assets/business.svg";
import PlusIcon from "../../../assets/plus-icon.svg";
const PaymentMethods = () => {
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
          <div className="flex items-center my-4">
            <div className="w-3 h-3 rounded-full overflow-hidden">
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
    </div>
  );
};
export default PaymentMethods;
