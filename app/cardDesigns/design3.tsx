"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design3 = ({
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
        id="vals_card3"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-amber-50 via-yellow-50 to-rose-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-300"
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

        {/* Gold shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent animate-pulse"></div>

        {/* Elegant decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-400 opacity-40"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-400 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-400 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-400 opacity-40"></div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-16 text-3xl text-amber-400 animate-ping">
            ✨
          </div>
          <div className="absolute top-24 right-20 text-2xl text-yellow-400 animate-ping delay-300">
            ✨
          </div>
          <div className="absolute bottom-20 left-20 text-2xl text-amber-300 animate-ping delay-500">
            ✨
          </div>
          <div className="absolute bottom-16 right-16 text-3xl text-yellow-300 animate-ping delay-700">
            ✨
          </div>
        </div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-amber-700 hover:text-amber-900 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl text-amber-500">
            💛
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/40 rounded-lg p-8 backdrop-blur-sm border-2 border-amber-200/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-amber-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl text-amber-500">
            💛
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card3")}
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

export default Design3;
