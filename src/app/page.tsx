import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import About from "./components/about";
import Domain from "./components/domain";
import Events from "./components/events";
import Newsletters from "./components/newsletter";
import BoardMembers from "./components/board";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/whitehat.mp4" type="video/mp4" />
        Background
      </video>
      <Navbar />
      <HeroSection />
      <About />
      <Domain/>
      <Events/>
      <Newsletters/>
      <BoardMembers/>
      <Footer/>
    </main>
  );
}
