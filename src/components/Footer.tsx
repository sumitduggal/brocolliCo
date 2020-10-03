import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className="border-t border-solid border-gray-300">
      <footer className="container mx-auto px-10 sm:px-0 h-20 flex flex-col items-center justify-center">
        <h1 className="text-xl">Made with &hearts; in Melbourne</h1>
        <h1 className="text-xl">
          &copy; {currentYear} Brocolli & Co. All rights reserved
        </h1>
      </footer>
    </div>
  );
};