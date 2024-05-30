import React from "react";
import "../css/ToggleTheme.css";

const ToggleTheme = ({ isChecked, handleClick }) => {
  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="theme"
        className="toggle"
        defaultChecked={isChecked}
        onClick={handleClick}
      />
      <label htmlFor="theme">{isChecked ? "Dark" : "Light"} Mode</label>
    </div>
  );
};

export default ToggleTheme;
