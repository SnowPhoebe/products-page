

import React from 'react';
import Product from './Product';
import jackets from '../assets/feature_jacket.webp'
import boots from '../assets/feature_boots.webp'
import bag from '../assets/feature_bag.webp'
import dress from '../assets/women_dress.webp'
import pajamas from '../assets/women_pajamas.webp'


interface ProductData {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

const productsData: ProductData[] = [
    {
        id: '1',
        name: 'Jacket',
        imageUrl: jackets,
        price: 49.99,
        category: 'Clothes',
    },
    {
        id: '2',
        name: 'Boots',
        imageUrl: boots,
        price: 59.99,
        category: 'Shoes',
    },
    {
        id: '3',
        name: 'Bag',
        imageUrl: bag,
        price: 29.99,
        category: 'Bags',
    },
    {
        id: '4',
        name: 'Dress',
        imageUrl: dress,
        price: 19.99,
        category: 'Clothes',
    },
    {
        id: '5',
        name: 'Pajamas',
        imageUrl: pajamas,
        price: 9.99,
        category: 'Clothes',
    },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-container">
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
