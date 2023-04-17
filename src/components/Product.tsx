

import React from 'react';

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

const Product: React.FC<ProductProps> = ({ id, name, imageUrl, price, category }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
