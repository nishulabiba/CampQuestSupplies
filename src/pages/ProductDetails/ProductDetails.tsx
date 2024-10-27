import { HeartIcon } from "@heroicons/react/16/solid";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazy-load";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useGetProductByIdQuery } from "../../redux/api/api";
import { Product } from "../../types/Types";
import Swal from "sweetalert2";
import ImageMagnifier from "../../components/Magnifier/Magnifier";

const ProductDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { addToCart, addFavorite, favoriteItems, deleteFavorite } = useCart();
  const { data, isLoading } = useGetProductByIdQuery(id!);

  const prod: Product | undefined = data?.data;

  const fav = favoriteItems?.find((i) => prod?._id === i.id);

  const handleAddToCart = (product: Product) => {
    Swal.fire({
      title: `Add to the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#D1A054",
      confirmButtonText: "Confirm"
  })
      .then(async(result) => {
          if (result.isConfirmed) {
            addToCart(product._id);
            navigate("/cart")
          }
      });
    
  };

  const handleAddToFavorite = (product: Product) => {
    const fav = favoriteItems.find((i) => product?._id === i.id);
    if (fav) {
      deleteFavorite(product?._id);
    } else {
      addFavorite(product._id);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{prod ? `${prod.name} | CampQuest` : "Loading..."}</title>
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
                <ImageMagnifier imgSrc={`${prod?.image}`} zoom={2}/>
                
                <div className="btn bg-transparent scale-75 border-none hover:bg-transparent shadow-none absolute right-44 top-0 mr-4 rounded-xl">
                  <HeartIcon
                    onClick={() => prod && handleAddToFavorite(prod)}
                    className={`${
                      fav ? "text-red-400" : "text-slate-400"
                    } w-[65px]`}
                  />
                </div>
              </div>
            </LazyLoad>
            <div className="flex flex-col gap-5 mt-5 font-semibold">
              <h1 className="text-3xl font-semibold text-slate-700">
                {prod?.name}
              </h1>
              <p>{prod?.description}</p>
              <div className="flex flex-col gap-5">
                <p>Category: {prod?.category}</p>
                <p>Description: {prod?.description}</p>
                <p>Quantity: {prod?.inventory?.quantity}</p>
                {prod?.inventory?.inStock ? (
                  <p className="font-bold text-green-400">
                    <span className="text-slate-500">Stock:</span> Available
                  </p>
                ) : (
                  <p className="text-red-500">Stock: Unavailable</p>
                )}
              </div>
              {prod &&  (
                <button
                  onClick={() => handleAddToCart(prod)}
                  className={` ${prod.inventory.inStock? "btn w-1/3 bg-gradient-to-bl from-slate-400 to-amber-700 border-none text-white" : " btn w-1/3 border-none bg-slate-200"}`}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
