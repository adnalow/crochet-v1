"use client";

import ButtonOptionsIcon from "@/components/ButtonOptionsIcon";
import CreationCard from "@/components/CreationCard";
import { Button } from "@/components/ui/button";
import { flowers } from "@/data/flowers";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  // State to track the selected filter type
  const [selectedType, setSelectedType] = useState("all");

  // Function to handle button clicks
  const handleFilterClick = (type: string) => {
    console.log("Selected type:", type); // Debug: log the selected filter type
    setSelectedType(type);
  };

  // Filter the flowers array based on the selected type
  const filteredFlowers =
    selectedType === "all"
      ? flowers
      : flowers.filter((flower) => flower.type === selectedType);

  return (
    <div className="flex max-w-screen max-h-screen flex-col items-center mt-4 px-[80px]">
      <div className="flex flex-col items-center gap-16 w-[100%]">
        <div className="flex flex-col items-center gap-7">
          <h1 className="font-montserrat font-bold text-7xl">Creations</h1>
          <div className="w-[600px] h-fit bg-primaryColor rounded-md p-2 items-center justify-between flex shadow-xlg">
            {/* Buttons for filtering */}
            <ButtonOptionsIcon
              image="/logoOptions/tulips.png"
              isShadow={false}
              onClick={() => handleFilterClick("tulips")}
            />
            <ButtonOptionsIcon
              image="/logoOptions/rose.png"
              isShadow={false}
              onClick={() => handleFilterClick("rose")}
            />
            <ButtonOptionsIcon
              image="/logoOptions/sunflower.png"
              isShadow={false}
              onClick={() => handleFilterClick("sunflower")}
            />
            <ButtonOptionsIcon
              image="/logoOptions/orchids.png"
              isShadow={false}
              onClick={() => handleFilterClick("orchids")}
            />
            <ButtonOptionsIcon
              image="/logoOptions/all.png"
              isShadow={false}
              onClick={() => handleFilterClick("all")}
            />
          </div>
        </div>
        <div className="w-full max-h-[570px] min-h-[250px] overflow-y-auto rounded-lg shadow-xlg bg-white px-[100px] py-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-3 gap-8">
            {/* Render filtered flowers */}
            {filteredFlowers.map((flower, index) => (
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
