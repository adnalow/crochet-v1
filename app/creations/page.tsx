"use client";

import ButtonOptionsIcon from "@/components/ButtonOptionsIcon";
import CreationCard from "@/components/CreationCard";
import { flowers } from "@/data/flowers";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function Page() {
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredFlowers =
    selectedType === "all"
      ? flowers
      : flowers.filter((flower) => flower.type === selectedType);

  const filterOptions = [
    { type: "tulips", image: "/logoOptions/tulips.png", label: "Tulips" },
    { type: "rose", image: "/logoOptions/rose.png", label: "Roses" },
    {
      type: "sunflower",
      image: "/logoOptions/sunflower.png",
      label: "Sunflowers",
    },
    { type: "orchids", image: "/logoOptions/orchids.png", label: "Orchids" },
    { type: "all", image: "/logoOptions/all.png", label: "All" },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 md:gap-7">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-7xl">
            Creations
          </h1>

          {/* Filter Buttons */}
          <div className="w-full max-w-[600px] bg-white rounded-2xl p-3 flex items-center justify-between gap-3 shadow-xlg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {filterOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => handleFilterClick(option.type)}
                className={cn(
                  "flex flex-col items-center gap-2 min-w-[80px] p-2 rounded-xl transition-all duration-200",
                  selectedType === option.type
                    ? "bg-primaryColor shadow-lg scale-105"
                    : "hover:bg-gray-100"
                )}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full bg-white p-2 shadow-md">
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className={cn(
                    "text-xs md:text-sm font-medium whitespace-nowrap",
                    selectedType === option.type
                      ? "text-white"
                      : "text-gray-600"
                  )}
                >
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full min-h-[calc(100vh-300px)] bg-[#F5F5F5] p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[1400px] mx-auto">
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
