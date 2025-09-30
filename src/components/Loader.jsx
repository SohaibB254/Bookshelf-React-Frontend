import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

const Loader = ({ duration }) => {
  const [loading, setLoading] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const step = 100 / (duration / 50);
    const interval = setInterval(() => {
      start += step;
      if (start >= 100) {
        clearInterval(interval);
        setLoading(100);
        setTimeout(() => setDone(true),300);
      } else {
        setLoading(Math.floor(start));
      }
    }, 50);
    return ()=> clearInterval(interval);
  }, [duration]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#24BF6C]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Book */}
          <div className="relative w-72 h-72 flex flex-col justify-center items-center ">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Z6bGRzNXB0OXR0NTl2Yzl5eGRpY2thZWk1dnBtejZ3MHRwdXJrcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JwOUH7TbHFHg3LnX18/giphy.gif" className="w-full h-full" alt="" />
          </div>
            <h1 className=" text-white font-mono text-xl sm:text-3xl tracking-tight ">Website loading! Please wait</h1>
          {/* Loading text */}
          <div className="absolute text-center font-mono bottom-4 right-6 text-white text-xl sm:text-3xl font-semibold">
            {loading} %
          </div>
          <h1 className="absolute left-6 bottom-4 font-mono text-white text-sm sm:text-2xl">Use desktop for better experience</h1>
          <style>
            {`
          .book{
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
           }
          .page{
          animation: flip 1s infinite ease-in-out;
          transform-origin: left;
          }
          @keyframes flip{
          0%{ transform: rotateY(0deg) }
          50%{ transform: rotateY(-160deg) }
          100%{ transform: rotateY(0deg) }

          }
          `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
