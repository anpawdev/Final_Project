import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProductsSummary = ({ id, info, img, title, price }) => (
  <NavLink exact to={"/product"} className="product col-sm-12 col-md-6 col-lg-5">
    <p className="product-info">{info}</p>
    <img className="product-image" src={img} alt="product"/>
    <p className="product-title">{title}</p>
    <p className="product-price">${price}</p>
  </NavLink>
);

ProductsSummary.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductsSummary;