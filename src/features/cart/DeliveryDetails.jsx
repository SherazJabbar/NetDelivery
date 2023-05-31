import React, { useState } from "react";
import LocationIcon from "../../assets/location-pin.png";
import StarIcon from "../../assets/star-icon.svg";
import ManIcon from "../../assets/man.svg";
import CrossIcon from "../../assets/cross-icon.svg";
const DeliveryDetails = () => {
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
          <div className="bg-white p-4 w-11/12 md:w-2/6 rounded-md">
            <div>
              <button className="text-primary" onClick={closeModal}>
                <img src={CrossIcon} className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold py-4">Delivery Details</h2>

            <div className="grid grid-cols-1 gap-2">
              <div className="relative">
                <span className="absolute left-0 flex items-center h-full px-3">
                  <img
                    src={LocationIcon}
                    alt="Location Icon"
                    className="h-4 w-4"
                  />
                </span>
                <input
                  type="text"
                  className="py-1 pl-10 pr-2 mt-1 text-xs rounded bg-gray border-none w-full"
                  defaultValue="153, Walton Ave, Midrand, 1686, South Africa"
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium pt-3">Delivery options</h2>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="relative">
                <span className="absolute left-0 flex items-center h-full px-3">
                  <img src={ManIcon} alt="Man Icon" className="h-4 w-4" />
                </span>
                <select
                  id="meetAtDoor"
                  className="py-1 pl-10 pr-2 mt-1 text-xs rounded bg-gray border-none w-full"
                >
                  <option value="">Meet at the door</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  defaultValue="153, Walton Ave, Midrand, 1686, South Africa"
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Busimess Name"
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none w-full"
                />
              </div>

              <div>
                <textarea
                  className="py-1 px-2 mt-1 text-xs rounded bg-gray border-none w-full"
                  placeholder="Call when at the security gate"
                ></textarea>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium pt-3">Save this address?</h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="relative">
                <span className="absolute left-0 flex items-center h-full px-3">
                  <img
                    src={StarIcon}
                    alt="Star Icon"
                    className="h-4 w-4 filter invert"
                  />
                </span>
                <input
                  type="text"
                  className="py-1 pl-10 mt-1 text-xs rounded bg-gray border-none w-full"
                  placeholder="Add a label"
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-primary text-white px-4 py-2 w-full rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeliveryDetails;
