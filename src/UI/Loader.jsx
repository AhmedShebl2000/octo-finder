import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-fuchsia-600 border-opacity-20"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-fuchsia-600 border-l-transparent border-r-transparent border-b-transparent absolute top-0 left-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-xs">🐙</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
