import React from "react";

export enum THEMES {
  DARK = "dark",
  LIGHT = "light",
  DEFAULT = LIGHT
}

type ContextType = {
  theme: THEMES;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: THEMES.DEFAULT,
  toggleTheme: () => {},
});