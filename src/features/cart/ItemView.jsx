import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Food1 from "../../assets/food-1.jpg";
import PlusIcon from "../../assets/plus-icon.png";

export const ItemView = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <div>
      <Navbar />
      <div className="px-16 py-8">
        <div className="w-1/2 mx-auto">
          <div className="grid grid-cols-2 gap-8">
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

                    <img src={PlusIcon} className="w-4 h-4" />
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
              <hr className="my-2 border-darkgray"></hr>
              <div className="mt-4">
                <input
                  type="number"
                  id="quantity"
                  className="w-10 max-w-max px-2 py-1 border border-none bg-gray rounded ml-2"
                  defaultValue="1"
                />
              </div>
              <button className="mt-4 bg-primary text-white text-md font-semibold px-4 py-2 rounded w-full">
                Add to Order <span className="ml-2">R12134</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
