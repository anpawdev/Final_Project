import React from 'react';
import { connect } from 'react-redux';

class BasketSummary extends React.Component {

    createSummary() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket-summary-product" key={product.id}>
                    <div className="basket-summary-product-title col-6">{product.title}</div>
                    <div className="basket-summary-product-amount col-2">{product.amount}</div>
                    <div className="basket-summary-product-price col-2">${product.price}</div>
                    <div className="basket-summary-product-total-price col-2">${product.price * product.amount}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="basket-summary-container">
                <h1 className="basket-summary-header">Your order</h1>
                <div className="row basket-summary">
                    <div className="basket-summary-text col-6">Name</div>
                    <div className="basket-summary-text col-2">Amount</div>
                    <div className="basket-summary-text col-2">Price</div>
                    <div className="basket-summary-text col-2">Total price</div>
                </div>
                {this.createSummary()}
                <div className="row basket-summary">
                    <div className="basket-summary-total col-10">Total</div>
                    <div className="basket-summary-total col-2">$ {this.props.basket.summary}</div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(BasketSummary);