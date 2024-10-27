import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { CartItem, Product } from "../../types/Types";
import { useCart } from "../../hooks/useCart";
import { useGetProductsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    calculateTotalPrice,
  } = useCart();
  const { data, isLoading } = useGetProductsQuery();

  const products: Product[] = data?.data || [];



  const handleIncreaseQuantity = (item: CartItem) => {
    const product = products.find((product: Product) => product._id === item._id);
    if (product && item.quantity < product.inventory.quantity) {
      increaseQuantity(item._id);
    } else {
      Swal.fire(
        "Insufficient Quantity",
        "You cannot add more of this item.",
        "warning"
      );
    }
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      decreaseQuantity(item._id);
    } else {
      Swal.fire(
        "Minimum Quantity",
        "You cannot have less than 1 of this item.",
        "warning"
      );
    }
  };

  if (isLoading) {
    return <p className="inline-flex justify-center">Loading...</p>;
  }

  return (
    <div className="p-10 bg-slate-100 text-slate-600">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-10">
            {cartItems.map((item) => {
              const product = products.find(
                (product: Product) => product._id === item._id
              );
              return (
                product && (
                  <div
                    key={item._id}
                    className="flex items-center mb-5 bg-white py-2 px-4 rounded-lg shadow-md"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 rounded-lg"
                    />
                    <div className="ml-4 flex-grow">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p>${product.price} each</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item)}
                          className="px-3 py-1 bg-gray-300 rounded-lg mr-2"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className="px-3 py-1 bg-gray-300 rounded-lg ml-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="ml-10 text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                )
              );
            })}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Pricing Details</h2>
            <p>Total Price: $ {calculateTotalPrice().toFixed(2)} </p>
            <button
              className={`mt-4 px-4 py-2 bg-green-500 text-white rounded-lg ${
                cartItems.some((item) => {
                  const product = products.find(
                    (product) => product._id === item._id
                  );
                  return product && item.quantity > product.inventory.quantity;
                })
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={cartItems.some((item) => {
                const product = products.find(
                  (product) => product._id === item._id
                );
                return product && item.quantity > product.inventory.quantity;
              })}
            >
              <Link to="checkout"> Place Order </Link> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
