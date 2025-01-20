import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-white/10 bg-black">
      <div className="container px-4 mx-auto text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Digital Horizons. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
