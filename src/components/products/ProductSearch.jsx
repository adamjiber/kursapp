import React, { useEffect, useState, useRef } from 'react';
import styles from './ProductSearch.module.css';

const ProductSearch = ({
  loading: initialLoading = false,
  noResult: initialNoResult = false,
  products: initialProducts = [],
  showModal: initialShowModal = false,
  selectedProduct: initialSelectedProduct = null,
  onSearch, // Custom search function, used to filter products
}) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(initialLoading);
  const [noResult, setNoResult] = useState(initialNoResult);
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(initialShowModal);
  const [selectedProduct, setSelectedProduct] = useState(initialSelectedProduct);
  const inputRef = useRef(null);

  useEffect(() => {
    setLoading(initialLoading);
    setNoResult(initialNoResult);
    setProducts(initialProducts);
    setShowModal(initialShowModal);
    setSelectedProduct(initialSelectedProduct);
  }, [initialLoading, initialNoResult, initialProducts, initialShowModal, initialSelectedProduct]);

  const searchProducts = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    setLoading(true);
    setNoResult(false);

    // Check if `onSearch` is provided
    if (onSearch) {
      onSearch(query)
        .then((searchResults) => {
          if (searchResults && searchResults.length > 0) {
            setProducts(searchResults);
            setNoResult(false);
          } else {
            setProducts([]);
            setNoResult(true);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setNoResult(true);
        });
    }
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Welcome! Discover products you'll love and explore exciting items.</p>
        <ul>
          <li>Use the search bar to find products that match your interests.</li>
          <li>Click a product image for more details.</li>
        </ul>
      </div>

      <form onSubmit={searchProducts} className={styles.form}>
        <input
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!e.target.value) setProducts([]);
          }}
          ref={inputRef}
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Search
        </button>
      </form>

      {loading && <div className={styles.loadingSpinner}>Loading...</div>}
      {noResult && <div className={styles.noResults}>No products found.</div>}

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.cardImg}
                onClick={() => handleShowModal(product)}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>
                {product.title.length > 40 ? `${product.title.substring(0, 37)}...` : product.title}
              </h3>
              <p className={styles.cardText}>
                <strong>Description: </strong>
                {product.description.length > 100
                  ? `${product.description.substring(0, 97)}...`
                  : product.description}
              </p>
              <p>Price: $ {product.price}</p>
              <br />
              <button className={styles.moreInfoBtn} onClick={() => handleShowModal(product)}>
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <br />
              <button onClick={handleCloseModal} className={styles.closeBtn}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className={styles.modalImg}
              />
              <h3>{selectedProduct.title}</h3>
              <p>
                <strong>Description: </strong>
                {selectedProduct.description}
              </p>
              <p>
                <strong>Price: </strong>${selectedProduct.price}
              </p>
            </div>
            <div className={styles.modalFooter}>
              <button onClick={handleCloseModal} className={styles.closeBtn}>
                Close
              </button>
              <button className={styles.addBtn}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
