import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Product } from "../../types/Types";
import { useCart } from "../../hooks/CartContext";


const Cart = () => {
  const { cartItems,  increaseQuantity, decreaseQuantity, removeItem, calculateTotalPrice } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productDetails = await Promise.all(
        cartItems.map((item) => axios.get(`https://campershop.vercel.app/api/products/${item._id}`))
      );
      setProducts(productDetails?.map((res) => res.data.data));
    };

    fetchProducts();
  }, [cartItems]);

  return (
    <div className="p-10 bg-slate-100">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-10">
            {cartItems.map((item) => {
              const product = products.find((product) => product._id === item._id);
              return (
                product && (
                  <div key={item._id} className="flex items-center mb-5 bg-white p-4 rounded-lg shadow-md">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg" />
                    <div className="ml-4 flex-grow">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p>${product.price} each</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => decreaseQuantity(item._id)} className="px-3 py-1 bg-gray-300 rounded-lg mr-2">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item._id)} className="px-3 py-1 bg-gray-300 rounded-lg ml-2">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item._id)} className="ml-4 text-red-500 hover:text-red-700"><FaTrashAlt /></button>
                  </div>
                )
              );
            })}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Pricing Details</h2>
            <p>Total Price: {calculateTotalPrice()} </p>
            <button
             
              className={`mt-4 px-4 py-2 bg-green-500 text-white rounded-lg ${cartItems.some((item) => {
                const product = products.find((product) => product._id === item._id);
                return product && item.quantity > product.inventory.quantity;
              }) ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={cartItems.some((item) => {
                const product = products.find((product) => product._id === item._id);
                return product && item.quantity > product.inventory.quantity;
              })}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
