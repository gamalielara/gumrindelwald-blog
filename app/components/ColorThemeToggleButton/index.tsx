import React from "react";
import { setColorTheme } from "../../actions";

const ColorThemeToggleButton = () => {
  return <button onClick={() => setColorTheme()}>toggle</button>;
};

export default ColorThemeToggleButton;
