import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import NotFound from './pages/NotFound.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <BrowserRouter>
  <UserContextProvider>
  <ThemeProvider>
   <App />
   </ThemeProvider>
   </UserContextProvider>
  </BrowserRouter>

 </StrictMode>
)
