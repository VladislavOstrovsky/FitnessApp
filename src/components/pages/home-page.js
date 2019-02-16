import React from 'react';
import ProductList from '../product-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import AppHeader from '../app-header/app-header';
import SideBar from "../menu-burger/menu-burger";

const HomePage = () => {
    return (
         <div id="App" className="ads">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap" className="home-content">
                <AppHeader />
                <ProductList />
                <ShoppingCartTable />
            </div>
         </div>
    );
};

export default HomePage;