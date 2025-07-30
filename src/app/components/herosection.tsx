import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
        <div className="w-[90vw] h-[5vh] bg-blue-600 blur-[80px] rounded-b-full absolute left-1/2 -translate-x-1/2 top-0 z-[10]"></div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl/tight xl:text-7xl text-white">
              Welcome To
            </h1>
            <h1 className="mb-9 text-6xl sm:text-6xl lg:text-8xl xl:text-8xl tracking-tight bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent font-semibold">
              The WhiteHat&apos;s Club
            </h1>
            <p className="mb-9 text-gray-300 text-md text-center px-3">
              Unleashing the Power of Young Minds to Build, Break, and Innovate with Purpose
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="px-8 h-11 rounded-full font-semibold flex items-center border border-blue-500 text-white hover:scale-105 transition-transform duration-300"
              >
                Join Now
              </Link>

              <Link
                href="#"
                className="px-8 h-11 rounded-full font-semibold flex items-center border border-white text-white hover:scale-105 transition-transform duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

