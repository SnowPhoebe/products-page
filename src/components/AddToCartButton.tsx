

import React from 'react';

interface AddToCartButtonProps {
  productId: string;
//   onAddToCart: (productId: string) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  return (
    <button className="add-to-cart-button" >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

// , onAddToCart
// onClick={() => onAddToCart(productId)}