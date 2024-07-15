import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useAproduct = (id:string) => {
    const { data: product, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
          const res = await axios.get(
            `https://campershop.vercel.app/api/products/${id}`
          );
          return res?.data?.data;
        },
      });

  return { product: product, isLoading };
};

export default useAproduct;
