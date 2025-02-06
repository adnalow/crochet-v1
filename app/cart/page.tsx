"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, subtotal, tax, total, removeFromCart, updateQuantity } =
    useCart();
  const cartIsEmpty = items.length === 0;

  const handleQuantityChange = (itemId: string, quantity: number) => {
    updateQuantity(itemId, quantity);
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  const handleGetReceipt = () => {
    // This will be implemented in Task 3
    console.log("Generate receipt");
  };

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
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-primaryColor hover:bg-primaryColor/90 mb-2">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGetReceipt}
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
