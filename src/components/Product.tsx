

import React from 'react';
import AddToCartButton from './AddToCartButton';

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
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <AddToCartButton productId={id} />
    </div>
  );
};

export default Product;
// onAddToCart={handleAddToCart}
