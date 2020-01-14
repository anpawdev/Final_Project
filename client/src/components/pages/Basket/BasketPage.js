import React from 'react';
import Basket from './Basket';
import BasketSummary from './BasketSummary';
import './BasketPage.scss';

class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "summary": false }
  }

  initSummary() {
    this.setState({ "summary": true })
  }

  render() {
    if (this.state.summary === false) {
      return (
          <div className="basketpage-container">
              <Basket />
              <div className="basket-pay row">
                  <div className="col-9"></div>
                  <div className="col-3">
                      <button className="basket-total-order" onClick={() => { this.initSummary() }}>Pay</button>
                  </div>
              </div>

          </div>
      )
  }
    else if (this.state.summary === true) {
      return <BasketSummary />
    }
  }
}
  
export default BasketPage;