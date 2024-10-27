import { useNavigate } from "react-router-dom";
import { Product } from "../types/Types";
import { HeartIcon } from "@heroicons/react/16/solid";
import { useCart } from "../hooks/useCart";

export type CartType = {
  item: Product;
};
const CardComponent: React.FC<CartType> = ({ item }) => {
  const {favoriteItems, addFavorite, deleteFavorite} = useCart()
  const favorite= favoriteItems.find(i=> item?._id === i.id)
  


  const handleaddToFavorite = (product: Product) => {
    const fav= favoriteItems.find(i=> product?._id === i.id)
    if(fav) {
      deleteFavorite(product?._id)
      
    }
 else addFavorite(product._id);
  };
  const navigate = useNavigate();


  return (
    <div className="card w-[280px] md:scale-100 scale-50 bg-slate-100 flex-col items-center justify-start shadow-2xl rounded-xl md:my-10">
      <figure>
        <img className="mx-5 mb-16 " src={item?.image} alt="" />
      </figure>
      <div className="btn bg-transparent scale-75 border-none hover:bg-slate-100  shadow-none absolute left-0 top-0  ml-4 rounded-xl px-2">
          <HeartIcon
            onClick={()=> handleaddToFavorite(item)}
            className={`${
              favorite? "text-red-400" : "text-slate-300"
            } w-[45px]`}
          />
        </div>
      <p className="absolute right-0 top-0 mt-4 mr-4 rounded-xl px-2 bg-slate-800 text-white">
        ${item?.price}
      </p>
      <div className=" flex flex-col justify-center items-center -mt-16 text-slate-700 text-center">
        <h3 className="uppercase text-xl">{item?.name}</h3>
        <p className=" text-md">
          Available Quantity:{" "}
          <span
            className={` ${
              item?.inventory.inStock ? "text-green-500" : "text-red-500 line-through"
            } font-semibold`}
          >
            {item?.inventory.quantity}
          </span>
        </p>
        <button
          onClick={() => navigate(`/product/${item._id}`)}
          className="btn w-[100px] hover:text-blue-600 w-30 bg-slate-400 uppercase mt-3 mb-2 border-b-4 border-slate-700  hover:border-yellow-700 hover:bg-slate-700 bg-transparent text-white border-t-0 border-x-0 bg-gradient-to-tr from-slate-200 to-yellow-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
