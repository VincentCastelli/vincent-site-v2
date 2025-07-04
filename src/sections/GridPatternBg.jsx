import useDarkMode from "../hooks/useDarkMode";
import { useState, useEffect } from "react";

const GridPatternBg = () => {
  const isDarkMode = useDarkMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${
              import.meta.env.BASE_URL
            }assets/grid.png')`,
            backgroundSize: isMobile ? "800px 500px" : "1600px 1000px",
            backgroundPosition: isMobile ? "center -80px" : "center -140px",
            backgroundRepeat: "no-repeat",
            opacity: 1,
            zIndex: 1,
            filter: isDarkMode ? "none" : "brightness(0.5) contrast(1.5)",
          }}
        />
      </div>
    </div>
  );
};

export default GridPatternBg;
