import { useState, useEffect } from "react";
import { ThemeContext, THEMES } from "../contexts/ThemeContext";

const ATTRIBUTE_DATA_THEME = "data-theme";
const QUERY_COLOR_SCHEME = "(prefers-color-scheme: dark)";
const STORAGE_KEY: string = "ui.theme";

const matchMediaQuery = window.matchMedia(QUERY_COLOR_SCHEME);

export interface Props {
    children: JSX.Element;
};

const useDarkTheme = (): boolean => {
  return (
    // If theme is save in local storage, get it and if currently is set to dark theme, return true, otherwise return false.
    ((localStorage.getItem(STORAGE_KEY) as THEMES) === THEMES.DARK)
    || 
    // If theme is not stored in local storage and the system theme is set to dark as determined by the media query, return true, otherwise, return false.
    (!(STORAGE_KEY in localStorage) && matchMediaQuery.matches)
  );
}

// Need to be able to init them on an element wihting the HTML header before rendering occurs to prevent light > dark flickering.
export const initTheming = () => {
  const theme: THEMES = useDarkTheme() ? THEMES.DARK : THEMES.LIGHT;
  document.documentElement.setAttribute(ATTRIBUTE_DATA_THEME, theme);
};

export const ThemeSwitchProvider: React.FC<Props> = (props): JSX.Element => {
  const [themeState, setThemeState] = useState<THEMES>(
    useDarkTheme() ? THEMES.DARK : THEMES.LIGHT
  );
  
  useEffect(() => {
    // Init provider once this component has completed rendering.
    // Add listener to update the theme when system theme is changed by the user.
    matchMediaQuery.addEventListener('change', systemColorChangeHandler);
  }, []);

  const saveCurrentTheme = (theme: THEMES): void => {   
    document.documentElement.setAttribute(ATTRIBUTE_DATA_THEME, theme);
    
    localStorage.setItem(STORAGE_KEY, theme);
  
    setThemeState(theme);
  };
  
  const updateTheme = (isDarkTheme: boolean) => {
    const theme: THEMES = isDarkTheme ? THEMES.DARK : THEMES.LIGHT;
  
    saveCurrentTheme(theme);
  };

  // System initiated theme change
  const systemColorChangeHandler = (event: MediaQueryListEvent): void => {
    updateTheme(event.matches);
  };

  // User initiated theme change
  const toggleTheme = (): void => {
    updateTheme(themeState === THEMES.LIGHT);
  };
  
  return (
    <ThemeContext.Provider value={{ theme: themeState, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeSwitchProvider;