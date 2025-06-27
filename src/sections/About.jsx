import { useRef } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Card from "../components/Card";

const About = () => {
  const isDarkMode = useDarkMode();
  const grid2ContainerRef = useRef(null);

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            className="absolute scale-[1.4] -top-[1rem] opacity-40 md:opacity-80 md:scale-[3] md:left-20 md:inset-y-6 lg:scale-[1.5]"
            src="assets/coding-pov.png"
            alt="Coding POV"
          />
          <div className="z-10 md:mb-10">
            <p className="headertext">
              {"Hi, I am"}{" "}
              <span className={isDarkMode ? "text-primary" : "text-tertiary"}>
                Vincent Castelli
              </span>
            </p>
            <p className="subtext">
              A Senior Software Engineer experienced in web development, product
              design, and technical leadership. I'm skilled in building dynamic
              user interfaces with TypeScript, React and Next, in addition to
              scalable backend services with Node. I lead with a product-first
              mindset, combining creative problem-solving and cross-functional
              collaboration to build impactful software solutions.
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-3 bg-gradient-to-t from-secondary-600"></div>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid-black-color grid-2">
          <div
            ref={grid2ContainerRef}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">AT THE CORE</p>
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="DRY"
            />
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="KISS"
            />
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "75deg", top: "30%", left: "70%" }}
              text="YAGNI"
            />
            <Card
              className="hidden md:block"
              containerRef={grid2ContainerRef}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="TDD"
            />
            <Card
              className="hidden md:block"
              containerRef={grid2ContainerRef}
              style={{ rotate: "20deg", top: "10%", left: "40%" }}
              text="SOLID"
            />
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
            />
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"
            />
            <Card
              containerRef={grid2ContainerRef}
              style={{ rotate: "-45deg", top: "15%", left: "15%" }}
              image="assets/logos/tailwindcss.svg"
            />
            <Card
              className="hidden md:block"
              containerRef={grid2ContainerRef}
              style={{ rotate: "-45deg", top: "40%", left: "5%" }}
              image="assets/logos/vitejs.svg"
            />
            <Card
              className="hidden md:block"
              containerRef={grid2ContainerRef}
              style={{ rotate: "-45deg", top: "50%", left: "50%" }}
              image="assets/logos/framer-motion.svg"
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-default-color grid-3">
          <div className="z-10 w-[80%] md:w-[60%]">
            <p className="headertext">Location</p>
            <p className="subtext">
              I'm based in the San Francisco Bay Area, California, USA
            </p>
            <img
              className="absolute left-[32%] top-[0] scale-x-[-1] md:left-[20%] md:top-[-38%] scale-80 rotate-[-1deg]"
              src="assets/location.png"
              alt="location"
            />
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-black-color grid-4"></div>
        {/* Grid 5 */}
        <div className="grid-primary-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
