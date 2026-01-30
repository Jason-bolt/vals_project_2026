"use client";

// import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { processForm } from "./actions/processForm";
import { FormEvent, useState } from "react";

import * as htmlToImage from "html-to-image";
import Design1 from "./cardDesigns/design1";
import Design2 from "./cardDesigns/design2";
import Design3 from "./cardDesigns/design3";
import Design4 from "./cardDesigns/design4";
import Design5 from "./cardDesigns/design5";
import Design6 from "./cardDesigns/design6";
import Design7 from "./cardDesigns/design7";
import Design8 from "./cardDesigns/design8";
import Design9 from "./cardDesigns/design9";
import Design10 from "./cardDesigns/design10";
import Design11 from "./cardDesigns/design11";
import Design12 from "./cardDesigns/design12";
import Design13 from "./cardDesigns/design13";
import Design14 from "./cardDesigns/design14";
import Design15 from "./cardDesigns/design15";
import Design16 from "./cardDesigns/design16";
import Design17 from "./cardDesigns/design17";
import Design18 from "./cardDesigns/design18";
import Design19 from "./cardDesigns/design19";
import Design20 from "./cardDesigns/design20";
import Design21 from "./cardDesigns/design21";
import Design22 from "./cardDesigns/design22";
import Design23 from "./cardDesigns/design23";
import Design24 from "./cardDesigns/design24";
import Design25 from "./cardDesigns/design25";

const designs = [
  Design1,
  Design2,
  Design3,
  Design4,
  Design5,
  Design6,
  Design7,
  Design8,
  Design9,
  Design10,
  Design11,
  Design12,
  Design13,
  Design14,
  Design15,
  Design16,
  Design17,
  Design18,
  Design19,
  Design20,
  Design21,
  Design22,
  Design23,
  Design24,
  Design25,
];

const GetDesignComponent = ({
  message,
  randomIndex,
  sender,
  downloadCard,
  setMessage,
  moveToNextDesign,
  moveToPreviousDesign,
}: {
  message: string;
  randomIndex: number;
  sender?: string;
  downloadCard: (id: string) => void;
  setMessage: (message: string) => void;
  moveToNextDesign: () => void;
  moveToPreviousDesign: () => void;
}): React.JSX.Element => {
  const DesignComponent = designs[randomIndex];
  return (
    <DesignComponent
      message={message}
      sender={sender}
      downloadCard={downloadCard}
      setMessage={setMessage}
      moveToNextDesign={moveToNextDesign}
      moveToPreviousDesign={moveToPreviousDesign}
    />
  );
};

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [sender, setSender] = useState<string | undefined>("");

  const moveToNextDesign = () => {
    if (randomIndex === designs?.length - 1) {
      setRandomIndex(0);
    } else {
      setRandomIndex((prev) => prev + 1);
    }
  };

  const moveToPreviousDesign = () => {
    if (randomIndex === 0) {
      setRandomIndex(designs?.length - 1);
    } else {
      setRandomIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { message, sender } = await processForm(formData);
    setMessage(message as string);
    setSender(sender);
    setRandomIndex(Math.floor(Math.random() * designs.length));
  };

  const downloadCard = (id: string) => {
    const canvas = document.getElementById(id) as HTMLElement;
    if (!canvas) return;

    // Find the close button within the same card container
    const closeButton = canvas.querySelector("#closeButton") as HTMLElement;
    if (closeButton) {
      closeButton.classList.add("hidden");
    }

    canvas.classList.remove("w-full");
    canvas.classList.remove("max-w-2xl");
    canvas.classList.add("w-[700px]");
    canvas.classList.add("scale-90");
    canvas.classList.add("-left-4");

    htmlToImage
      .toPng(canvas)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "valsDayImage";
        link.href = dataUrl;
        link.click();
        canvas.classList.remove("w-[700px]");
        canvas.classList.remove("scale-90");
        canvas.classList.remove("-left-4");
        canvas.classList.add("w-full");
        canvas.classList.add("max-w-2xl");
        if (closeButton) {
          closeButton.classList.remove("hidden");
        }
      })
      .catch((error) => {
        console.error("Error generating image:", error);
        // Restore classes on error
        canvas.classList.remove("w-[700px]");
        canvas.classList.remove("scale-90");
        canvas.classList.remove("-left-4");
        canvas.classList.add("w-full");
        canvas.classList.add("max-w-2xl");
        if (closeButton) {
          closeButton.classList.remove("hidden");
        }
      });
  };

  return (
    <section>
      <div className="w-full h-44 xs:h-40 sm:h-36 md:h-32 lg:h-28 bg-red-500 flex justify-center items-center">
        <h1 className="text-2xl font-bold font-tangerine px-24 text-center">
          Write a Valentine Message, Get a Beautiful Share Card
        </h1>
      </div>

      <div className="w-full mb-20 flex items-center mt-12 justify-center text-red-950">
        {message && (
          <div className="inset-0 z-10 absolute flex justify-center items-center w-full h-full">
            <div className="w-full h-screen bg-red-500 z-50 absolute -top-[100vh] translate-1"></div>
            <GetDesignComponent
              message={message}
              sender={sender}
              randomIndex={randomIndex}
              downloadCard={downloadCard}
              setMessage={setMessage}
              moveToNextDesign={moveToNextDesign}
              moveToPreviousDesign={moveToPreviousDesign}
            />
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-xl flex flex-col bg-white/30 rounded-lg shadow-md justify-center gap-8 p-10 items-center"
        >
          <div className="flex flex-col w-full justify-center items-center">
            <label htmlFor="name" className="text-xl font-bold pb-2">
              Recipient name:
            </label>
            <input
              type="text"
              name="recipient"
              maxLength={25}
              className="w-full p-2 border ring-1 focus:outline-red-900 focus:ring-red-900 bg-red-50 border-gray-300 rounded-md"
              placeholder="Enter recipient's name...(optional)"
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <label htmlFor="name" className="text-xl font-bold pb-2">
              Sender name:
            </label>
            <input
              type="text"
              name="sender"
              maxLength={25}
              className="w-full p-2 border ring-1 focus:outline-red-900 focus:ring-red-900 bg-red-50 border-gray-300 rounded-md"
              placeholder="Your first or nickname...(optional)"
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <label htmlFor="name" className="text-xl font-bold pb-2">
              Message style:
            </label>
            <select
              name="style"
              className="w-full p-2 border ring-1 focus:outline-red-900 focus:ring-red-900 bg-red-50 border-gray-300 rounded-md"
              id="style"
              defaultValue="romantic"
            >
              <option value="romantic">Romantic</option>
              <option value="funny">Funny</option>
              <option value="deep">Deep</option>
              <option value="shy">Shy</option>
              <option value="ghanaSlang">Ghana Slang</option>
              <option value="classic">Classic</option>
              <option value="poetic">Poetic</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-2 p-5 bg-red-900 text-white rounded-md hover:bg-red-800 hover:cursor-pointer transition-all duration-300 group"
          >
            <span className="flex items-center justify-center">
              Generate Card
              <GiSelfLove className="ml-2 text-2xl group-hover:animate-pulse group-hover:scale-130 transition-all duration-300" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
