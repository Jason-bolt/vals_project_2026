"use client";

import { BiSave, BiCopy } from "react-icons/bi";

const Design2 = ({
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
        id="vals_card2"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-lavender-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-400"
      >
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-300/20 to-transparent"></div>

        {/* Floating hearts */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-12 left-12 text-5xl text-purple-500 animate-bounce">
            💜
          </div>
          <div className="absolute top-24 right-20 text-4xl text-pink-500 animate-bounce delay-200">
            💕
          </div>
          <div className="absolute bottom-20 left-24 text-4xl text-purple-400 animate-bounce delay-500">
            💖
          </div>
          <div className="absolute bottom-12 right-12 text-5xl text-pink-400 animate-bounce delay-700">
            💗
          </div>
        </div>

        {/* Decorative border pattern */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-purple-600 hover:text-purple-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl text-purple-500 animate-pulse">
            💜
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-purple-900 leading-relaxed font-semibold px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-5xl text-pink-500 animate-pulse">
            💕
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-2 border-purple-400 rounded-full opacity-50"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-2 border-pink-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-pink-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-purple-400 rounded-full opacity-50"></div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg"
          onClick={() => downloadCard("vals_card2")}
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

export default Design2;
