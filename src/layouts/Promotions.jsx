import React, { useState } from "react";

const Promotions = () => {
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
          <div className="bg-white p-4 w-11/12 sm:w-1/2 xl:w-1/4">
            <div>
              <button className="text-primary pb-4" onClick={closeModal}>
                X
              </button>
              <div>
                <div className="mb-2">
                  <div className="pb-2 font-bold">Promotions</div>
                </div>

                <div className="flex items-center my-3">
                  <input
                    type="text"
                    id="promoCode"
                    className="py-1 px-2 mt-1 text-xs w-full rounded bg-gray border-none"
                  />
                  <button className="bg-primary rounded text-white px-4 py-1 ml-2">
                    Apply
                  </button>
                </div>

                <div className="pb-2 text-md font-semibold"> Add new promo</div>
              </div>

              <div className="bg-white rounded-lg border border-gray shadow-sm p-4">
                <div>
                  <div className="pb-2 text-lg font-bold">
                    <span>30%</span> <span>&nbsp;</span>
                    <span>off</span>
                    <span>&nbsp;</span>
                    <span>(upto R</span>
                    <span>&nbsp;</span>
                    <span>70)</span>
                    <span>&nbsp;</span>
                    <span>Grocery</span>
                  </div>

                  <div className="text-xs text-graytext">
                    <p>
                      Use by<span>&nbsp;</span>
                      <span>9 Dec, 2023</span>
                      <span>&nbsp;</span>
                      <span>9:00 Am</span> -<span>&nbsp;</span>
                      <span>All selected stores</span>
                      <span>&nbsp;</span>
                      <span>R 160</span>
                      <span>&nbsp;</span>
                      <span>Minimum Order</span>
                      <span>&nbsp;</span>
                      <span>Deliver Order Only.</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row my-4 gap-3">
                    <button className="rounded-full bg-primary text-white text-md font-medium px-4 py-1">
                      Add Promo
                    </button>
                    <button className="rounded-full bg-gray text-secondary text-md font-medium px-4 py-1">
                      Details
                    </button>
                  </div>
                  <div className="flex">
                    <div className="text-sm font-medium text-secondary">
                      <p className="w-3/4">
                        Invite Friends to NetDelivery. You get R 30 off when
                        each friend places first order
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="rounded-full bg-gray text-secondary my-4 text-md font-medium px-4 py-1">
                      Start Inviting
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-primary rounded text-white px-4 py-2 w-full">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Promotions;
