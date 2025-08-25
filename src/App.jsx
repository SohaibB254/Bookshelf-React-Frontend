import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
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


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/store'
          element={<Store />} />
        <Route
          path='/contact'
          element={<Contact />} />
        <Route
          path='/about'
          element={<About />} />
        <Route
          path='/cart'
          element={<Cart />} />
        <Route
          path='/categories/:catName'
          element={<Categories />} />

        <Route
          path='/bookcard'
          element={<BookCard />} />
        <Route
          path='/checkout'
          element={<Checkout />} />
        <Route
          path='/admindashboard'
          element={<DashBoardHome />} />
        <Route
          path='/userprofile'
          element={<Profile />} />
        <Route
          path='/userprofile/account'
          element={<Account />} />

      </Routes>

    </>
  )
}

export default App
