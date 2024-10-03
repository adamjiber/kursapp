import React from 'react';
import ProductSearch from './ProductSearch';

export default {
  title: 'Products/ProductSearch',
  component: ProductSearch,
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Controls the loading state of the component',
    },
    onSearch: { 
      action: 'searched',
      description: 'Callback function when search is performed',
    },
    noResult: {
      control: 'boolean',
      description: 'Controls whether to show no results state',
    },
    products: {
      control: 'object',
      description: 'Array of product objects to display',
    },
    showModal: {
      control: 'boolean',
      description: 'Controls whether the product modal is shown',
    },
    selectedProduct: {
      control: 'object',
      description: 'Product object to display in the modal',
    },
  },
};

const Template = (args) => <ProductSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  noResult: false,
  products: [],
  showModal: false,
  selectedProduct: null,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
  noResult: true,
};

export const WithProducts = Template.bind({});
WithProducts.args = {
  ...Default.args,
  products: [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is product 1 description',
      price: 19.99,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is product 2 description',
      price: 29.99,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
  ],
};

export const WithModalOpen = Template.bind({});
WithModalOpen.args = {
  ...WithProducts.args,
  showModal: true,
  selectedProduct: WithProducts.args.products[0],
};

export const SearchExample = Template.bind({});
SearchExample.args = {
  ...Default.args,
  onSearch: async (query) => {
    // Fetch data from the FakeStoreAPI
    const products = await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching products:', error);
        return [];
      });

    // Filter the products based on the query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Resolve the Promise with filtered products
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredProducts);
      }, 500); //  delay
    });
  },
};

