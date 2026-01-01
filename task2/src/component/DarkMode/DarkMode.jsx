import { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  // useEffect told us that is kaam ko render ke baad chalana hai.
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (

    <div className="main">
        <div className="toggle-wrapper">
              <input
                type="checkbox"
                id="switch"
                checked={isDark}
                onChange={() => setIsDark(isDark => !isDark)} // best practice
                hidden
              />
              <label htmlFor="switch" className="switch"></label>
        </div>
        
        <div className="num-counter">
        </div>
    </div>
  );
};

export default DarkMode;