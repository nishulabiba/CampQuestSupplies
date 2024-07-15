import { HeartIcon } from "@heroicons/react/16/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazy-load";
import { useParams } from "react-router-dom";
import { Product } from "../../types/Types";

const ProductDetails = () => {
  const { id } = useParams();
  const [addToWishList, setList] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://campershop.vercel.app/api/products/${id}`
      );
      return res?.data?.data;
    },
  });
  const handleAddToCart = (product: Product) => {
    const cartString = localStorage.getItem("cart");
    let cart = cartString ? JSON.parse(cartString) : [];
    const productExists = cart.find((item: { _id: string }) => item._id === product._id);
    if (productExists) {
      cart = cart.map((item: { _id: string; quantity: number }) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.push({ _id: product._id, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };



  return (
    <div>
      <Helmet>
        <title>{data ? `${data.name} | CampQuest` : "Loading..."}</title>
      </Helmet>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div className="flex m-5">
          <div className="flex gap-3 text-slate-500 justify-center items-start">
            <LazyLoad width={800} threshold={0.95}>
              <div className="relative">
                <img
                  className="ms-5 w-3/4 rounded-xl"
                  src={data?.image}
                  alt={data?.name}
                />
                <div className="btn bg-transparent scale-75 border-none hover:bg-transparent shadow-none absolute right-44 top-0 mr-4 rounded-xl ">
                  <HeartIcon
                    onClick={() => setList(!addToWishList)}
                    className={`${
                      addToWishList ? "text-red-400" : "text-slate-400"
                    } w-[65px]`}
                  />
                </div>
              </div>
            </LazyLoad>
            <div className="flex flex-col gap-5 mt-5 font-semibold">
              <h1 className="text-3xl font-semibold text-slate-700">
                {data?.name}
              </h1>
              <p>{data?.description}</p>
              <div className="flex flex-col gap-5">
                <p>Category: {data?.category}</p>
                <p>Description: {data?.description}</p>
                <p>Quantity: {data?.inventory.quantity}</p>
                {data?.inventory?.inStock ? (
                  <p className="font-bold text-green-400">
                    <span className="text-slate-500">Stock:</span> Available
                  </p>
                ) : (
                  <p className="text-red-500">Stock: Unavailable</p>
                )}
              </div>
              <button onClick={()=> handleAddToCart(data)} className="btn w-1/3 bg-gradient-to-bl from-slate-400 to-amber-700 border-none text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
