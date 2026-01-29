"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design23 = ({
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
        id="vals_card23"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-stone-100 via-neutral-100 to-zinc-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-stone-400"
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

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,_transparent_25%,_rgba(0,0,0,0.02)_25%,_rgba(0,0,0,0.02)_50%,_transparent_50%,_transparent_75%,_rgba(0,0,0,0.02)_75%,_rgba(0,0,0,0.02))] bg-[length:20px_20px]"></div>

        {/* Minimal accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-rose-400 opacity-60"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-rose-400 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-rose-400 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-rose-400 opacity-60"></div>

        {/* Simple border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-stone-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 border border-stone-300"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-rose-400"></div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-800 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-rose-400"></div>
        </div>

        {/* Subtle heart */}
        <div className="absolute top-1/2 left-6 text-xl text-rose-300 opacity-40">
          ❤️
        </div>
        <div className="absolute top-1/2 right-6 text-xl text-rose-300 opacity-40">
          ❤️
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card23")}
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

export default Design23;
