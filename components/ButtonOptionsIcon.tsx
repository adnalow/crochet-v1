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
      className={`rounded-full bg-white overflow-hidden h-max ${
        isShadow ? "shadow-lg" : ""
      }`}
      onClick={onClick} // Move onClick here
    >
      <img src={image} width={30} height={40} alt="search" />
    </Button>
  );
}
