"use client";

import ButtonOptionsIcon from "@/components/ButtonOptionsIcon";
import CreationCard from "@/components/CreationCard";
import { flowers } from "@/data/flowers";
import React, { useState } from "react";

export default function Page() {
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredFlowers =
    selectedType === "all"
      ? flowers
      : flowers.filter((flower) => flower.type === selectedType);

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 md:gap-7">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-7xl">
            Creations
          </h1>

          {/* Filter Buttons */}
          <div className="w-full max-w-[600px] h-fit bg-primaryColor rounded-md p-2 flex items-center justify-between gap-2 shadow-xlg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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

        {/* Cards Container */}
        <div className="w-full h-[calc(100vh-300px)] overflow-y-auto rounded-lg shadow-xlg bg-white p-4 md:p-6 lg:p-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
