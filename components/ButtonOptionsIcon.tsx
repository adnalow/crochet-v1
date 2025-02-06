import React from "react";
import { Button } from "@/components/ui/button";

type params = {
  image: string;
  isShadow: boolean;
  onClick: () => void;
};

export default function ButtonOptionsIcon({
  image,
  isShadow,
  onClick,
}: params) {
  return (
    <Button
      className={`rounded-full bg-white overflow-hidden h-max hover:bg-white hover:opacity-100 ${
        isShadow ? "shadow-lg" : ""
      }`}
      onClick={onClick}
    >
      <img src={image} width={30} height={40} alt="search" />
    </Button>
  );
}
