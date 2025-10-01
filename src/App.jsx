import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, Router } from "react-router";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import BookCard from "./components/BookCard";
import Profile from "./pages/User/Profile.jsx";
import ManageBooks from "./pages/AdminDashboard/pages/ManageBooks.jsx";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Library from "./components/Library";
import ReaderPage from "./components/ReaderPage";
import { CartProvider } from "./context/CartContext.jsx";
import { LibraryProvider } from "./context/LibraryContext.jsx";
import { CheckoutProvider } from "./context/CheckoutContext.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AdminPanel from "./pages/AdminDashboard/AdminPanel.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader runs for a few seconds, then disappears
    const timer = setTimeout(() => setLoading(false), 4500); // matches Loader duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop />
      {/* {loading && <Loader duration={3000} />} Loader on top */}

      <CheckoutProvider>
        <LibraryProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/store/:booktype" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/library" element={<Library />} />
              <Route path="/:source/:id/checkout" element={<Checkout />} />
              <Route path="/:source/book/:id" element={<BookCard />} />
              <Route path="/categories/:catName" element={<Categories />} />
            </Routes>
          </CartProvider>
        </LibraryProvider>
      </CheckoutProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/library/readbook" element={<ReaderPage />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/userprofile" element={<Profile />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
