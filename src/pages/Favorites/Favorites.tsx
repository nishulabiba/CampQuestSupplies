import { useCart } from "../../hooks/useCart";
import { Product } from "../../types/Types";
import CardComponent from "../../Shared/CardComponent";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useGetProductsQuery } from "../../redux/api/api";

const Favorites = () => {
  const { favoriteItems } = useCart();
  const {data} = useGetProductsQuery()
 const products : Product[]= data?.data
const favProducts = favoriteItems.map(i=> products?.find( t=> i.id === t._id) )
console.log(favProducts);
  return (
    <div className="p-10 bg-slate-100 text-slate-600">
      <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
      {favoriteItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-10 grid grid-cols-3 ">
            {favProducts?.map((item) => 
              
              
                   <div key= {item?._id}>
                     <CardComponent item={item!}/>
                   </div>
                 
                
              ) }
          </div>
          <Link to="/" className="bg-green-300 border-none text-white pt-2 pb-4 rounded-lg shadow-md btn">
            
              Go Back <div className="w-8">
              <ArrowRightCircleIcon/>
              </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
