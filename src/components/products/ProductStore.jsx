import React from "react";
import ProductSearch from "./ProductSearch";
import DiscountProducts from "./DiscountProducts";
import ProductList from "./ProductList";

import styles from "./ProductStore.module.css";

const ProductStore = () => {
    return (
        <div className={styles.productStore}>
            <h1 className={styles.productStoreTitle}>Welcome to KursApp</h1>
            <div className={styles.productStoreContent}>
                <div className={styles.productSearchWrapper}>
                    <ProductSearch />
                </div>
                <div className={styles.bestSellerWrapper}>
                    <DiscountProducts />
                </div>
                <div className={styles.productListWrapper}>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default ProductStore;