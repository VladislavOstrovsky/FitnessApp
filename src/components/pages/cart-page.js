import React from 'react';
import ShopHeader from '../shop-header';
import ProductList from '../product-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import SideBar from "../menu-burger/menu-burger";

const CartPage = () => {
    
    return (
        <div>
            <div id="App">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap" className="home-content"></div>
                <ShopHeader numItems={5} total={300}/>
                <ProductList />
                <ShoppingCartTable />
            </div>
        </div>
    );
};

export default CartPage;