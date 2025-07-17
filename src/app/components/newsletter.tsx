"use client";

const newsletters = [
  {
    title: "System Hack",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end.",
    image: "/system-hack.png", 
  },
  {
    title: "Failure Hacks",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end.",
    image: "/system-hack.png",
  },
  {
    title: "Danger Signals",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end.",
    image: "/system-hack.png",
  },
  {
    title: "Hack Alarm",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end.",
    image: "/system-hack.png",
  },
];

export default function Newsletters() {
  return (
    <section className="py-16 px-6 md:px-20 text-white">
     <div className="mb-6 flex justify-center align-center">
      <h1 className="pb-5 text-4xl sm:text-6xl xl:text-6xl bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent font-semibold mb-6">
        Newsletters
      </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {newsletters.map((item, index) => (
          <div
            key={index}
            className="bg-[#150028] border border-white/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[120px] h-[150px] object-cover rounded-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-10 flex justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-white/80"></span>
        <span className="w-2 h-2 rounded-full bg-white/40"></span>
        <span className="w-2 h-2 rounded-full bg-white/40"></span>
      </div>
    </section>
  );
}
