import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primaryColor w-full text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Crochet Creations</h3>
          <p className="text-gray-200">
            Handcrafted floral arrangements that bring beauty and joy to your
            space.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Pinterest
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/creations" className="hover:text-gray-300">
              Creations
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 text-gray-200">
            <p>Email: info@crochetcreations.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Craft Street</p>
            <p>Artisan Valley, AV 12345</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200/20 text-center text-gray-300">
        <p>
          © {new Date().getFullYear()} Crochet Creations. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
