import React from 'react';
import './product-list-item.css';

const ProductListItem = ({ product }) => {
    const { name, price, coverImage } = product;
    return (
        <div className="product-list-item">
            <div className="product-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="product-details">
                <a href="/cart" className="product-name">{name}</a>
                <div className="product-price" ><i class="fa fa-rub" aria-hidden="true" />{price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductListItem;