import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("https://campershop.vercel.app/api/products");
  return res.data;
};

const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product"], 
    queryFn: fetchProducts
  });

  return { products: products?.data, isLoading, isError, error };
};

export default useProducts;
