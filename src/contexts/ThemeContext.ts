import React from "react";

export enum THEMES {
  DARK = "dark",
  LIGHT = "light"
}

type ContextType = {
  theme: THEMES;
  toggleTheme?: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
});