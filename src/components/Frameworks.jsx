import OrbitingCircles from "./OrbitingCirlces";

const Icon = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="duration-200 rounded-sm hover:scale-110"
    />
  );
};

const Frameworks = () => {
  const skills = [
    "figma",
    "react",
    "typescript",
    "javascript",
    "tailwindcss",
    "next-js",
    "vitejs",
    "framer-motion",
    "nodejs",
    "react-native",
    "git",
    "github",
    "html5",
    "material-ui",
    "docker",
    "redux",
    "css-3",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={` assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default Frameworks;
