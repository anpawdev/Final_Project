import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAmount, removeAmount, deleteProduct } from '../../../redux/productsRedux';
import HtmlBox from '../../common/HtmlBox';
import cutText from '../../../utils/cutText';


class Basket extends React.Component {

    basketListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="basket-product" key={product.id}>
                    <div className="basket-product-image col-md-2 col-lg-2">
                        <img className="basket-product-image" src={product.img} alt="product" />
                    </div>
                    <div className="basket-product-content col-lg-7">
                        <h2 className="basket-product-title">{product.title}</h2>
                        <HtmlBox>{cutText(product.content, 160)}</HtmlBox>
                    </div>
                    <div className="basket-product-price col-lg-1">${product.price * product.amount}</div>
                    <div className="basket-product-amount col-lg-2">
                        <button className="basket-product-amount-btn" onClick={() => this.props.removeAmount(product)}>-</button>
                        <p className="basket-product-amount-value">{product.amount}</p>
                        <button className="basket-product-amount-btn" onClick={() => this.props.addAmount(product)}>+</button>
                        <button className="basket-product-amount-delete" onClick={() => this.props.deleteProduct(product)}>delete</button>
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
                    <div className="col-lg-9"></div>
                    <div className="col-lg-3"><input className="basket-input" placeholder="Write a code" /></div>
                </div>
                <div className="basket-pay row">
                    <div className="col-9"></div>
                    <div className="basket-total-pay col-lg-3">Total: $ {this.props.basket.summary} </div>
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

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        addAmount,
        removeAmount,
        deleteProduct
    }, 
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
