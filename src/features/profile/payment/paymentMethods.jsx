import React from "react";

const PaymentMethods = () => {
  const cards = [
    { name: "Visa", logo: "", number: "1234" },
    { name: "Mastercard", logo: "", number: "5678" },
    { name: "Cash", logo: "", number: "" },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-16 w-1/2">
        <div>
          <h2 className="text-lg font-medium ml-2">Payment Methods</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-green rounded-lg shadow-sm p-6 w-96 h-48 ${
                index % 2 === 0 ? "justify-self-end" : "justify-self-start"
              }`}
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
          <div>
            <h2 className="text-md font-bold ml-2 py-4">Add Payment Method</h2>
          </div>

          <hr className="my-2 border-darkgray"></hr>
          <div className="mt-2">
            <div>
              <h2 className="text-xl font-bold ml-2">Profiles</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="" alt="Item" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-sm font-semibold ml-2">Personal</h2>
            </div>
            <hr className="my-2 border-darkgray"></hr>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="" alt="Item" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-sm font-semibold ml-2">Business</h2>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <h2 className="text-xl font-bold ml-2">Vouchers</h2>
            </div>

            <div className="mt-4">
              <h2 className="text-md font-bold ml-2">Add Voucher</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethods;
