import React from 'react';
import useRandomFeaturedProducts from '../../../hooks/useRandomFeaturedProducts';


const Gallery: React.FC = () => {
  const featuredProducts = useRandomFeaturedProducts();

  return (
      <div className='grid grid-cols-3 place-content-center justify-items-center pt-10'>
        {featuredProducts.map((product) => (
          <div key={product._id} className=' border-spacing-1 border p-5 rounded-lg'>
            <img className = ' w-56' src={product?.image} />
          </div>
        ))}
      </div>
  );
};



export default Gallery;
