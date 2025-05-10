"use client";

import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function WFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Sahayta</h2>
          <p className="text-sm mt-2">
            AI-powered marketing agency delivering automation, websites, and
            social media solutions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">📧 info@sahayta.co.in</p>
          <p className="text-sm">📞 +91-7479769111</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-1 text-xl">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-6 text-gray-400">
        © 2025 Sahayta. All rights reserved.
      </div>
    </footer>
  );
}
