import React from "react";

const ExternalButton = ({ children, active, linkto }) => {
  return (
    <a
      href={linkto}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black" : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </a>
  );
};

export default ExternalButton;
