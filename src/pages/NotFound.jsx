import { motion } from "framer-motion";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function NotFound({setShowNav}) {

  useEffect(()=>{
    setShowNav(false)

    return ()=> setShowNav(true)
  },[setShowNav])
  return (
    <div className="flex items-center justify-center  z-50 min-h-screen text-gray-700  dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle className="w-20 h-20 text-red-500" />
        </motion.div>

        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="px-6 py-3  border relative  rounded-[8px] font-semibold "
        >

          &lt;&lt;Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
