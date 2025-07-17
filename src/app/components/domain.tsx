export default function Domain() {
  const domains = [
    { title: "Technical", image: "/images/technical.png" },
    { title: "Design", image: "/images/design.png" },
    { title: "Management", image: "/images/management.png" },
    { title: "Marketing", image: "/images/marketing.png" },
    { title: "Finance", image: "/images/finance.png" },
    { title: "Creative", image: "/images/creative.png" },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-12 max-w-6xl mx-auto">
      <h1 className="pb-5 text-4xl sm:text-6xl xl:text-6xl bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent font-semibold mb-6">
        Our Domains
      </h1>
      <p className="mb-12 text-gray-300 text-md text-center px-3 max-w-3xl">
        At The WhiteHat's Club, we champion hands-on learning and the freedom to explore. Every core committee member is encouraged to choose from five dynamic domains, helping them discover and pursue their true passion in an environment that values creativity, growth, and self-driven innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <img src={domain.image} alt={domain.title} className="w-16 h-16 mb-4 object-contain" />
            <h2 className="text-lg font-semibold text-gray-100">{domain.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
