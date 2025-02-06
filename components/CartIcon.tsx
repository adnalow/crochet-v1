import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CartIcon({ itemCount = 0 }) {
  return (
    <Link href="/cart">
      <Button
        variant="ghost"
        className="relative p-2 hover:bg-gray-100 rounded-full"
        aria-label={`Shopping cart with ${itemCount} items`}
      >
        <ShoppingCart className="h-6 w-6 text-primaryColor" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-primaryColor text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </Button>
    </Link>
  );
}
