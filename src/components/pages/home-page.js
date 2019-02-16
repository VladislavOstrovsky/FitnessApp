import React from 'react';
import ProductList from '../product-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const  HomePage = () => {
    return (
        <div>
            <ProductList />
            <ShoppingCartTable />
        </div>
        
    );
};

export default HomePage;