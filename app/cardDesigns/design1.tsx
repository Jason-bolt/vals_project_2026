"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design1 = ({
  message,
  sender,
  downloadCard,
  setMessage,
}: {
  message: string;
  sender?: string;
  downloadCard: (id: string) => void;
  setMessage: (s: string) => void;
}) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        id="vals_card1"
        className="relative w-full max-w-2xl mx-4 h-[80vh] bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-red-300"
      >
        {/* Sender */}
        {sender && (
          <div className="absolute text-xs z-10 bottom-10 right-5 bg-white rounded-xl px-3 py-1 shadow-md">
            <p className="w-full flex items-center justify-center gap-1">
              With love from{" "}
              <span className="text-red-400 font-bold">{sender}</span>
              <GiSelfLove className="text-red-500" />
            </p>
          </div>
        )}

        {/* Decorative hearts background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl text-red-400 animate-pulse">
            💕
          </div>
          <div className="absolute top-20 right-16 text-5xl text-pink-400 animate-pulse delay-300">
            💖
          </div>
          <div className="absolute bottom-16 left-20 text-5xl text-rose-400 animate-pulse delay-500">
            💗
          </div>
          <div className="absolute bottom-10 right-10 text-6xl text-red-400 animate-pulse delay-700">
            💝
          </div>
          <div className="absolute top-1/2 left-1/4 text-4xl text-pink-300 animate-pulse delay-1000">
            💕
          </div>
          <div className="absolute top-1/3 right-1/4 text-4xl text-rose-300 animate-pulse delay-700">
            💖
          </div>
        </div>

        {/* Ornamental border decorations */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-red-600 hover:text-red-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          {/* Decorative top element */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl text-red-400">
            ❤️
          </div>

          {/* Message container */}
          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-red-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          {/* Decorative bottom element */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl text-red-400">
            ❤️
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 text-2xl text-red-300 opacity-60">
          💕
        </div>
        <div className="absolute top-4 right-12 text-2xl text-pink-300 opacity-60">
          💖
        </div>
        <div className="absolute bottom-4 left-12 text-2xl text-rose-300 opacity-60">
          💗
        </div>
        <div className="absolute bottom-4 right-4 text-2xl text-red-300 opacity-60">
          💝
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card1")}
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

export default Design1;
