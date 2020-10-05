import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div
      className="border-t border-solid border-gray-300 bg-bottom"
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/000/092/184/original/various-broccoli-vectors.jpg)",
      }}
    >
      <footer className="container mx-auto px-10 sm:px-0 h-20 flex flex-col items-center justify-center">
        <h1 className="text-xl">
          Made with
          <span className="text-red-600"> &hearts; </span>
          in Melbourne
        </h1>
        <h1 className="text-xl">
          &copy; {currentYear} Brocolli & Co. All rights reserved
        </h1>
      </footer>
    </div>
  );
};
