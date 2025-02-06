"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import CartIcon from "./CartIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-lg bg-white w-full relative z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="JustCraft Logo"
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <h1 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl ml-2">
              JustCraft
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-1 max-w-2xl ml-8">
            <ul className="flex justify-center gap-6 text-grayColor font-inter font-semibold text-sm lg:text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-primaryColor transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primaryColor transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/creations"
                  className="hover:text-primaryColor transition-colors"
                >
                  Creations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primaryColor transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section: Cart and Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            <CartIcon />
            <Button
              variant="ghost"
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-primaryColor" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t`}
        >
          <nav className="py-2">
            <ul className="flex flex-col text-grayColor font-inter font-medium text-base">
              <li>
                <Link
                  href="/"
                  className="flex items-center py-3 px-4 hover:bg-gray-50 hover:text-primaryColor transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center py-3 px-4 hover:bg-gray-50 hover:text-primaryColor transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/creations"
                  className="flex items-center py-3 px-4 hover:bg-gray-50 hover:text-primaryColor transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Creations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center py-3 px-4 hover:bg-gray-50 hover:text-primaryColor transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
