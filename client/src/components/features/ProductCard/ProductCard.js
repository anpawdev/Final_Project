import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { addToBasket } from '../../../redux/productsRedux';
import './ProductCard.scss';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentWillMount() {
        this.props.products.map((product) => {
            if (product.id === this.props.match.params.id) {
                this.setState({ id: (product.id - 1) });
            }
        })
    }

    render() {
        return (
            <div className="card">
                <div className="product-card-content">
                    <div className="product-card-image-box col-sm-12 col-md-4 col-lg-4">
                        <img className="product-card-image"
                            src={this.props.products[this.props.match.params.id].img}
                            alt="product"/>
                    </div>
                    <div className="product-card col-sm-12 col-md-8 col-lg-8">
                        <p className="product-card-title">
                            {this.props.products[this.props.match.params.id].title}
                        </p>
                        <p className="product-card-price">
                            ${this.props.products[this.props.match.params.id].price}
                        </p>
                        <p>
                            {this.props.products[this.props.match.params.id].content}
                        </p>
                        <button
                            className="product-card-button"
                            onClick={() => this.props.addToBasket(this.props.products[this.props.match.params.id]) 
                            && swal({
                                title: "Success",
                                text: "Add your product to basket!",
                                icon: "success",
                                timer: 3000,
                              })}> Add to basket
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addToBasket: addToBasket }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductCard);