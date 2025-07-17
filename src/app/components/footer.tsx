import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#05010e] text-white px-6 py-10 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">


        <div className="flex justify-evenly flex-col sm:flex-row sm:items-start gap-10 w-full lg:w-1/2">
 
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <img
              src="/logo.png"
              alt="WhiteHat Logo"
              className="w-24 sm:w-28 h-auto"
            />
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left w-full sm:w-auto">
            <h3 className="text-2xl font-semibold bg-[linear-gradient(90deg,#2935E6_0%,#00CCFF_38.02%,#2935E6_100%)] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="text-sm text-gray-300 grid grid-cols-2 gap-y-1 gap-x-6 justify-center sm:justify-start">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Board</a>
              <a href="#">Events</a>
              <a href="#">FAQ</a>
            </div>

 
            <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-xl text-[#00CCFF]">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <h3 className="text-lg font-semibold text-white/90">
            Join the The WhiteHat’s <br className="hidden sm:block" /> Community
          </h3>

          <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full sm:max-w-md mt-2">
            <input
              type="email"
              placeholder="Enter Your VIT Mail"
              className="w-full flex-grow px-4 py-2 rounded-full bg-[#0a0119] border border-white/20 text-sm text-white placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-blue-950 text-white font-medium text-sm whitespace-nowrap"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>


      <div className="mt-10 text-center text-xs text-white/70 border-t border-white/10 pt-4">
        2025 COPYRIGHT: THE WHITEHAT’S CLUB, VIT
      </div>
    </footer>
  );
}
