
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryListProps {
  categories: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          <button>{category}</button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
