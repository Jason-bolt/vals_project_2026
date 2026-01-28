"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design14 = ({
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
        id="vals_card14"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-violet-400"
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

        {/* Mystical background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl text-violet-400 animate-pulse">
            🔮
          </div>
          <div className="absolute top-20 right-16 text-5xl text-purple-400 animate-pulse delay-300">
            ✨
          </div>
          <div className="absolute bottom-16 left-20 text-5xl text-fuchsia-400 animate-pulse delay-500">
            💫
          </div>
          <div className="absolute bottom-10 right-10 text-6xl text-violet-400 animate-pulse delay-700">
            🔮
          </div>
        </div>

        {/* Magical border */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>

        {/* Close button */}
        <button
          onClick={() => setMessage("")}
          id="closeButton"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-violet-600 hover:text-violet-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl text-violet-500 animate-pulse">
            💜
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/50 rounded-lg p-8 backdrop-blur-sm border-2 border-violet-200/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-violet-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-5xl text-violet-500 animate-pulse">
            💜
          </div>
        </div>

        {/* Corner crystals */}
        <div className="absolute top-4 left-4 text-2xl text-violet-300 opacity-60">
          💎
        </div>
        <div className="absolute top-4 right-4 text-2xl text-purple-300 opacity-60">
          💎
        </div>
        <div className="absolute bottom-4 left-4 text-2xl text-fuchsia-300 opacity-60">
          💎
        </div>
        <div className="absolute bottom-4 right-4 text-2xl text-violet-300 opacity-60">
          💎
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card14")}
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

export default Design14;
