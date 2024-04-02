import { useState } from "react";
import { ThemeContext, THEMES } from "../contexts/ThemeContext";

export interface Props {
    children: JSX.Element;
}

export const ThemeProvider: React.FC<Props> = (props): JSX.Element => {
  const STORAGE_KEY: string = "ui.theme";

  const [theme, setTheme] = useState<THEMES>(
    (((localStorage.getItem(STORAGE_KEY) as THEMES) === THEMES.DARK) || (!(STORAGE_KEY in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? THEMES.DARK : THEMES.DEFAULT
  );

  const initTheme = (): void => {
    if (localStorage.getItem(STORAGE_KEY) === THEMES.DARK || (!(STORAGE_KEY in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add(THEMES.DARK);
    } else {
        document.documentElement.classList.remove(THEMES.DARK);
    }        
  }

  const toggleTheme = (): void => {
    const val = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(val);
    localStorage.setItem(STORAGE_KEY, val);

    if (val === THEMES.DARK) {
        document.documentElement.classList.add(THEMES.DARK);
    } else {
        document.documentElement.classList.remove(THEMES.DARK);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, initTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;