import React from "react";
import { Button } from "@/components/ui/button";

type params = {
  image: string;
  isShadow: boolean;
};

export default function ButtonOptionsIcon({ image, isShadow }: params) {
  return (
    <>
      {isShadow && (
        <Button className="rounded-full bg-white overflow-hidden h-max shadow-lg">
          <img src={image} width={25} height={40} alt="search" />
        </Button>
      )}
      {!isShadow && (
        <Button className="rounded-full bg-white overflow-hidden h-max">
          <img src={image} width={25} height={40} alt="search" />
        </Button>
      )}
    </>
  );
}
