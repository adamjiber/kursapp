import React, { useEffect, useState } from 'react';
import DiscountProducts from "./DiscountProducts";

export default {
    title: "products/DiscountProducts",
    component: DiscountProducts,
    
}

export const Default = {
    
}

export const Discounts = {
    decorators: [() => ({
      render: () => (
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', margin: '20px 0' }}>
          <DiscountProducts />
        </div>
      ),
    })],
    render: () => <DiscountProducts />,
  };
  
  export const WithoutDiscounts = {
    decorators: [() => {
      const [products, setProducts] = useState([]);
  
      useEffect(() => {
        // Fetch product data from fakestoreapi
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);
  
      return (
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', margin: '20px 0' }}>
          {products.length > 0 && (
            <DiscountProducts
              originalPrice={products[0].price}
              showDiscount={false}
            />
          )}
        </div>
      );
    }],
  };
  