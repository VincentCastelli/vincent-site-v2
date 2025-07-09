import HeroText from "../components/HeroText";
import GridPatternBg from "./GridPatternBg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-center md:items-start md:justify-between min-h-screen overflow-hidden c-space"
    >
      <GridPatternBg />
      <HeroText />
    </section>
  );
};

export default Hero;
