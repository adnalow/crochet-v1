import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Flower } from "@/data/flowers";
import ButtonOptionsIcon from "./ButtonOptionsIcon";
import { Button } from "./ui/button";
import Link from "next/link";

function slugify(text: string) {
  console.log(text);
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w-]+/g, ""); // Remove special characters
}

export default function CreationCard({
  name,
  type,
  briefDescription,
  description,
  image,
}: Flower) {
  const slugifiedName = slugify(name); // Convert name to a slug
  return (
    <Card className="min-w-[400px] max-w-[500px] min-h-max p-10 bg-whitishColor rounded-2xl shadow-xlg font-inter font-semibold">
      <div className="flex flex-col gap-2 min-h-[350px]">
        <div className="relative w-full min-h-[200px] max-h-full    ">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="flex-grow text-black italic text-lg">
          {briefDescription}
        </p>
        <div className="flex justify-between items-center">
          <ButtonOptionsIcon
            image={`/logoOptions/${type}.png`}
            isShadow={true}
          />
          <Link href={`/creations/${name.replace(/\s+/g, "-").toLowerCase()}`}>
            <Button className="bg-primaryColor text-white font-inter font-semibold rounded-2xl text-lg shadow-lg min-w-[150px]">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
