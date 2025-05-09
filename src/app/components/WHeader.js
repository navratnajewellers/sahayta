"use client";
import Link from "next/link";

export default function WHeader() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Sahayta
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-blue-500">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
