import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const email = "vincentsalvatorecastelli@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowPopup(true);

    setTimeout(() => {
      setCopied(false);
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Popup notification */}
      {showPopup && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-bg-dark px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-10 animate-bounce">
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4" />
            Email copied!
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      )}

      <button
        className="relative px-1 py-4 text-sm rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden transition-all duration-200 hover:scale-105"
        onClick={() => copyToClipboard()}
      >
        <p className="flex items-center justify-center gap-2 text-xl text-bg-dark">
          {copied ? (
            <>
              <CheckIcon className="size-6" />
              Copied!
            </>
          ) : (
            <>
              <ClipboardIcon className="size-6" />
              Copy Email
            </>
          )}
        </p>
      </button>
    </div>
  );
};

export default CopyEmailButton;
