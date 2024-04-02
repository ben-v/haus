import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export interface Props {
    children: JSX.Element;
}
export const ThemeProvider: React.FC<Props> = (props): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);

    if (val === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("ui.theme", val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;