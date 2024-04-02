import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './providers/ThemeProvider.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initTheme } from './providers/ThemeProvider.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Init theme BEFORE rendering as to prevent any flickerings of light > dark.
initTheme();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
