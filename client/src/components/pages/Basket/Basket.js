import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAmount, removeAmount } from '../../../redux/productsRedux';

class Basket extends React.Component {

    basketListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="basket-product-container" key={product.id}>
                    <div className="basket-product-image col-2">
                        <img className="basket-product-image" src={product.img} alt="product" />
                    </div>
                    <div className="basket-product-content col-5">
                        <h2 className="basket-product-title">{product.title}</h2>
                        <p className="basket-product-text">{product.content}</p>
                    </div>
                    <div className="basket-product-price col-2">${product.price * product.amount}</div>
                    <div className="basket-product-amount col-3">
                        <button className="basket-product-amount-btn" onClick={() => this.props.addAmount(product)}>+</button>
                        <p className="basket-product-value">{product.amount}</p>
                        <button className="basket-product-amount-btn" onClick={() => this.props.removeAmount(product)}>-</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 className="basket-header">Basket</h1>
                
                {this.basketListProducts()}
                
                <div className="basket-code row">
                    <div className="col-9"></div>
                    <div className="col-3"><input className="basket-input" placeholder="Write a code" /></div>
                </div>
                <div className="basket-pay row">
                    <div className="col-9"></div>
                    <div className="basket-total-pay col-3">Total: $ {this.props.basket.summary} </div>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addAmount,
            removeAmount
        }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(Basket);
