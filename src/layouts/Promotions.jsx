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
          <div className="bg-white p-4 w-1/2 xl:w-1/4">
            <div>
              <button className="text-primary pb-4" onClick={closeModal}>
                X
              </button>

              <div>

     <div className="mb-2">
              <div className="pb-2 font-bold">Promotions</div>
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
