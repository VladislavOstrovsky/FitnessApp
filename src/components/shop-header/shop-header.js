import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (<i class="fa fa-rub" aria-hidden="true" />{total})
            </a>
        </header>
    );
};

export default ShopHeader;