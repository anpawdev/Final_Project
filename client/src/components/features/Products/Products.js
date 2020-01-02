import React from 'react';
import { PropTypes } from 'prop-types';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        Products
        <ul>
          {products.map(products => <li key={products.id}>{products.title}</li>)}
        </ul>
      </div>
    );
  }

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Products;