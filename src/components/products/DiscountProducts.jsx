import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DiscountProducts.module.css'; // Import the updated CSS module

const DiscountProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // Simulate original and discounted prices
        const productsWithDiscounts = response.data.map(product => ({
          ...product,
          originalPrice: product.price,
          discountedPrice: product.price * 0.8 // 20% discount
        }));
        setProducts(productsWithDiscounts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className={styles.discountProductsContainer}>
      <div className={styles.discountProductsHeader}>
        <h2>Discount Products</h2>
        <p>
          <strong>Special Offer</strong>
          <br />
          Check out these products with amazing discounts. Click on a product for more info.
          <br />
        </p>
      </div>
      <br />
      <ul className={styles.discountProductsList}>
        {products.map((product) => (
          <li key={product.id} className={styles.discountProductsItem} onClick={() => handleShow(product)}>
            <h6>{product.title}</h6>
            <img src={product.image} alt={product.title} />
            <br />
            <br />
            <p><strong>Category: </strong> {product.category}</p>
            <strong>Original Price: </strong> <p className={styles.originalPrice}>$ {product.originalPrice.toFixed(2)}</p>
            <p>
             <strong> Discounted Price:</strong> <span className={styles.discountedPrice}>$ {product.discountedPrice.toFixed(2)}</span>
            </p>
            <br />
            <div className={styles.cartBtn}>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && selectedProduct && (
        <div className={`${styles.modalDiscountProducts} ${showModal ? styles.show : ''}`}>
          <div className={styles.modalContentDiscountProducts}>
            <h6><strong>{selectedProduct.title}</strong></h6>
            <img className={styles.modalImg}
              src={selectedProduct.image || 'placeholder.jpg'}
              alt={selectedProduct.title}
            />
            <br />
            <p><strong>Category: </strong> {selectedProduct.category}</p>

            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <p> <strong> New Price:</strong> <span className={styles.discountedPrice}> ${selectedProduct.discountedPrice.toFixed(2)}</span></p>
            <div className={styles.modalActions}>
              <button onClick={handleClose}>Close</button>
              <button className={styles.btnSuccess}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountProducts;
