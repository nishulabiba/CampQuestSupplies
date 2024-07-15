import React from "react";

import CardComponent from "../../Shared/CardComponent";
import { Product } from "../../types/Types";

interface CategoryComponentProps {
  products: Product[];
  category: string;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({ products, category }) => {
  const filteredProducts = products?.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-32 justify-items-center    md:gap-x-40 md:gap-y-2">
      {filteredProducts?.map((product) => (
        <div key={product._id} className="scale-90 md:scale-100">
          <CardComponent  item={product} />
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
