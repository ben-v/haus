import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './content.css'
import { initTheming, ThemeSwitchProvider } from './components/providers/ThemeSwitchProvider.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import loadAnalytics from './components/analytics/LoadAnalytics.ts'

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Init theme BEFORE rendering as to prevent any flickerings of light > dark. This also is necessary to get the theming applied
// to the scrollbars, at least in safari/firefox...scrollbar colors not changing in chrome. Edge cases, so do not worry about as of 4/5/24.
initTheming();

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeSwitchProvider>
          <App />
      </ThemeSwitchProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

loadAnalytics();