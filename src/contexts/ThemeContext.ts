import React from "react";

export enum THEMES {
  DARK = "dark",
  LIGHT = "light",
  DEFAULT = LIGHT
}

type ContextType = {
  theme: THEMES;
  initTheme: () => void;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: THEMES.DEFAULT,
  initTheme: () => {},
  toggleTheme: () => {},
});