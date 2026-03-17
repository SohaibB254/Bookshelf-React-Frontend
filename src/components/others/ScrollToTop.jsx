// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'}); // scrolls to top-left corner
  }, [pathname]);

  return null;
};

export default ScrollToTop;