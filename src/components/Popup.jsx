import React, { useState } from "react";

const Popup = ({ display, popType, popBg }) => {
  return (
    <div className={` ${display} fixed top-[10vh] z-50`}>
      <div
        className={`${popBg} w-screen h-10 text-center flex items-center justify-center relative`}
      >
        <div className="w-full">
          <h1>{popType}</h1>
        </div>
      </div>
    </div>
  );
};

export default Popup;
