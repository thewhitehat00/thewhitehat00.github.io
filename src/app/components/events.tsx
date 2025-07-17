"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  {
    title: "Hacker’s Lobby",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
    date: "10-04-2025",
  },
  {
    title: "Rainbow Hack",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
    date: "19-09-2025",
  },
  {
    title: "WhiteHat’s Job",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
    date: "12-04-2025",
  },
];

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 relative text-white">
        <div className="mb-6 flex justify-center align-center">
      <h1 className="pb-5 text-4xl sm:text-6xl xl:text-6xl bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent font-semibold mb-6">
        Events
      </h1>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-[55%] transform -translate-y-1/2 p-2 z-10"
      >
        <FaChevronLeft size={70} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-[55%] transform -translate-y-1/2 z-10"
      >
        <FaChevronRight size={70} />
      </button>
      <div
        ref={scrollRef}
        className=" justify-center items-center flex overflow-x-auto space-x-6 scrollbar-hide px-10 scroll-smooth"
      >
        {events.map((event, index) => {
            const isMiddle = index === Math.floor(events.length / 2); 
            const baseClasses = `bg-[#0e0e2f] border border-white/20 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition`;

            return (
                <div
                key={index}
                className={`
                    w-[300px] ${isMiddle ? "h-[700px]" : "h-[500px]"} 
                    ${isMiddle ? "" : "max-[1200px]:hidden"} 
                    ${baseClasses}
                `}
                >
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                    {event.title}
                    </h3>
                    <p className="text-sm text-gray-300 text-justify">
                    {event.description}
                    </p>
                </div>
                <p className="text-md mt-6 font-medium text-center">
                    Date : {event.date}
                </p>
                </div>
            );
            })}

      </div>
    </section>
  );
}
