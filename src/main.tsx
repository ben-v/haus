import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './providers/ThemeProvider.tsx'
import './index.css'
import './content.css'
import { BrowserRouter } from 'react-router-dom'
import { initTheming } from './providers/ThemeProvider.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Init theme BEFORE rendering as to prevent any flickerings of light > dark. This also is necessary to get the theming applied
// to the scrollbars, at least in safari/firefox...scrollbar colors not changing in chrome. Edge cases, so do not worry about as of 4/5/24.
initTheming();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
