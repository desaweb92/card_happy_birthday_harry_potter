import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const BirthdayCard = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFullScreenModal, setShowFullScreenModal] = useState(false);
  const [showFinalImage, setShowFinalImage] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const handleCelebrateClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openFullScreenModal = () => {
    setShowFullScreenModal(true);
  };

  const closeFullScreenModal = () => {
    setShowFullScreenModal(false);
    setShowModal(false);
    setShowFinalImage(true);
    setIsCelebrating(true); // Activar el confeti
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-[url('/src/assets/images/Imagen1.jpg')] bg-cover bg-center bg-no-repeat text-white">
      {!showFinalImage ? (
        <>
          <motion.div
            className="relative w-80 h-96 bg-cover flex items-center justify-center bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/src/assets/images/CasasUno.jpg')" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
              <img src="/src/assets/images/Feliz_cumple_amorcito.png" alt="" />
              <p className="mt-4 text-lg">
                Que tu día esté lleno de magia, amor y felicidad infinita. Eres la
                luz que ilumina mi vida y hoy quiero celebrarte como te mereces. ¡Te
                amo con todo mi corazón!
              </p>

              <div className="mt-6">
                <button
                  className="px-4 py-2 text-lg font-semibold text-white bg-[#e8b639] rounded hover:bg-[#e8b639] animate-pulse"
                  onClick={handleCelebrateClick}
                >
                  ¡Hay algo para ti!
                </button>
              </div>
              {customMessage && (
                <motion.p
                  className="mt-4 text-lg italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {customMessage}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* First Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-gradient-to-br from-gold-light to-gold-dark p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <img src="/src/assets/images/Carta.jpg" alt="Modal Image" className="rounded-lg" />
                <button
                  className="mt-4 px-4 py-2 text-lg font-semibold text-white bg-[#B8433A] rounded-full hover:bg-[#B8433A] border-[#7b081b] border-b-4 active:border-t-4 active:border-b-0"
                  onClick={openFullScreenModal}
                >
                  Recibir
                </button>
              </div>
            </div>
          )}

          {/* Full Screen Modal */}
          {showFullScreenModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative w-full h-full flex items-center justify-center">
                <img src="/src/assets/images/Carta.png" alt="Full Screen Image" className="max-w-full max-h-full" />
                <button
                  className="absolute top-4 right-4 px-4 py-2 text-lg font-semibold text-white border-2 border-[#B8433A] rounded-full"
                  onClick={closeFullScreenModal}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <Confetti run={isCelebrating} />
          <img src="/src/assets/images/Imagen_final.jpg" alt="Final Image" className="max-w-full max-h-full" />
        </>
      )}
    </div>
  );
};

export default BirthdayCard;
