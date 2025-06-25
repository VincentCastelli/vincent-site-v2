import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", icon: HomeIcon },
    { name: "About", icon: UserIcon },
    { name: "Experience", icon: BriefcaseIcon },
    { name: "Contact", icon: EnvelopeIcon },
  ];

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto flex w-fit rounded-full border-2 pt-1 px-1 transition-colors duration-300 ${
        isDarkMode ? "border-white bg-dark" : "border-black bg-white"
      }`}
    >
      {navItems.map((item) => (
        <Tab
          key={item.name}
          setPosition={setPosition}
          icon={item.icon}
          isDarkMode={isDarkMode}
        >
          {item.name}
        </Tab>
      ))}
      <Tab
        key="darkmode-toggle"
        setPosition={setPosition}
        icon={isDarkMode ? SunIcon : MoonIcon}
        isDarkMode={isDarkMode}
        onClick={toggleDarkMode}
        isToggle={true}
        iconOnly={true}
      ></Tab>
      <Cursor position={position} isDarkMode={isDarkMode} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  icon: Icon,
  isDarkMode,
  onClick,
  isToggle = false,
  iconOnly = false,
}) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`relative z-10 flex items-center gap-2 cursor-pointer px-3 py-1.5 text-lg uppercase font-family-title md:px-5 md:py-3 transition-colors duration-300 ${
        isDarkMode
          ? "text-white mix-blend-difference"
          : "text-white mix-blend-difference"
      } ${isToggle ? (isDarkMode ? "text-white" : "text-gray-600") : ""}`}
    >
      <Icon className="w-5 h-5" />
      {!iconOnly && <span className="hidden sm:inline">{children}</span>}
    </li>
  );
};

const Cursor = ({ position, isDarkMode }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 h-7 rounded-full md:h-12 transition-colors duration-300 ${
        isDarkMode ? "bg-white" : "bg-black"
      }`}
    />
  );
};

const Navbar = () => {
  return (
    <div className="py-20">
      <SlideTabs />
    </div>
  );
};

export default Navbar;
