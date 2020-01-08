import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const SingleProduct = (props) => (
  <NavLink exact to={"/product/" + props.index} 
  index={props.index}
  className="product col-sm-12 col-md-6 col-lg-5">
    <p className="product-info">{props.info}</p>
    <img className="product-image" src={props.img} alt="product"/>
    <p className="product-title">{props.title}</p>
    <p className="product-price">${props.price}</p>
  </NavLink>
);

SingleProduct.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default SingleProduct;