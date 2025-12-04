import { useEffect, useState } from "react";
import "./switcher.scss";

export const Switcher = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isNightMode]);

  const handleSwitcherClick = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="switcher"
      onClick={handleSwitcherClick}
      aria-checked={isNightMode}
      role="switch"
    >
      <div
        className={`switcher__indicator ${
          isNightMode ? "switcher__indicator--moved" : ""
        }`}
      >
        {isNightMode ? (
          <img
            className="night-icon"
            src="./night-icon.svg"
            alt="Night theme icon"
          />
        ) : (
          <img className="sunny" src="./sunny.svg" alt="Day theme icon" />
        )}
      </div>
    </div>
  );
};
