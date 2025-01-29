import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="shadow-lg py-4 px-[80px] bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={"/logo.png"}
            width={80}
            height={80}
            alt="JustCraft Logo"
          />
          <h1 className="font-montserrat font-bold text-5xl">JustCraft</h1>
        </div>
        <div>
          <ul className="flex gap-12 text-grayColor font-inter font-semibold text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/creations">Creations</Link>
            </li>
            <li>
              <Link href="/about">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
