import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../redux/api/api';
import { Product } from '../types/Types';

const useRandomFeaturedProducts = () => {
  const { data } = useGetProductsQuery()
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const products: Product[] | undefined = data?.data;
  useEffect(() => {
    // Function to select three random products
    const getRandomProducts = () => {
      if (products?.length) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 6));
      }
    };

    getRandomProducts(); // Initial fetch
    const interval = setInterval(getRandomProducts, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [products]);

  return featuredProducts;
};
export default useRandomFeaturedProducts;