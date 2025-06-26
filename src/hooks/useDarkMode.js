import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Check initial state
    checkDarkMode();

    // Create observer to watch for class changes on document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkDarkMode();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return isDarkMode;
};

export default useDarkMode;
