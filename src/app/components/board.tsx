"use client";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

const boardMembers = [
  {
    name: "Kartik Raj",
    role: "Chairperson",
    image: "/avatar.png",
  },
  {
    name: "Punit Jodhwani",
    role: "Vice Chairperson",
    image: "/avatar.png",
  },
  {
    name: "Bala Sankar",
    role: "Secretary",
    image: "/avatar.png",
  },
  {
    name: "Divyansh Krishna",
    role: "Co-Secretary",
    image: "/avatar.png",
  },
  {
    name: "Adhavan",
    role: "Technical Head",
    image: "/avatar.png",
  },
  {
    name: "Sushrut Gupta",
    role: "Co-Technical Head",
    image: "/avatar.png",
  },
  {
    name: "Hanniel Vinu",
    role: "Design Head & Creative Head",
    image: "/avatar.png",
  },
  {
    name: "Pratham Rajshree",
    role: "Finance Head",
    image: "/avatar.png",
  },
  {
    name: "Pournami Jaisudhir Nair",
    role: "Management Head",
    image: "/avatar.png",
  },
  {
    name: "Naval Singh",
    role: "Marketing & Publicity Head",
    image: "/avatar.png",
  },
];

export default function BoardMembers() {
  return (
    <section className="py-16 px-4 md:px-20 text-white">
      <div className="mb-6 flex justify-center align-center">
      <h1 className="pb-5 text-4xl sm:text-6xl xl:text-6xl bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent font-semibold mb-6">
        Board Members
      </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#0f0120] border border-white/20 rounded-xl text-center p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{member.role}</p>
            <div className="flex space-x-3 text-blue-400 justify-center text-lg">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <button className="border border-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
          Meet The Senior WhiteHat’s
        </button>
        <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
          Meet Our Faculty Coordinators
        </button>
      </div>
    </section>
  );
}
