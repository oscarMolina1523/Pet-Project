import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div
      id="loading-container"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C29B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <span className="text-sky-green mt-4 text-[2rem] font-semibold tracking-wide ">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
