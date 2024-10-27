import { useGetProductsQuery } from "../../../redux/api/api";
import { Product } from "../../../types/Types";
import Title from "../../../utils/Title";
import Category from "./Category";
const CategoryTab = () => {
  const { data: products } = useGetProductsQuery();

  // Ensure products is always an array
  const productList: Product[] = products?.data ?? [];

  return (
    <div className="flex flex-col justify-center gap-10">
      <Title heading="Category" subHeading="Choose the best" />
      <Category products={productList} />
    </div>
  );
};

export default CategoryTab;
