import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import {LibraryProvider} from './context/LibraryContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <LibraryProvider>
     <CartProvider>
       <App />
     </CartProvider>
     </LibraryProvider>
    </BrowserRouter>
)
