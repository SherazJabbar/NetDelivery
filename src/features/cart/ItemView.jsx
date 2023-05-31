import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Food1 from "../../assets/food-1.jpg";
import PlusIcon from "../../assets/plus-icon.svg";
import NextButton from "../../assets/next-button.svg";
import CrossIcon from "../../assets/cross-icon.svg";
import GroupOrder from "../../assets/sign-up.svg";

export const ItemView = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Stop background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable background scroll
  };
  return (
    <div>
      <Navbar />
      <div className="px-16 py-8 mt-32">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={Food1}
                alt="Item"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <div>
                <h1 className="text-2xl leading-8 font-bold">
                  Double Sweet Chilli Cheese Cruch Burger meal buddy
                </h1>
                <div className="">
                  <p className="text-md font-bold">R 12134</p>
                  <p className="text-xs">
                    Enjoy double cheese burger with cheese, and no sugar drink
                  </p>
                </div>
                <div className="bg-gray p-4 mt-4">
                  <h2 className="text-md font-bold">Meal Size</h2>
                  <p className="text-xs text-red font-medium">Required</p>
                </div>
                <div className="mt-2">
                  <label className="flex items-center  text-sm">
                    <input type="radio" className="form-radio text-primary" />
                    <span className="ml-2">Small Meal</span>
                  </label>
                </div>

                <div className="border-none bg-gray">
                  <div
                    className="py-3 px-4 mt-4 flex items-center justify-between cursor-pointer"
                    onClick={toggleAccordion}
                  >
                    <h3 className="text-sm font-medium leading-tight relative">
                      Customize this item
                      <span className="absolute bottom-0 left-0 w-full h-px bg-secondary top-5"></span>
                    </h3>

                    <img src={NextButton} className="w-4 h-4" />
                  </div>
                  {accordionOpen && (
                    <div className="px-4 py-3 accordion-content mt-2 text-lg font-medium">
                      <div>
                        <div className="my-3">
                          <label className="flex items-center  text-xs">
                            <input
                              type="radio"
                              className="form-radio text-primary"
                            />
                            <span className="ml-2">
                              LUNCH BOX BUDDY - REGULAR
                            </span>
                            <span className="ml-auto">R12,00</span>
                          </label>
                        </div>
                        <div className="my-3">
                          <label className="flex items-center  text-xs">
                            <input
                              type="radio"
                              className="form-radio text-primary"
                            />
                            <span className="ml-2">
                              LUNCH BOX BUDDY - LARGE
                            </span>
                            <span className="ml-auto ">R18,00</span>
                          </label>
                        </div>{" "}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray p-4 mt-4">
                  <h2 className="text-md font-bold">Special Instruction</h2>
                </div>
                <textarea
                  className="w-full bg-gray rounded p-2 mt-3 text-sm border-none"
                  placeholder="Add a note"
                ></textarea>
              </div>
              <hr className="my-2 border-secondary"></hr>
              <div className="mt-4">
                <input
                  type="number"
                  id="quantity"
                  className="w-10 max-w-max px-2 py-1 border border-none bg-gray rounded ml-2"
                  defaultValue="1"
                />
              </div>
              <button
                className="mt-4 bg-primary text-white text-md font-semibold px-4 py-2 rounded w-full"
                onClick={handleOrderClick}
              >
                Add to Order <span className="ml-2">R12134</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      {isModalOpen && (
        <div className="fixed top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-end w-full side-modals">
          <div className="bg-white relative p-10 w-full sm:w-1/2 lg:w-1/4 h-full flex flex-col justify-between">
            {/* Modal content */}
            <div>
              <h1 className="text-xl font-bold">KFC, BraanFontein</h1>
              <p className="text-sm py-3 text-secondary">
                Deliver to <span>539, Belgium Street.</span>
              </p>
              <div className="flex my-4 text-md justify-start">
                <button className="rounded-full bg-primary text-white px-2 py-1 mr-2 flex items-center ">
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-4 h-4 mr-1 white-icon"
                  />
                  Add Items
                </button>

                <button className="rounded-full bg-primary text-white px-2 py-1 mr-2 flex items-center ">
                  <img
                    src={GroupOrder}
                    alt="Group Order"
                    className="w-4 h-4 mr-1 white-icon"
                  />
                  Group Order
                </button>
              </div>
              <div className="my-2">
                <input
                  type="text"
                  id="quantity"
                  className="w-10 max-w-max px-2 py-1 border border-none bg-gray rounded ml-2"
                  defaultValue="1"
                />
                <span className="ml-2 font-semibold leading-none">
                  Double Sweet Chilli Cheese Cruch Burger meal buddy
                </span>
              </div>
              <p className="text-sm text-secondary font-medium">R 5790</p>
              <p className="text-red text-center my-4">Clear Cart</p>
            </div>
            <button
              className="absolute top-0 right-0 m-4 text-primary"
              onClick={closeModal}
            >
              <img src={CrossIcon} className="w-4 h-4" />
            </button>
            <button className="rounded bg-primary text-white px-4 py-1 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-11/12">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemView;
