// "use client";
// import Link from "next/link";

// export default function WHeader() {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold text-blue-600">
//           Sahayta
//         </Link>
//         <nav className="space-x-6 hidden md:flex">
//           <Link href="/" className="hover:text-blue-500">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-blue-500">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-blue-500">
//             Services
//           </Link>
//           <Link href="/portfolio" className="hover:text-blue-500">
//             Portfolio
//           </Link>
//           <Link href="/contact" className="hover:text-blue-500">
//             Contact
//           </Link>
//         </nav>
//         <Link
//           href="/contact"
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
//         >
//           Get a Quote
//         </Link>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/header.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Sahayta
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 transition font-comic-n text-lg font-extrabold hover:scale-110 h-desktop-link "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className=" hidden md:inline-block px-4 py-2 rounded-lg text-sm relative z-0 get-quote-link"
          >
            <span className=" relative z-0 get-quote-text ">Get a Quote</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className=" cursor-pointer "
            >
              {isOpen ? (
                <X size={24} className=" text-red-500 " />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white px-4 pb-4"
            >
              <ul className="flex flex-col gap-3 justify-center items-center pt-7  ">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 text-lg font-medium hover:text-blue-600 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className=" flex justify-center items-center mt-5 mb-5 ">
                <Link
                  href="/contact"
                  className=" inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <div className=" py-7 "></div>
    </>
  );
}
