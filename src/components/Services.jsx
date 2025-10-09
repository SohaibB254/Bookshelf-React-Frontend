import { motion } from "motion/react";
import React from "react";
import Features from "./Features";

const Services = () => {
  return (
    <div className=" lg:text-[32px] sm:text-[23px] font-inter my-12">
      <h1 className="text-center sm:text-3xl text-xl dark:border-gray-700 dark:text-[var(--lighter)] text-[var(--darker)]  font-semibold">
        Why Choose Us?
      </h1>

      <div
        id="servicesContainer"
        className=" lg:px-20 px-5 h-full py-12 dark:text-gray-300 mt-10 items-center justify-center lg:justify-normal  flex flex-wrap gap-5"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
          }}
          id="serviceCard"
          className="w-[400px] lg:h-[300px] border dark:border-gray-800 overflow-hidden px-4 py-2 flex flex-col items-center rounded-md"
        >
          <h1 className="cursor-pointer   transition text-green-500">
            Fast Delivery
          </h1>
          <p className="sm:text-[0.6em] text-[0.8em] text-gray-400 ">
            We know your time is valuable. That’s why we offer fast and reliable
            delivery services across the country. Most orders are processed
            within 24 hours and delivered within 2–3 business days. Whether
            you're ordering for yourself or as a gift, we make sure your books
            arrive quickly and in perfect condition.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.5,
          }}
          id="serviceCard"
          className="w-[400px] lg:h-[300px] border dark:border-gray-800  overflow-hidden px-4 py-2 flex flex-col items-center rounded-md"
        >
          <h1 className="cursor-pointer   transition text-green-500">
            Affordable Plans
          </h1>
          <p className="sm:text-[0.6em] text-[0.8em] text-gray-400 ">
            Enjoy great reads without breaking the bank. Our affordable pricing
            plans are designed to give you the best value, whether you're buying
            one book or building a library. With regular discounts, bundle
            deals, and student-friendly offers, reading more has never been
            easier—or more budget-friendly.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{
            duration: 0.5,
          }}
          id="serviceCard"
          className="w-[400px] lg:h-[300px] border dark:border-gray-800  overflow-hidden px-4 py-2 flex flex-col items-center rounded-md"
        >
          <h1 className="cursor-pointer   transition text-green-500">
            30 Days Returns
          </h1>
          <p className="sm:text-[0.6em] text-[0.8em] text-gray-400 ">
            Shop with confidence. If you're not completely satisfied with your
            purchase, we offer a hassle-free 30-day return policy. Whether the
            book wasn’t what you expected or you changed your mind, simply
            return it in its original condition and get a full refund or
            exchange—no questions asked.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: 0.5,
          }}
          id="serviceCard"
          className="w-[400px] lg:h-[300px] border dark:border-gray-800  overflow-hidden px-4 py-2 flex flex-col items-center rounded-md"
        >
          <h1 className="cursor-pointer   transition text-green-500">
            Secure Payments
          </h1>
          <p className="sm:text-[0.6em] text-[0.8em] text-gray-400 ">
            Your privacy and security are our top priority. All payments are
            processed through secure, encrypted gateways to ensure your personal
            and financial data stays protected. Choose from multiple trusted
            payment options and check out with peace of mind.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
