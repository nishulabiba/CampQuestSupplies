import useProducts from "../../../hooks/useProducts";
import Title from "../../../utils/Title";
import Category from "./Category";

const CategoryTab = () => {
const {products} = useProducts()
  return (
      <div className="flex flex-col justify-center gap-10">
        <Title  heading="Category" subHeading="Choose the best"/>
        <Category products={products}/>
      </div>
  );
};

export default CategoryTab;