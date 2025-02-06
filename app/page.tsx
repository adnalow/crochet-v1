"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row w-full max-w-7xl mx-auto min-h-[calc(100vh-200px)] px-4 md:px-6 lg:px-8 py-8 md:py-12 gap-8">
      {/* Main Content */}
      <div className="flex flex-col flex-1 gap-6 justify-center">
        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h2 className="font-inter font-semibold text-2xl md:text-3xl">
            Turn Your Idea to a
          </h2>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">
            Meaningful
            <span className="text-primaryColor"> Craft</span>
          </h1>
        </div>

        {/* Paragraph */}
        <div className="max-w-[600px]">
          <p className="font-inter font-semibold italic text-grayColor text-base md:text-lg">
            Discover the art of handmade creativity! Explore unique, handcrafted
            treasures made with love and care.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[800px]">
          <Link href="/contact" className="w-full sm:max-w-[350px]">
            <Button
              className="w-full bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white shadow-lg group relative overflow-hidden border border-gray-100"
              variant="ghost"
            >
              <div className="flex items-center justify-between w-full px-4 py-3">
                <span className="font-inter font-semibold text-gray-800 text-base">
                  Connect with us
                </span>
                <div className="bg-primaryColor rounded p-2 transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:shadow-md">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </Button>
          </Link>

          <Link href="/creations" className="w-full sm:max-w-[350px]">
            <Button
              className="w-full bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white shadow-lg group relative overflow-hidden border border-gray-100"
              variant="ghost"
            >
              <div className="flex items-center justify-between w-full px-4 py-3">
                <span className="font-inter font-semibold text-gray-800 text-base">
                  View Works
                </span>
                <div className="bg-primaryColor rounded p-2 transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:shadow-md">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden xl:flex xl:items-end xl:justify-center xl:w-1/3">
        <div className="relative w-full max-w-[400px] aspect-[3/4]">
          <Image
            src="/manHome.png"
            fill
            alt="Hero Image"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
