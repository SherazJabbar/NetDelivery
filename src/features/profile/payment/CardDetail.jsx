import React, { useState } from "react";

const CardDetail = () => {
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
          <div className="bg-gray p-4 w-max rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
                X
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">
              Add Credit Card or Debit Card
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="text-sm font-semibold mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="border border-gray-300 p-2 mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="text-sm font-semibold mb-1"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="border border-gray-300 p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="securityCode"
                    className="text-sm font-semibold mb-1"
                  >
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="securityCode"
                    className="border border-gray-300 p-2 mt-1"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="text-sm font-semibold mb-1">
                  Country
                </label>
                <select
                  id="country"
                  className="border border-gray-300 p-2 mt-1"
                >
                  <option value="">Select a country</option>
                  {/* Add your country options here */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="nickname"
                  className="text-sm font-semibold mb-1"
                >
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  className="border border-gray-300 p-2 mt-1"
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-primary text-white px-4 py-2">
                Add Card
              </button>
              <button className="bg-white border border-red-500 text-red-500 px-4 py-2 ml-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
