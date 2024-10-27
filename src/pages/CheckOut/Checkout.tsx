import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "daisyui";
import { useCart } from "../../hooks/useCart";
import { CheckoutFormValues } from "../../types/Types";



const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>();
  const navigate = useNavigate();
  const {setCartItems}= useCart()

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
  
    if (data.paymentMethod === "cod") {
      Swal.fire(
        "Order Placed",
        "Your order has been placed successfully!",
        "success"
      ).then(() => {
        navigate("/");
        setCartItems([]);
      });
    } else if (data.paymentMethod === "stripe") {
      navigate("/stripe-payment");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 bg-white my-10 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`input input-bordered w-full ${
              errors.name && "input-error"
            }`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`input input-bordered w-full ${
              errors.email && "input-error"
            }`}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            className={`input input-bordered w-full ${
              errors.phone && "input-error"
            }`}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="address">
            Delivery Address
          </label>
          <input
            id="address"
            type="text"
            className={`input input-bordered w-full ${
              errors.address && "input-error"
            }`}
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Payment Method</label>
          <div className="flex gap-4">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="cod"
                {...register("paymentMethod", { required: true })}
                className="radio radio-primary"
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="stripe"
                {...register("paymentMethod", { required: true })}
                className="radio radio-primary"
              />
              <span className="ml-2">Stripe</span>
            </label>
          </div>
          {errors.paymentMethod && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-success w-full text-white">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
