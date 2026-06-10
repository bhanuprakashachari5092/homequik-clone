import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "./AuthContext";

export interface CartItem {
  id: string;
  title: string;
  price: string;
  image?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
  isCheckingOut: boolean;
  totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Simple local storage persistence
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hq_cart");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse cart", e);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hq_cart", JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const checkout = async () => {
    if (!user) {
      throw new Error("You must be logged in to book a service.");
    }
    if (items.length === 0) {
      throw new Error("Your cart is empty.");
    }

    setIsCheckingOut(true);
    try {
      // Save order to Firestore
      const ordersRef = collection(db, "bookings");
      await addDoc(ordersRef, {
        userId: user.uid,
        userEmail: user.email,
        items: items,
        status: "pending",
        createdAt: serverTimestamp(),
        totalItems: items.reduce((sum, i) => sum + i.quantity, 0)
      });
      
      // Clear cart after successful checkout
      clearCart();
    } catch (error) {
      console.error("Checkout failed", error);
      throw error;
    } finally {
      setIsCheckingOut(false);
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, checkout, isCheckingOut, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
