"use client";

import { BiSave } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";

const Design9 = ({
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 backdrop-blur-sm">
      <div
        id="vals_card9"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-500"
      >
        {sender && (
          <div className="absolute text-xs z-10 bottom-10 right-5 bg-white rounded-xl px-3 py-1 shadow-md">
            <p className="w-full flex items-center justify-center gap-1">
              With love from{" "}
              <span className="text-red-400 font-bold">{sender}</span>
              <GiSelfLove className="text-red-500" />
            </p>
          </div>
        )}
        {/* Starry night sky */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-10 left-10 text-xl text-yellow-300 animate-twinkle">
            ⭐
          </div>
          <div className="absolute top-16 right-16 text-sm text-yellow-200 animate-twinkle delay-200">
            ✨
          </div>
          <div className="absolute top-24 left-1/4 text-lg text-yellow-300 animate-twinkle delay-500">
            ⭐
          </div>
          <div className="absolute top-32 right-1/4 text-sm text-yellow-200 animate-twinkle delay-700">
            ✨
          </div>
          <div className="absolute bottom-24 left-16 text-lg text-yellow-300 animate-twinkle delay-1000">
            ⭐
          </div>
          <div className="absolute bottom-16 right-20 text-sm text-yellow-200 animate-twinkle delay-300">
            ✨
          </div>
          <div className="absolute bottom-10 left-1/3 text-xl text-yellow-300 animate-twinkle delay-600">
            ⭐
          </div>
          <div className="absolute bottom-20 right-1/3 text-sm text-yellow-200 animate-twinkle delay-900">
            ✨
          </div>
          <div className="absolute top-1/2 left-1/2 text-2xl text-yellow-200 animate-twinkle delay-400">
            ⭐
          </div>
        </div>

        {/* Glowing border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-lg shadow-purple-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-lg shadow-pink-400"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-purple-900/90 hover:bg-purple-800 text-yellow-300 hover:text-yellow-200 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 border border-purple-500"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl text-pink-400 animate-pulse">
            💫
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-black/30 rounded-lg p-8 backdrop-blur-sm border border-purple-500/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-yellow-100 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-5xl text-pink-400 animate-pulse">
            💫
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card9")}
        >
          <BiSave /> Download
        </div>
        {/* <div className="z-50 flex gap-1 items-center justify-center text-red-500 bg-white px-6 py-2 rounded-lg">
          <BiCopy /> Copy share link
        </div> */}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Design9;
