
import { HeartIcon } from "@heroicons/react/16/solid";
import { Product } from "../../../types/Types";
import { useState } from "react";

const BestProduct: React.FC<{ item: Product }> = ({ item }) => {
  const { name, description, image, price, category } = item;
  const [addToWishList, setList] = useState(false)
  return (
    <div className="flex space-x-2 gap-2  items-start justify-between">
      <div className="flex gap-2">
        <img
          style={{ borderRadius: "0 200px 200px 300px" }}
          className=" w-[50px] md:w-[100px] hover:scale-150"
          src={image}
          alt=""
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
      <HeartIcon onClick={()=> setList(!addToWishList)} className={`${addToWishList? "text-red-400": "text-slate-300"}  w-[39px]`} />
      </div>
      <p className=" text-yellow-500 me-2">${price}</p>
    </div>
  );
};

export default BestProduct;
