import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddProduct = (product) => {
    console.log('Added to cart:', product);
  };

  const handleRemoveProduct = (product) => {
    console.log('Removed from cart:', product);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookListHeader}>
        <h1 className={styles.my4}>Product List</h1>
        <p>
          <strong>Current Promotion</strong>
          <br />
          Search now to find, and get more information while you wait to buy.
          <br />
          Ensure you get a discount when you purchase.
          <br />
          Check if the products are useful for you!
        </p>
      </div>

      <div className={styles.row}>
        {products.map((product) => (
          <div key={product.id} className={`${styles.col12} ${styles.colMd6} ${styles.colLg4}`}>
            <div className={styles.card}>
              <img
                src={product.image || 'placeholder.jpg'}
                alt={product.title}
                className={styles.cardImgTop}
                onClick={() => handleShow(product)}
              />
              <div className={styles.cardBody}>
                <h6 className={styles.cardTitle}>{product.title}</h6>
                <p className={styles.cardText}>Price: ${product.price}</p>
                <p className={styles.cardText}>Category: {product.category}</p>
                <button className={`${styles.btn} ${styles.btnInfo}`} onClick={() => handleShow(product)}>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className={`${styles.modal} ${showModal ? styles.show : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h5 className={styles.modalTitle}>{selectedProduct.title}</h5>
              <button className={styles.close} onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              <img
                src={selectedProduct.image || 'placeholder.jpg'}
                alt={selectedProduct.title}
                className={`${styles.imgFluid} ${styles.mb3}`}
              />
              <p><strong>Description: </strong>{selectedProduct.description}</p>
              <p><strong>Price:</strong> ${selectedProduct.price}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <div className={styles.modalFooter}>
                <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleClose}>
                  Close
                </button>
                <button className={`${styles.btn} ${styles.btnSuccess}`} onClick={() => handleAddProduct(selectedProduct)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;