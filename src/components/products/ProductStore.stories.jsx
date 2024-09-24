import React from 'react';
import ProductStore from './ProductStore';

export default {
    title: 'products/ProductStore',
    component: ProductStore,
};

export const DefaultProductStore = {
    render: () => <ProductStore />,
}