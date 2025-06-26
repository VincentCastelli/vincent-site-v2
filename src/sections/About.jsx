import useDarkMode from "../hooks/useDarkMode";

const About = () => {
  const isDarkMode = useDarkMode();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            className="absolute scale-[1.4] -top-[.5rem] opacity-40 md:opacity-100 md:scale-[3] md:left-25 md:inset-y-8 lg:scale-[1.5]"
            src="assets/coding-pov.png"
            alt="Coding POV"
          />
          <div className="z-10 md:mb-6">
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
        <div className="grid-black-color grid-2"></div>
        {/* Grid 3 */}
        <div className="grid-primary-color grid-3"></div>
        {/* Grid 4 */}
        <div className="grid-black-color grid-4"></div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
