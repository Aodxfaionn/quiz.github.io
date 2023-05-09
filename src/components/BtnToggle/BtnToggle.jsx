import React, { useState } from "react";
import Button from "../Button/Button";
import "./btnToggle.css";
import { useTheme } from "../../utils/use-theme";

const BtnToggle = () => {
  const { theme, setTheme } = useTheme("light");
  const toggleLightTheme = () => {
    setTheme("light");
  };
  const toggleBlueTheme = () => {
    setTheme("blue");
  };
  const toggleDarkTheme = () => {
    setTheme("dark");
  };

  return (
    <div className="toggle" aria-label="Theme toggle">
      <Button className="btnToggle" onClick={toggleLightTheme} text="Light" />
      <Button className="btnToggle" onClick={toggleBlueTheme} text="Blue" />
      <Button className="btnToggle" onClick={toggleDarkTheme} text="Dark" />
    </div>
  );
};

export default BtnToggle;
