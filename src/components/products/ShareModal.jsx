import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";

const ShareModal = ({ isOpen, onClose }) => {
  const currentUrl = window.location.href;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-transparent z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl relative shadow-lg border border-gray-700 w-[90%] max-w-md p-6 text-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 dark:text-gray-300 text-gray-500 dark:hover:text-red-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl dark:text-gray-300 font-bold mb-4">Share this book</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl text-gray-600 mb-6">
          <FaWhatsapp className="cursor-pointer text-green-500 hover:scale-110 transition" />
          <FaFacebook className="cursor-pointer text-blue-600 hover:scale-110 transition" />
          <FaInstagram className="cursor-pointer text-pink-500 hover:scale-110 transition" />
          <FaSnapchat className="cursor-pointer text-yellow-400 hover:scale-110 transition" />
        </div>

        {/* URL input */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 border dark:bg-inherit dark:text-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm  "
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShareModal;
