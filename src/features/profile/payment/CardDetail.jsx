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
          <div className="bg-white p-4 w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
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
              <button className="bg-white border border-red text-red px-4 py-2 w-full rounded">
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
