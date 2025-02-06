"use client";

import React from "react";
import { Button } from "./ui/button";
import { X, Download } from "lucide-react";
import { CartItem } from "@/types/cart";

interface ReceiptPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export default function ReceiptPreviewModal({
  isOpen,
  onClose,
  onDownload,
  items,
  subtotal,
  tax,
  total,
}: ReceiptPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primaryColor">
            Receipt Preview
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Receipt Content */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          {/* Store Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">JustCraft Receipt</h3>
            <p className="text-sm text-gray-600">
              Date: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              Time: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* Items Table */}
          <div className="mb-6">
            <table className="w-full">
              <thead className="bg-primaryColor text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-center">Quantity</th>
                  <th className="py-2 px-4 text-right">Price</th>
                  <th className="py-2 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4 text-center">{item.quantity}</td>
                    <td className="py-2 px-4 text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="flex flex-col items-end gap-1 text-sm mb-6">
            <div className="flex gap-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex gap-4 font-bold text-base">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            <p>Thank you for shopping with JustCraft!</p>
            <p>We appreciate your business.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-primaryColor hover:bg-primaryColor/90"
            onClick={onDownload}
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
