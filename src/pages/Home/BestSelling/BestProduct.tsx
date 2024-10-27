import { HeartIcon } from "@heroicons/react/16/solid";
import { Product } from "../../../types/Types";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const BestProduct: React.FC<{ item: Product }> = ({ item }) => {
  const { name, description, image, price, category, _id } = item;
  const { favoriteItems, addFavorite, deleteFavorite } = useCart();
  const fav= favoriteItems.find(i=> item?._id === i.id)
  const navigate = useNavigate();


  const handleaddToFavorite = (product: Product) => {
    const fav= favoriteItems.find(i=> product?._id === i.id)
    if(fav) {
      deleteFavorite(product?._id)
      
    }
 else addFavorite(product._id);
  };
  return (
    <div className="flex space-x-2 gap-2  items-start justify-between">
      <div className="flex gap-2">
        <img
          style={{ borderRadius: "0 200px 200px 300px" }}
          className=" w-[50px] md:w-[100px] hover:scale-150"
          src={image}
          alt=""
          onClick={()=>navigate(`/product/${_id}`)}
        />
        <div className="">
          <h3 className="uppercase font-bold">{name}---------------------</h3>
          <p className="">{description}</p>
          <p>
            Category: <span className=" font-semibold">{category}</span>
          </p>
        </div>
      </div>
      <div className="btn bg-transparent scale-75 border-none hover:bg-white -mt-2 shadow-none ">
        <HeartIcon
          onClick={()=> handleaddToFavorite(item)}
          className={`${
            fav ? "text-red-400" : "text-slate-300"
          } w-[45px]`}
        />
      </div>
      <p className=" text-yellow-500 me-2">${price}</p>
    </div>
  );
};

export default BestProduct;
