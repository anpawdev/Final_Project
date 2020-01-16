import React from 'react';
import { connect } from 'react-redux';
import ProductsList from '../../features/ProductsList/ProductsList';
import { sortBy } from '../../../utils/sortBy';
import './HomePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "products": this.props.products
    };
  }

  sortBy(event) {
    this.setState({
        "products": this.state.products.sort(sortBy(event.target.dataset.prop, event.target.dataset.order))
    });
  }
  
  render () {
    return (
      <div className="home">
        <div className="home-sort col-md-12 col-lg-3">
          <p className="home-sort-header">Sort by:</p>
          <ul className="home-sort-list">
            <li data-prop='title' data-order='asc' onClick={event => this.sortBy(event)}>Name: A-Z</li>
            <li data-prop='title' data-order='desc' onClick={event => this.sortBy(event)}>Name: Z-A</li>
            <li data-prop='price' data-order='asc' onClick={event => this.sortBy(event)}>Price: lowest first</li>
            <li data-prop='price' data-order='desc' onClick={event => this.sortBy(event)}>Price: highest first</li>
          </ul>
        </div>
        <div className="products col-md-12 col-lg-9">
          <ProductsList sortBy={this.state} />
        </div>
      </div>
    )
  }
};

  function mapStateToProps(state) {
    return {
        products: state.products
    }
  }


export default connect(mapStateToProps)(HomePage);