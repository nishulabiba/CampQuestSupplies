import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types/Types';

interface CartItem {
  _id: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalQuantity: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  calculateTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i._id === item._id);
      if (itemExists) {
        return prevItems.map((i) => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const increaseQuantity = (id: string) => {
    setCartItems((prevItems) => prevItems.map((item) => item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) => prevItems.map((item) => item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id: string) => {
    const confirmation = window.confirm("Are you sure you want to remove this item?");
    if (confirmation) {
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    }
  };

  const calculateTotalPrice = (products: Product[]) => {
    return cartItems.reduce((acc, item) => {
      const product = products.find((product) => product._id === item._id);
      return acc + (product ? product.price * item.quantity : 0);
    }, 0);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
