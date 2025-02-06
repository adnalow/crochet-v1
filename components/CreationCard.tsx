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
    <Card className="w-full h-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 font-inter p-4">
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow justify-between mt-4">
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed min-h-[3em] mb-4">
            {briefDescription}
          </p>

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            <ButtonOptionsIcon
              image={`/logoOptions/${type}.png`}
              isShadow={true}
              onClick={() => {}}
            />
            <Link
              href={`/creations/${slugify(name)}`}
              className="flex-shrink-0"
            >
              <Button className="bg-primaryColor hover:bg-primaryColor/90 text-white font-medium rounded-xl px-6 py-2 text-sm">
                DETAILS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
