import React, { useState } from "react";
import locationIcon from "../../assets/location-pin.png";
import editIcon from "../../assets/pencil.png";
import CrossIcon from "../../assets/cross-icon.svg"

const DeliverToAddress = () => {
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
                  <img src={CrossIcon} className="w-4 h-4" />
              </button>
            </div>
            <div className="mb-2">
              <div className="pb-2 font-bold">Deliver To</div>
            </div>

            <div className="relative">
              <input
                className="border text-xs border-none bg-darkgray w-full pl-8"
                type="text"
                placeholder="Deliver to address"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-4 h-4"
                />
              </div>
            </div>

            <div className="py-4 max-h-64 overflow-y-scroll break-all">
              <div className="my-2 flex items-center">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-2"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-md">Umthunzi View</div>
                  <div className="text-sm">
                    143, Walton Eve, Cartswald, Midrand
                  </div>
                </div>
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="w-4 h-4 ml-auto"
                />
              </div>
              <hr className="my-2 border-darkgray"></hr>

              <div className="my-2 flex items-center">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-2"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-md">
                    579, Blugum street
                  </div>
                  <div className="text-sm">Eboni Park, Midrand</div>
                </div>
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="w-4 h-4 ml-auto"
                />
              </div>
              <hr className="my-2 border-darkgray"></hr>

              <div className="my-2 flex items-center">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-2"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-md">41 Avalon Road</div>
                  <div className="text-sm">Modderfontein, Lethabong</div>
                </div>
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="w-4 h-4 ml-auto"
                />
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

export default DeliverToAddress;
