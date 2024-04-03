import { useState } from "react";
import { ThemeContext, THEMES } from "../contexts/ThemeContext";

const ATTRIBUTE_DATA_THEME = "data-theme";
const QUERY_COLOR_SCHEME = "(prefers-color-scheme: dark)";
const STORAGE_KEY: string = "ui.theme";

export interface Props {
    children: JSX.Element;
};

const updateCurrentTheme = (theme: THEMES): void => {   
  document.documentElement.setAttribute(ATTRIBUTE_DATA_THEME, theme);
};

const getCurrentTheme = (): boolean => {
  return (((localStorage.getItem(STORAGE_KEY) as THEMES) === THEMES.DARK) || (!(STORAGE_KEY in localStorage) && window.matchMedia(QUERY_COLOR_SCHEME).matches));
}

export const initTheme = (): void => {
  updateCurrentTheme(getCurrentTheme() ? THEMES.DARK : THEMES.LIGHT);
};

export const ThemeProvider: React.FC<Props> = (props): JSX.Element => {
  
  const [theme, setTheme] = useState<THEMES>(
    getCurrentTheme() ? THEMES.DARK : THEMES.LIGHT
  );

  const toggleTheme = (): void => {
    const val = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    setTheme(val);
    localStorage.setItem(STORAGE_KEY, val);

    updateCurrentTheme(val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;