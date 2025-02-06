"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  // This will be replaced with actual cart data later
  const cartIsEmpty = true;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-primaryColor mb-8 font-montserrat">
        Shopping Cart
      </h1>

      {cartIsEmpty ? (
        <div className="flex flex-col items-center justify-center py-12 bg-whitishColor rounded-lg">
          <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link href="/creations">
            <Button className="bg-primaryColor hover:bg-primaryColor/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-4">
            {/* Cart items will be mapped here */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/placeholder.jpg"
                  alt="Product"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">Product Name</h3>
                <p className="text-gray-600">$XX.XX</p>
                <div className="flex items-center gap-2 mt-2">
                  <select className="border rounded px-2 py-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$XX.XX</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$XX.XX</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$XX.XX</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-primaryColor hover:bg-primaryColor/90 mb-2">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Get Your Receipt
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
