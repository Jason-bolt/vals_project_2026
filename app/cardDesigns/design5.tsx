"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design5 = ({
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        id="vals_card5"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-red-600"
      >
        {/* Sender */}
        {sender && (
          <div className="absolute text-xs z-10 bottom-10 right-5 bg-white rounded-xl px-3 py-1 shadow-md text-nowrap whitespace-nowrap">
            <p className="w-full flex items-center justify-center gap-1">
              With love from{" "}
              <span className="text-red-400 font-bold">{sender}</span>
              <GiSelfLove className="text-red-500" />
            </p>
          </div>
        )}

        {/* Dark romantic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 to-transparent"></div>

        {/* Subtle stars */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-12 left-12 text-2xl text-red-400 animate-pulse">
            ✨
          </div>
          <div className="absolute top-20 right-16 text-xl text-red-300 animate-pulse delay-300">
            ⭐
          </div>
          <div className="absolute bottom-16 left-20 text-xl text-red-400 animate-pulse delay-500">
            ✨
          </div>
          <div className="absolute bottom-12 right-12 text-2xl text-red-300 animate-pulse delay-700">
            ⭐
          </div>
          <div className="absolute top-1/2 left-1/4 text-xl text-red-200 animate-pulse delay-1000">
            ✨
          </div>
          <div className="absolute top-1/3 right-1/4 text-xl text-red-300 animate-pulse delay-700">
            ⭐
          </div>
        </div>

        {/* Glowing border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-lg shadow-red-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-lg shadow-red-500"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/90 hover:bg-gray-700 text-red-400 hover:text-red-300 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 border border-red-600"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl text-red-500 animate-pulse">
            ❤️
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-black/30 rounded-lg p-8 backdrop-blur-sm border border-red-800/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-red-100 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-5xl text-red-500 animate-pulse">
            ❤️
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card5")}
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

export default Design5;
