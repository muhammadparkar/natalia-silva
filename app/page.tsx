import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Booking from "./components/Booking";
import SocialHighlights from "./components/SocialHighlights";
import Workshops from "./components/Workshops";
import FeaturedVideos from "./components/FeaturedVideos";
import Testimonials from "./components/Testimonials";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Booking />
      <SocialHighlights />
      <Workshops />
      <FeaturedVideos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
