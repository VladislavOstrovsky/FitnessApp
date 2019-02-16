import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>You order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                
                <tbody>
                    <td>1</td>
                    <td>Protein</td>
                    <td>3</td>
                    <td>900</td>
                    <td>
                        <button className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                </tbody>
            </table>

            <div className="total">
                Total: <i class="fa fa-rub" aria-hidden="true" />201
            </div>
        </div>
    );
};

export default ShoppingCartTable;

