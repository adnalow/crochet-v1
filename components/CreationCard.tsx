import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Flower } from "@/data/flowers";
import ButtonOptionsIcon from "./ButtonOptionsIcon";
import { Button } from "./ui/button";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function CreationCard({
  name,
  type,
  briefDescription,
  description,
  image,
}: Flower) {
  return (
    <Card className="w-full h-full bg-whitishColor rounded-2xl shadow-xlg font-inter font-semibold p-4 md:p-6 lg:p-10">
      <div className="flex flex-col h-full">
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content Container - Flexible height */}
        <div className="flex flex-col flex-grow justify-between gap-4 mt-4">
          {/* Description - Will expand based on content */}
          <p className="text-black italic text-base md:text-lg line-clamp-3">
            {briefDescription}
          </p>

          {/* Bottom Section - Fixed height */}
          <div className="flex justify-between items-center gap-4 mt-auto">
            <ButtonOptionsIcon
              image={`/logoOptions/${type}.png`}
              isShadow={true}
              onClick={() => {}}
            />
            <Link
              href={`/creations/${slugify(name)}`}
              className="flex-shrink-0"
            >
              <Button className="bg-primaryColor text-white font-inter font-semibold rounded-2xl text-base md:text-lg shadow-lg min-w-[100px] md:min-w-[150px]">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
