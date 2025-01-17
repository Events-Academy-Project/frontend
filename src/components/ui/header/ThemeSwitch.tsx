import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const ThemeSwitch = (props: {}) => {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  } 

  return (
    <>
      
    </>
  )
}
