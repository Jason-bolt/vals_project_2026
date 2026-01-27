"use client";

import { BiSave, BiCopy } from "react-icons/bi";

const Design22 = ({
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
        id="vals_card22"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-rose-400"
      >
        {/* Lace pattern effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Delicate hearts */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-4xl text-rose-400">
            💝
          </div>
          <div className="absolute top-14 right-14 text-3xl text-pink-400">
            💕
          </div>
          <div className="absolute bottom-14 left-14 text-3xl text-fuchsia-400">
            💖
          </div>
          <div className="absolute bottom-10 right-10 text-4xl text-rose-400">
            💝
          </div>
        </div>

        {/* Elegant border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

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
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl text-rose-500">
            💌
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6 bg-white/70 rounded-lg p-8 backdrop-blur-sm border border-rose-200/50">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-rose-900 leading-relaxed font-medium italic px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-4xl text-rose-500">
            💌
          </div>
        </div>

        {/* Corner lace */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-rose-300 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-rose-300 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-rose-300 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-rose-300 rounded-br-lg"></div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg"
          onClick={() => downloadCard("vals_card22")}
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

export default Design22;
