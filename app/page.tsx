"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import router from "next/router";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      {/* Main Content */}
      <div className="relative grid grid-cols-12 grid-rows-12 px-[80px] mt-6 h-[809px] overflow-hidden">
        {/* Text Content */}
        <div className="col-span-8 row-start-5 row-span-2 flex flex-col gap-2 ">
          <h2 className="font-inter font-semibold text-4xl">
            Turn Your Idea to a
          </h2>
          <h1 className="font-montserrat font-bold text-9xl">
            Meaningful
            <span className="text-primaryColor"> Craft</span>
          </h1>
        </div>

        {/* Image Content */}
        <Image
          src="/manHome.png"
          width={800}
          height={600}
          alt="Hero Image"
          className="absolute col-span-4 col-start-8 row-start-1 row-span-12 self-center ml-[140px] z-20"
        />

        {/* Paragraph */}
        <div className="col-span-5 row-start-9 row-span-1">
          <p className="font-inter font-semibold italic text-grayColor text-2xl">
            Discover the art of handmade creativity! Explore unique, handcrafted
            treasures made with love and care.
          </p>
        </div>

        {/* Button */}
        <div className="col-span-5 row-start-10 row-span-1 mt-6">
          <div className="flex gap-4">
            <Button
              asChild
              className="w-[350px] bg-whitishColor  shadow-lg rounded-sm py-7 hover:bg-white"
            >
              <div className="flex gap-[50px] justify-between">
                <Link
                  href="/"
                  className="font-inter font-semibold text-black text-lg"
                >
                  Connect with us
                </Link>
                <Button
                  className="bg-primaryColor rounded-sm p-5 hover:bg-primaryColor hover:shadow-lg transition"
                  size="icon"
                >
                  <ArrowRight size={30} className="text" />
                </Button>
              </div>
            </Button>
            <Button
              asChild
              className="w-[350px] bg-whitishColor  shadow-lg rounded-sm py-7 hover:bg-white"
            >
              <div className="flex gap-[50px] justify-between">
                <Link
                  href="/creations"
                  className="font-inter font-semibold text-black text-lg"
                >
                  View Works
                </Link>
                <Link href="/creations">
                  <Button
                    className="bg-primaryColor rounded-sm p-5 hover:bg-primaryColor hover:shadow-lg transition"
                    size="icon"
                  >
                    <ArrowRight size={30} className="text-white" />
                  </Button>
                </Link>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
