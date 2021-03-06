import React, { Component } from 'react';
import ProductListItem from '../product-list-item';
import { connect } from 'react-redux';

import { withFitnessstoreService } from '../hoc';
import { productsLoaded } from '../../actions';
import { compose } from '../../utils';
import './product-list.css';

class ProductList extends Component {

    componentDidMount() {
        const { fitnessstoreService } = this.props;
        const data = fitnessstoreService.getProducts();
        
        this.props.productsLoaded(data);
    }
    render() {
        const { products } = this.props;
        return (
            <div className="products">
                <h1 className="product-title">Товары</h1>
                
                <ul className="product-list">
                    {
                        products.map((products) => {
                            return (
                                <div className="product-list-i">
                                    <li key={products.id}><ProductListItem product={products}/></li>  
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
            
        );
    }
};

const mapStateToProps = ({products}) => {
    return { products };
};

const mapDispatchToProps = {
    productsLoaded
};

export default compose(
    withFitnessstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductList);
