"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-lg bg-white w-full relative z-50">
      <div className="px-4 md:px-6 lg:px-[40px] py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              width={32}
              height={32}
              alt="JustCraft Logo"
              className="w-8 h-8 md:w-[40px] md:h-[40px]"
            />
            <h1 className="font-montserrat font-bold text-lg md:text-2xl lg:text-3xl ml-2">
              JustCraft
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-7 w-7 text-primaryColor" />
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 text-grayColor font-inter font-semibold text-sm lg:text-base">
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t">
              <nav className="px-4">
                <ul className="flex flex-col text-grayColor font-inter font-semibold text-base">
                  <li>
                    <Link
                      href="/"
                      className="block py-4 px-2 hover:bg-whitishColor hover:text-primaryColor transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-4 px-2 hover:bg-whitishColor hover:text-primaryColor transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/creations"
                      className="block py-4 px-2 hover:bg-whitishColor hover:text-primaryColor transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Creations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-4 px-2 hover:bg-whitishColor hover:text-primaryColor transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
