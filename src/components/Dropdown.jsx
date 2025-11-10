import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, onChange, placeholder ,bg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Selected value */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full   px-2 py-1   dark:text-gray-300  rounded-md flex justify-between items-center hover:border-gray-400`}
      >
        {selected || placeholder}
        <span className="ml-2 text-gray-500">▼</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={`absolute mt-1 w-full bg-gray-100 backdrop-blur-sm dark:text-gray-300 dark:bg-gray-900  dark:border-gray-800  border rounded-md shadow-lg z-50`}>
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-green-500"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
