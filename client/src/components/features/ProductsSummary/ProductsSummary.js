import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';

const ProductsSummary = ({ id, title, content }) => (
  <article>
    <p>{title}</p>
    <p>{content}</p>
    <Button variant="primary">
      Add to bag
    </Button>
  </article>
);

ProductsSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ProductsSummary;