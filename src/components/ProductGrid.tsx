import React, {useEffect, useState} from 'react'

interface Product {
    id: number;
    name: string;
}

const ProductGrid = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [error, setError] = useState('');
  


    return (
        <div>GameGrid</div>
    )
}

export default ProductGrid
