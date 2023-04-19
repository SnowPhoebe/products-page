

import React, {useState} from 'react';
import Product from './Product';
import CategoryFilter from './CategoryFilter';
import jackets from '../assets/feature_jacket.webp'
import boots from '../assets/feature_boots.webp'
import bag from '../assets/feature_bag.webp'
import dress from '../assets/women_dress.webp'
import pajamas from '../assets/women_pajamas.webp'
import mug from '../assets/mug.png'
import microwave from '../assets/microwave.png'
import skateboard from '../assets/skateboard.png'


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
    {
        id: '6',
        name: 'CatMug',
        imageUrl: mug,
        price: 13.00,
        category: 'DailyUse',
    },
    {
        id: '7',
        name: 'Microwave',
        imageUrl: microwave,
        price: 49.99,
        category: 'DailyUse',
    },
    {
        id: '8',
        name: 'Skateboard',
        imageUrl: skateboard,
        price: 32.99,
        category: 'DailyUse',
    },
];

const ProductsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const categories = Array.from(new Set(productsData.map((product) => product.category)));
  
    const filteredProducts = selectedCategory
      ? productsData.filter((product) => product.category === selectedCategory)
      : productsData;
  
    return (
      <div className="products-page">
        <h1>Products</h1>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  };

export default ProductsPage;
