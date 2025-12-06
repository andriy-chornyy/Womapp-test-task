import React, { useEffect, useState } from "react";
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();

      handleSwitcherClick();
    }
  };

  return (
    <div
      className="switcher"
      onClick={handleSwitcherClick}
      onKeyDown={handleKeyDown}
      aria-checked={isNightMode}
      role="switch"
      tabIndex={0}
      aria-label="Перемикач нічного/денного режиму"
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
          <img className="sunny" src="./sun.svg" alt="Day theme icon" />
        )}
      </div>
    </div>
  );
};
