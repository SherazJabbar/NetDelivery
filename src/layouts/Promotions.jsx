import React, { useState } from "react";
import PromotionBasket from "../assets/promotions-basket.svg";
import CouponIcon from "../assets/coupon.svg";
import CrossIcon from "../assets/cross-icon.svg";
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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-scroll">
          <div className="bg-white p-4 w-11/12 sm:w-1/2 xl:w-1/3">
            <div>
              <button className="text-primary pb-4" onClick={closeModal}>
                <img src={CrossIcon} className="w-4 h-4" />
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

              <div className=" rounded-lg border border-dashed border-graytext shadow-sm p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="pb-2 text-xl font-bold w-3/4">
                      <span>30%</span>
                      <span>&nbsp;</span>
                      <span>off</span>
                      <span>&nbsp;</span>
                      <span>(upto R</span>
                      <span>&nbsp;</span>
                      <span>70)</span>
                      <span>&nbsp;</span>
                      <span>Grocery</span>
                    </div>
                    <img
                      src={PromotionBasket}
                      alt="Promotion Basket"
                      className="w-8 h-8"
                    />
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
                  <div className="bg-dullyellow rounded-lg p-3">
                    <div className="flex">
                      <div className="text-sm font-medium text-secondary">
                        <p className="w-3/4">
                          Invite Friends to NetDelivery. You get R 30 off when
                          each friend places first order
                        </p>
                      </div>
                      <img
                        src={CouponIcon}
                        alt="Promotion Basket"
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <button className="rounded-full bg-white text-secondary my-4 text-md font-medium px-4 py-1 flex items-center">
                        Start Inviting
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-primary rounded text-white px-4 py-2 my-2 w-full">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Promotions;
