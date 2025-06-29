import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-20">
        <Hero />
        <About />
        <Experience />
        {/* Contact */}
        {/* Footer */}
      </div>
    </>
  );
};

export default App;
