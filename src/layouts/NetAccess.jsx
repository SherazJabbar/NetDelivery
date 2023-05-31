import Navbar from "../components/Navbar";
import { useState } from "react";
import DiscountIcon from "../assets/discounts-icon.png";
import DeliveryManIcon from "../assets/delivery-man-icon.png";
import ContractsIcon from "../assets/contract-icon.png";
import PlusIcon from "../assets/plus-icon.svg";
import MinusIcon from "../assets/minus-icon.svg";

const NetAccess = () => {
  const [accordionOpen, setaccordionOpen] = useState(false);

  const toggleAccordion1 = () => {
    setaccordionOpen(!accordionOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="px-16 pb-16 mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 2xl:gap-20 py-10">
          {/* Card 1 */}
          <div className="bg-green text-white rounded-lg p-4 min-h-200 sm:min-h-250 w-full xl:w-8/12 flex flex-col justify-center">
            <div className="text-md md:text-xl font-medium">
              <div className="mb-2">
                You get 30% OFF 3 meals orders and free delivery. All 3 meals
                must be under 100.
              </div>
              <div className="mb-2">R100/pm</div>
            </div>

            <button className="bg-white text-secondary px-2 sm:px-4 py-2 rounded-full w-max mt-2 font-medium">
              Subscribe now
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-red text-white rounded-lg p-4 min-h-200 sm:min-h-250 w-full xl:w-8/12  flex flex-col justify-center">
            <div className="text-md md:text-xl font-medium">
              <div className="mb-2">
                You get 50% OFF 5 meals orders and free delivery. All 5 meals
                must be under R250.
              </div>
              <div className="mb-2">R100/pm</div>
            </div>

            <button className="bg-white text-secondary px-2 sm:px-4 py-2 rounded-full w-max mt-2 font-medium">
              Subscribe now
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-primary text-white rounded-lg p-4 min-h-200 sm:min-h-250 w-full xl:w-8/12  flex flex-col justify-center">
            <div className="text-md md:text-xl font-medium">
              <div className="mb-2">
                You get 70% OFF 10 meals orders and free delivery. All 10 meals
                must be under R500.
              </div>
              <div className="mb-2">R500/pm</div>
            </div>

            <button className="bg-white text-secondary px-2 sm:px-4 py-2 rounded-full w-max mt-2 font-medium">
              Subscribe now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 2xl:gap-20 py-16">
          <div className="flex flex-col items-center  w-full xl:w-8/12">
            <img
              src={DiscountIcon}
              alt="Discounts Icon"
              className="w-12 h-12"
            />
            <p className="mt-2 text-start">
              Get discounts of up to 70% on every meal from NetAccess
            </p>
          </div>
          <div className="flex flex-col items-center  w-full xl:w-8/12">
            <img
              src={DeliveryManIcon}
              alt="Delivery Man Icon"
              className="w-12 h-12"
            />
            <p className="mt-2 text-start">
              Still get free delivery on every order you make.
            </p>
          </div>
          <div className="flex flex-col items-center  w-full xl:w-8/12">
            <img
              src={ContractsIcon}
              alt="Contracts Icon"
              className="w-12 h-12"
            />
            <p className="mt-2 text-start">No contracts, cancel anytime.</p>
          </div>
        </div>

        <div>
          <div>
            <div className="text-2xl font-bold mb-4">FAQs</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                    What is NetAccess?
                  </h3>

                  <img src={PlusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>

              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                  Do I get discounts on all shops and items?
                  </h3>

                  <img src={PlusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>

              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                   How do I cancel?
                  </h3>

                  <img src={PlusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>

              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                    How long does it takes to get activated?
                  </h3>

                  <img src={PlusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>

              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                    What discounts do I get?
                  </h3>

                  <img src={MinusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>

              <div className="border-none   bg-gray">
                <div
                  className=" py-6 px-4 flex items-center justify-between cursor-pointer"
                  onClick={toggleAccordion1}
                >
                  <h3 className="text-md md:text-xl font-medium">
                    How do I subscribe?
                  </h3>

                  <img src={PlusIcon} className="w-4 h-4" />
                </div>
                {accordionOpen && (
                  <div className="px-4 pb-6 accordion-content mt-2 text-lg font-medium">
                    NetAccess is a subscription-based service that provides
                    discounts on meals and offers free delivery on orders.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetAccess;
