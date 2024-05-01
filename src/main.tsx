import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './content.css'
import { initTheming, ThemeSwitchProvider } from './components/providers/ThemeSwitchProvider.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import { Helmet, HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Init theme BEFORE rendering as to prevent any flickerings of light > dark. This also is necessary to get the theming applied
// to the scrollbars, at least in safari/firefox...scrollbar colors not changing in chrome. Edge cases, so do not worry about as of 4/5/24.
initTheming();

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeSwitchProvider>
      <HelmetProvider>
            <Helmet>
              {/* Load font in header via link to use "preload" rel setting. Still need to ref in CSS though. */}
              {/* Preconnect to Google fonts to speed loading of font from their CDN */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
              <link rel="stylesheet preload" as="style" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" crossOrigin="anonymous" />
            </Helmet>
            <App />
          </HelmetProvider>
      </ThemeSwitchProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
