import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-base-200 text-neutral-content p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p className="text-center">Copyright DevDosti © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;