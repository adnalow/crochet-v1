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
          <Button
            asChild
            className="w-full sm:max-w-[350px] bg-whitishColor shadow-lg rounded-sm py-4 md:py-7 hover:bg-white"
          >
            <div className="flex justify-between items-center gap-4">
              <Link
                href="/"
                className="font-inter font-semibold text-black text-base md:text-lg"
              >
                Connect with us
              </Link>
              <Button
                className="bg-primaryColor rounded-sm p-3 md:p-5 hover:bg-primaryColor hover:shadow-lg transition"
                size="icon"
              >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </Button>
            </div>
          </Button>

          <Button
            asChild
            className="w-full sm:max-w-[350px] bg-whitishColor shadow-lg rounded-sm py-4 md:py-7 hover:bg-white"
          >
            <div className="flex justify-between items-center gap-4">
              <Link
                href="/creations"
                className="font-inter font-semibold text-black text-base md:text-lg"
              >
                View Works
              </Link>
              <Link href="/creations">
                <Button
                  className="bg-primaryColor rounded-sm p-3 md:p-5 hover:bg-primaryColor hover:shadow-lg transition"
                  size="icon"
                >
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </Button>
              </Link>
            </div>
          </Button>
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
