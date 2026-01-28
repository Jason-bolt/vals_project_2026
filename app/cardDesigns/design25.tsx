"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design25 = ({
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
        id="vals_card25"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400"
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

        {/* Warm glow effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-amber-300/40 via-transparent to-transparent"></div>
        </div>

        {/* Celebration elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 text-5xl text-amber-400 animate-bounce">
            🎉
          </div>
          <div className="absolute top-14 right-14 text-4xl text-yellow-400 animate-bounce delay-200">
            🎊
          </div>
          <div className="absolute bottom-14 left-14 text-4xl text-orange-400 animate-bounce delay-400">
            🎈
          </div>
          <div className="absolute bottom-10 right-10 text-5xl text-amber-400 animate-bounce delay-600">
            🎉
          </div>
        </div>

        {/* Festive border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-amber-600 hover:text-amber-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="text-3xl text-amber-500 animate-pulse">💛</span>
            <span className="text-3xl text-yellow-500 animate-pulse delay-200">
              💕
            </span>
            <span className="text-3xl text-orange-500 animate-pulse delay-300">
              💖
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/60 rounded-lg p-8 backdrop-blur-sm border-2 border-amber-200/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-amber-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="text-3xl text-orange-500 animate-pulse">💛</span>
            <span className="text-3xl text-amber-500 animate-pulse delay-200">
              💕
            </span>
            <span className="text-3xl text-yellow-500 animate-pulse delay-300">
              💖
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card25")}
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

export default Design25;
