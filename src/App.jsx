import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import BookCard from "./components/BookCard";
import Profile from "./pages/User/Profile.jsx";
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
import NotFound from "./pages/NotFound.jsx";
import Policy from "./pages/Policy.jsx";
import { HomeVProvider } from "./context/HomeVContext.jsx";
import { WishProvider } from "./context/WishContext.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./components/BlogDetails.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Loader runs for a few seconds, then disappears
    const timer = setTimeout(() => setLoading(false), 4500); // matches Loader duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop />
      {/* {loading && <Loader duration={3000} />} Loader on top */}
      <HomeVProvider>
        <CheckoutProvider>
          <LibraryProvider>
            <WishProvider>
              <CartProvider>
                {showNavbar && <Navbar />}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store/:booktype" element={<Store />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/:source/:id/checkout" element={<Checkout />} />
                  <Route path="/:source/book/:id" element={<BookCard />} />
                  <Route path="/categories/:catName" element={<Categories />} />
                </Routes>
              </CartProvider>
            </WishProvider>
          </LibraryProvider>
        </CheckoutProvider>
        <Routes>
          {/* <Route path="/*" element={<NotFound setShowNavbar={setShowNavbar} />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/details/:id" element={<BlogDetails/>}/>
          <Route path="/policy" element={<Policy />} />
          <Route path="/about" element={<About />} />
          <Route path="/library/readbook" element={<ReaderPage />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </HomeVProvider>
    </>
  );
}

export default App;
