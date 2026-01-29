"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design7 = ({
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        id="vals_card7"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-200"
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

        {/* Minimalist geometric shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-100 rounded-tr-full opacity-30"></div>

        {/* Simple line accents */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <div className="w-16 h-0.5 bg-red-300 mx-auto mb-4"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-sans text-gray-800 leading-relaxed font-light px-4">
                {message}
              </p>
              <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-4"></div>
            </div>
          </div>
        </div>

        {/* Minimal corner accent */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-6 right-6 w-2 h-2 bg-pink-400 rounded-full"></div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card7")}
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

export default Design7;
