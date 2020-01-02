import React from 'react';
import './HomePage.scss';

class HomePage extends React.Component {
  
  render () {
    return (
      <div className="home">
        <div className="home-sort col-sm-12 col-md-4 col-lg-3">
          <p className="home-sort-header">Sort by:</p>
          <ul className="home-sort-list">
            <li>Name: A-Z</li>
            <li>Name: Z-A</li>
            <li>Price: lowest first</li>
            <li>Price: highest first</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default HomePage;