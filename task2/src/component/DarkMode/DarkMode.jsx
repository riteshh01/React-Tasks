import { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="switch"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        hidden
      />
      <label htmlFor="switch" className="switch"></label>
    </div>
  );
};

export default DarkMode;