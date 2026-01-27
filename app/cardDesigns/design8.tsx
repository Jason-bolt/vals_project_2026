"use client";

import { BiSave, BiCopy } from "react-icons/bi";

const Design8 = ({
  message,
  downloadCard,
  setMessage,
}: {
  message: string;
  downloadCard: (id: string) => void;
  setMessage: (s: string) => void;
}) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        id="vals_card8"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-green-50 via-emerald-50 to-rose-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-green-300"
      >
        {/* Floral pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-8 text-4xl text-green-400">
            🌹
          </div>
          <div className="absolute top-12 right-12 text-3xl text-rose-400">
            🌸
          </div>
          <div className="absolute bottom-12 left-12 text-3xl text-pink-400">
            🌺
          </div>
          <div className="absolute bottom-8 right-8 text-4xl text-red-400">
            🌷
          </div>
          <div className="absolute top-1/3 left-1/3 text-2xl text-green-300">
            🌿
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-2xl text-emerald-300">
            🌿
          </div>
        </div>

        {/* Garden border */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-green-600 hover:text-green-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl text-rose-500 animate-pulse">
            🌹
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/50 rounded-lg p-8 backdrop-blur-sm border-2 border-green-200/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-green-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-5xl text-rose-500 animate-pulse">
            🌹
          </div>
        </div>

        {/* Corner leaves */}
        <div className="absolute top-4 left-4 text-2xl text-green-400 opacity-60">
          🌿
        </div>
        <div className="absolute top-4 right-4 text-2xl text-emerald-400 opacity-60">
          🌿
        </div>
        <div className="absolute bottom-4 left-4 text-2xl text-green-400 opacity-60">
          🌿
        </div>
        <div className="absolute bottom-4 right-4 text-2xl text-emerald-400 opacity-60">
          🌿
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg"
          onClick={() => downloadCard("vals_card8")}
        >
          <BiSave /> Download
        </div>
        {/* <div className="z-50 flex gap-1 items-center justify-center text-red-500 bg-white px-6 py-2 rounded-lg">
          <BiCopy /> Copy share link
        </div> */}
      </div>
    </div>
  );
};

export default Design8;
