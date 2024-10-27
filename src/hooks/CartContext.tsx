import { useState, useEffect, ReactNode, createContext } from "react";
import {
  CartContextType,
  CartItem,
  CheckoutFormValues,
  FavoriteItem,
  Product,
} from "../types/Types";
import { useGetProductsQuery } from "../redux/api/api";
import Swal from "sweetalert2";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<CheckoutFormValues>()
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : [];
  });
  const { data } = useGetProductsQuery();

  const products: Product[] = data?.data || [];
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(() => {
    const favoriteString = localStorage.getItem("favorites");
    return favoriteString ? JSON.parse(favoriteString) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [cartItems, favoriteItems]);

  const addToCart = (id: string) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item._id === id);
      if (itemExists) {
        return prevItems.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { _id: id, quantity: 1 }];
      }
    });
    Swal.fire({
      text: `Added to the cart successfully!`,
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 500
      
  })
  };

  const increaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    Swal.fire({
      text: `Added 1 more!`,
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 500
      
  })
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    Swal.fire({
      text: `Decreased successfully!`,
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 500
      
  })
  };

  const removeItem = (id: string) => {
    Swal.fire({
      title: `Are yo sure?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#D1A054",
      confirmButtonText: "Delete"
  })
      .then(async(result) => {
          if (result.isConfirmed) {
            setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
            Swal.fire({
              text: `Deleted successfully!`,
              icon: "success",
              position: "top",
              showConfirmButton: false,
              timer: 500
              
          })
          }
      });
  };
  const cartProducts = ()=>{
    const items = cartItems?.map(p=> products.find(c=> p._id === c._id))
    return items;
  }

  const addFavorite = (id: string) => {
    setFavoriteItems((prevItems) => {
      if (prevItems?.find((item) => item.id === id)) {
        return [...prevItems];
      }
      else {
        return [...prevItems, { id}];
    }
  });
  };

  const deleteFavorite = (id: string) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => id!== item.id)
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const product = products?.find((product) => product._id === item._id);
      return acc + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const totalQuantity = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = calculateTotalPrice();

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        cartItems,
        setCartItems, 
        favoriteItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        addFavorite,
        deleteFavorite,
        calculateTotalPrice,
        totalQuantity,
        totalPrice,
        cartProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
