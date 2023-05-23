import React, { useState } from "react";

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
          <div className="bg-white p-4 h-max w-1/2 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
                X
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">Payment Options</h2>

            <div className="flex flex-col sm:flex-row mb-8 gap-3">
              <button className="rounded-full bg-primary text-white text-md px-4 py-1">
                Personal
              </button>
              <button className="rounded-full bg-gray text-secondary text-md px-4 py-1">
                Business
              </button>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src="path_to_icon"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Visa -<span>&nbsp;</span> <span>1945</span>
                </p>
                <div className="ml-auto">
                  <img src=" " alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src="path_to_icon"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Mastercard -<span>&nbsp;</span> <span>1945</span>
                </p>
                <div className="ml-auto">
                  <img src=" " alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2">
                  <img
                    src="path_to_icon"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold">
                  Cash <span>&nbsp;</span> <span></span>
                </p>
                <div className="ml-auto">
                  <img src=" " alt="" className="w-4 h-4" />
                </div>
              </div>
              <hr className="my-2 border-darkgray" />
              <div>
                <h2 className="text-xs font-semibold ml-2 py-4">
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
