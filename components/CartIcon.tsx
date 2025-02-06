"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart">
      <Button
        variant="ghost"
        className="relative p-2 hover:bg-gray-100 rounded-full"
        aria-label={`Shopping cart with ${totalItems} items`}
      >
        <ShoppingCart className="h-6 w-6 text-primaryColor" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-primaryColor text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}
