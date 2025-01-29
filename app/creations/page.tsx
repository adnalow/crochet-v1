import ButtonOptionsIcon from "@/components/ButtonOptionsIcon";
import CreationCard from "@/components/CreationCard";
import { Button } from "@/components/ui/button";
import { flowers } from "@/data/flowers";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex max-w-screen max-h-screen flex-col items-center mt-4 px-[80px]">
      <div className="flex flex-col items-center gap-16 w-[100%]">
        <div className="flex flex-col items-center gap-7">
          <h1 className="font-montserrat font-bold text-7xl">Creations</h1>
          <div className="w-[600px] h-fit bg-primaryColor rounded-md p-2 items-center justify-between flex shadow-xlg">
            <ButtonOptionsIcon
              image="/logoOptions/tulips.png"
              isShadow={false}
            />
            <ButtonOptionsIcon image="/logoOptions/rose.png" isShadow={false} />
            <ButtonOptionsIcon
              image="/logoOptions/sunflower.png"
              isShadow={false}
            />
            <ButtonOptionsIcon
              image="/logoOptions/orchids.png"
              isShadow={false}
            />
            <ButtonOptionsIcon image="/logoOptions/all.png" isShadow={false} />
          </div>
        </div>
        <div className="w-full max-h-[580px] min-h-[250px] overflow-y-auto rounded-lg shadow-lg bg-white px-[100px] py-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-3 gap-8">
            {flowers.map((flower, index) => (
              <CreationCard
                key={index}
                name={flower.name}
                type={flower.type}
                briefDescription={flower.briefDescription}
                description={flower.description}
                image={flower.image}
                price={flower.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
