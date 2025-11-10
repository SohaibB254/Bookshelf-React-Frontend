import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <BrowserRouter>
  <ThemeProvider>
   <App />
   </ThemeProvider>
  </BrowserRouter>

 </StrictMode>
)
