"use client";

import { BiSave } from "react-icons/bi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Design4 = ({
  message,
  sender,
  downloadCard,
  setMessage,
  moveToNextDesign,
  moveToPreviousDesign,
}: {
  message: string;
  sender?: string;
  downloadCard: (id: string) => void;
  setMessage: (s: string) => void;
  moveToNextDesign: () => void;
  moveToPreviousDesign: () => void;
}) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        id="vals_card4"
        className="relative w-full max-w-2xl mx-4 h-[80vh] max-h-[600px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200"
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

        {/* Soft pastel clouds */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-16 w-32 h-32 bg-purple-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-20 w-28 h-28 bg-blue-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
        </div>

        {/* Gentle border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"></div>

        {/* Close button */}
        <button
          id="closeButton"
          onClick={() => setMessage("")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-blue-600 hover:text-blue-800 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Close card"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="text-3xl text-pink-400 animate-bounce">💙</span>
            <span className="text-3xl text-purple-400 animate-bounce delay-200">
              💜
            </span>
            <span className="text-3xl text-blue-400 animate-bounce delay-300">
              💗
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-6">
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-purple-800 leading-relaxed font-light px-4">
                {message}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="text-3xl text-blue-400 animate-bounce">💙</span>
            <span className="text-3xl text-pink-400 animate-bounce delay-200">
              💜
            </span>
            <span className="text-3xl text-purple-400 animate-bounce delay-300">
              💗
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <div
          id={`Design_4:Message${message}`}
          className="z-50 flex gap-1 items-center justify-center text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          onClick={() => downloadCard("vals_card4")}
        >
          <BiSave /> Download
        </div>
        <div
          className="bg-yellow-400 py-3 px-4 rounded-lg text-red-950"
          onClick={() => moveToPreviousDesign()}
        >
          <FaArrowLeftLong />
        </div>
        <div
          className="bg-blue-400 py-3 px-4 rounded-lg text-red-950"
          onClick={() => moveToNextDesign()}
        >
          <FaArrowRightLong />
        </div>
        {/* <div className="z-50 flex gap-1 items-center justify-center text-red-500 bg-white px-6 py-2 rounded-lg">
          <BiCopy /> Copy share link
        </div> */}
      </div>
    </div>
  );
};

export default Design4;
