"use client";

import { BiSave, BiCopy } from "react-icons/bi";

const Design19 = ({
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
        id="vals_card19"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-rose-200 via-pink-200 to-red-200 rounded-2xl shadow-2xl overflow-hidden border-4 border-rose-500"
      >
        {/* Passionate hearts */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-8 left-8 text-6xl text-rose-500 animate-pulse">
            ❤️
          </div>
          <div className="absolute top-12 right-12 text-5xl text-red-500 animate-pulse delay-200">
            💕
          </div>
          <div className="absolute bottom-12 left-12 text-5xl text-pink-500 animate-pulse delay-400">
            💖
          </div>
          <div className="absolute bottom-8 right-8 text-6xl text-rose-500 animate-pulse delay-600">
            💗
          </div>
          <div className="absolute top-1/2 left-1/4 text-4xl text-red-400 animate-pulse delay-800">
            ❤️
          </div>
          <div className="absolute top-1/3 right-1/4 text-4xl text-pink-400 animate-pulse delay-1000">
            💕
          </div>
        </div>

        {/* Bold border */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-rose-600 hover:text-rose-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-6xl text-red-500 animate-pulse">
            ❤️
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/70 rounded-lg p-8 backdrop-blur-sm border-2 border-rose-300/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-red-900 leading-relaxed font-bold italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-6xl text-red-500 animate-pulse">
            ❤️
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg"
          onClick={() => downloadCard("vals_card19")}
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

export default Design19;
