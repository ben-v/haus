import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='overflow-y- min-h-screen scroll-smooth bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
