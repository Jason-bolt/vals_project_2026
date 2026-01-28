"use client";

import { BiSave } from "react-icons/bi";

const Design6 = ({
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
        id="vals_card6"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-lg shadow-2xl overflow-hidden border-4 border-rose-300"
        style={{ fontFamily: "serif" }}
      >
        {/* Vintage paper texture effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>

        {/* Ornate corner decorations */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-2 left-2 w-16 h-16 border-2 border-rose-400 rounded-tl-lg"></div>
          <div className="absolute top-4 left-4 w-12 h-12 border-2 border-rose-300 rounded-tl-lg"></div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-2 right-2 w-16 h-16 border-2 border-rose-400 rounded-tr-lg"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-rose-300 rounded-tr-lg"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-2 left-2 w-16 h-16 border-2 border-rose-400 rounded-bl-lg"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-rose-300 rounded-bl-lg"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-2 right-2 w-16 h-16 border-2 border-rose-400 rounded-br-lg"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-rose-300 rounded-br-lg"></div>
        </div>

        {/* Classic border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-rose-600 hover:text-rose-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 border-2 border-rose-300"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl text-rose-500">
            💌
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-rose-900 leading-relaxed font-medium italic px-4"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
              >
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-4xl text-rose-500">
            💌
          </div>
        </div>

        {/* Vintage seal effect */}
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-rose-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-rose-300 rounded-full opacity-50"></div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card6")}
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

export default Design6;
