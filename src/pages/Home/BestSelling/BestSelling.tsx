
import Title from "../../../utils/Title";
import { Product } from "../../../types/Types";
import { Link } from "react-router-dom";
import BestProduct from "./BestProduct";
import { useGetProductsQuery } from "../../../redux/api/api";

const BestSelling: React.FC = () => {
  const {data:products} = useGetProductsQuery()

  const slices = products?.data?.slice(1, 7
  ); 
  console.log(slices);

  return (
    <>
      <Title heading="Best Selling Products" subHeading="Have a look at our" />
      <div className="flex flex-col md:grid md:grid-cols-2 justify-items-center  md:gap-5 md:p-10 ">
        {slices?.map((item: Product) => (
          <div  key={item._id} className=" scale-50 md:scale-100 md:w-[500px]">
            <BestProduct item={item} />
          </div>
        ))}
        
      </div>
      <div className="flex justify-center items-center">
      <Link to="/products" className="btn hover:text-blue-600 w-30 bg-slate-400 uppercase my-5 border-b-4 border-slate-100  hover:border-yellow-700 hover:bg-slate-700 bg-transparent text-white border-t-0 border-x-0 bg-gradient-to-br from-slate-200 to-blue-900 mx-auto">View More</Link>
      </div>
      
    </>
  );
};

export default BestSelling;
