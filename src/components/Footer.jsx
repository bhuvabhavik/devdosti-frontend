import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-base-200 text-neutral-content py-4 shadow-md border-t border-base-300 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 gap-2 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <p>© {new Date().getFullYear()} DevDosti. All rights reserved.</p>
        </div>
        <p className="text-sm text-center text-gray-400">
          Made with ❤️ by{" "}
          <a href="https://bhuvabhavik.com" target="_blank" className="underline">
            Bhavik Bhuva
          </a>{" "}
          — Because every dev deserves a dost.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="fixed bottom-0 w-full bg-base-200 text-neutral-content p-4">
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
//         <svg
//           width="36"
//           height="36"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           fillRule="evenodd"
//           clipRule="evenodd"
//           className="fill-current"
//         >
//           <path d="M22.672 15.226l-2.432.811..."></path>
//         </svg>
//         <p className="text-center">Copyright DevDosti © {new Date().getFullYear()} - All rights reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
