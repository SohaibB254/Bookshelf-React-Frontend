import './App.css'
import Home from './pages/Home'
import { Route, Routes, } from 'react-router'
import Store from './pages/Store'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Checkout from './pages/Checkout'
import BookCard from './components/BookCard'
import DashBoardHome from './pages/AdminDashboard/DashBoardHome'
import Profile from './pages/User/Profile'
import Account from './pages/User/Account'
import ManageBooks from './pages/AdminDashboard/ManageBooks'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Library from './components/Library'
import ReaderPage from './components/ReaderPage'
import { CartProvider } from './context/CartContext.jsx'
import { LibraryProvider } from './context/LibraryContext.jsx'
import { CheckoutProvider } from './context/CheckoutContext.jsx'


function App() {

  return (
    <>
      <CheckoutProvider>
        <LibraryProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route
                path='/store'
                element={<Store />} />
              <Route
                path='/cart'
                element={<Cart />} />
              <Route
                path='/library'
                element={<Library />} />
              <Route
                path='/checkout'
                element={<Checkout />} />
              <Route
                path='/bookcard'
                element={<BookCard />} />
              <Route
                path='/categories/:catName'
                element={<Categories />} />
            </Routes>
          </CartProvider>
        </LibraryProvider>
      </CheckoutProvider>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contact'
          element={<Contact />} />
        <Route
          path='/about'
          element={<About />} />
        <Route
          path='/library/readbook'
          element={<ReaderPage />} />


        <Route
          path='/admindashboard'
          element={<DashBoardHome />} />
        <Route
          path='/userprofile'
          element={<Profile />} />
        <Route
          path='/userprofile/account'
          element={<Account />} />
        <Route
          path='/admindashboard/managebooks'
          element={<ManageBooks />} />
        <Route path='/auth/login
        '
          element={<Login />} />
        <Route path='/auth/signup'
          element={<Signup />} />
      </Routes>

    </>
  )
}

export default App
