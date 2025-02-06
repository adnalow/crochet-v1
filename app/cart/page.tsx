"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { generateReceipt } from "@/lib/generateReceipt";
import ReceiptPreviewModal from "@/components/ReceiptPreviewModal";

export default function CartPage() {
  const { items, subtotal, tax, total, removeFromCart, updateQuantity } =
    useCart();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const cartIsEmpty = items.length === 0;

  const handleQuantityChange = (itemId: string, quantity: number) => {
    updateQuantity(itemId, quantity);
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  const handleGetReceipt = () => {
    if (cartIsEmpty) return;
    setIsPreviewOpen(true);
  };

  const handleDownloadReceipt = () => {
    generateReceipt({
      items,
      subtotal,
      tax,
      total,
    });
    setIsPreviewOpen(false);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] w-full bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryColor mb-6 sm:mb-8 font-montserrat">
            Shopping Cart
          </h1>

          {cartIsEmpty ? (
            <div className="flex flex-col items-center justify-center py-8 sm:py-12 bg-white rounded-lg shadow-sm">
              <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mb-4" />
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                Your cart is empty
              </p>
              <Link href="/creations">
                <Button className="bg-primaryColor hover:bg-primaryColor/90 px-6 py-2 text-base">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <div className="relative w-full sm:w-24 h-48 sm:h-24 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow w-full sm:w-auto">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-0">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-start gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="sr-only"
                          >
                            Quantity
                          </label>
                          <select
                            id={`quantity-${item.id}`}
                            className="border rounded px-3 py-1.5 bg-white focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                Number(e.target.value)
                              )
                            }
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-primaryColor hover:bg-primaryColor/90 py-6 text-base font-semibold">
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-semibold flex items-center justify-center gap-2"
                    onClick={handleGetReceipt}
                    disabled={cartIsEmpty}
                  >
                    <FileText className="h-5 w-5" />
                    Get Your Receipt
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ReceiptPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onDownload={handleDownloadReceipt}
        items={items}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />
    </>
  );
}
