import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-20">
        <Hero />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
