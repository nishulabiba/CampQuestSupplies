// src/components/ProductList.tsx
import React from 'react';
import { Product } from '../types/Types';
import { useGetProductsQuery } from '../redux/api/api';

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Ensure products is an array before calling .map
  if (!Array.isArray(products?.data)) {
    return <div>Unexpected data format</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {products?.data.map((product: Product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
