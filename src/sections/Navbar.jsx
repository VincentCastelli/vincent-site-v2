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
  const [selectedTab, setSelectedTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const [selectedPosition, setSelectedPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoverPosition, setHoverPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    setHoveredTab(null);
    setHoverPosition({ left: 0, width: 0, opacity: 0 });
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
        setHoveredTab(null);
      }}
      className={`relative mx-auto flex w-fit space-x-2 rounded-full border-2 pt-1 px-1 transition-colors duration-300 ${
        isDarkMode ? "border-white bg-dark" : "border-black bg-white"
      }`}
    >
      {navItems.map((item) => (
        <Tab
          key={item.name}
          name={item.name}
          icon={item.icon}
          isDarkMode={isDarkMode}
          isSelected={selectedTab === item.name}
          setSelectedTab={setSelectedTab}
          setHoveredTab={setHoveredTab}
          setSelectedPosition={setSelectedPosition}
          setHoverPosition={setHoverPosition}
        >
          {item.name}
        </Tab>
      ))}
      <Tab
        key="darkmode-toggle"
        name="darkmode-toggle"
        icon={isDarkMode ? SunIcon : MoonIcon}
        isDarkMode={isDarkMode}
        isToggle={true}
        iconOnly={true}
        onClick={toggleDarkMode}
        isSelected={false}
        setSelectedTab={setSelectedTab}
        setHoveredTab={setHoveredTab}
        setSelectedPosition={setSelectedPosition}
        setHoverPosition={setHoverPosition}
      />
      {selectedTab && (
        <Cursor
          position={selectedPosition}
          isDarkMode={isDarkMode}
          isHovering={false}
        />
      )}
      {hoveredTab && (
        <Cursor
          position={hoverPosition}
          isDarkMode={isDarkMode}
          isHovering={true}
        />
      )}
    </ul>
  );
};

const Tab = ({
  children,
  icon: Icon,
  iconOnly = false,
  isDarkMode,
  isSelected = false,
  isToggle = false,
  name,
  onClick,
  setSelectedTab,
  setHoveredTab,
  setSelectedPosition,
  setHoverPosition,
}) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { offsetLeft, offsetWidth } = ref.current;
    setHoverPosition({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    setHoveredTab(name);
  };

  const handleClick = () => {
    if (onClick) onClick();
    if (!isToggle) {
      setSelectedTab(name);
      if (ref?.current) {
        const { offsetLeft, offsetWidth } = ref.current;
        setSelectedPosition({
          left: offsetLeft,
          width: offsetWidth,
          opacity: 1,
        });
      }
    }
  };

  return (
    <li
      ref={ref}
      data-tab={name}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`relative z-10 flex items-center gap-2 cursor-pointer px-3 py-1.5 text-lg uppercase font-family-title md:px-5 md:py-3 transition-colors duration-300
  ${
    isDarkMode
      ? "text-white hover:text-bg-dark"
      : "text-black hover:text-bg-light"
  }
  ${
    isSelected
      ? isDarkMode
        ? "text-bg-dark sm:text-white"
        : "text-bg-light sm:text-black"
      : ""
  }
  ${isToggle ? (isDarkMode ? "text-bg-dark" : "text-bg-light") : ""}
`}
    >
      <Icon className="w-5 h-5" />
      {!iconOnly && <span className="hidden sm:inline">{children}</span>}
    </li>
  );
};

const Cursor = ({ position, isDarkMode, isHovering }) => {
  const baseStyles =
    "absolute z-0 h-7 rounded-full md:h-12 transition-all duration-150 ease-out";

  const colorClasses = isHovering
    ? isDarkMode
      ? "bg-primary-400"
      : "bg-secondary-400"
    : "bg-transparent border-2";

  const borderClasses = isDarkMode ? "border-primary" : "border-secondary-500";

  return (
    <motion.li
      animate={{ ...position }}
      className={`${baseStyles} ${colorClasses} ${
        !isHovering ? borderClasses : ""
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
