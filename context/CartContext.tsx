"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, CartState } from "@/types/cart";

interface CartContextType extends CartState {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const TAX_RATE = 0.1; // 10% tax rate

const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>(initialCartState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate totals
  const calculateTotals = (items: CartItem[]) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, tax, total, totalItems };
  };

  // Add item to cart
  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.id === newItem.id
      );
      let updatedItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        updatedItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        updatedItems = [...prevCart.items, { ...newItem, quantity: 1 }];
      }

      return {
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== itemId);
      return {
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  };

  // Update item quantity
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return {
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart(initialCartState);
  };

  return (
    <CartContext.Provider
      value={{
        ...cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
