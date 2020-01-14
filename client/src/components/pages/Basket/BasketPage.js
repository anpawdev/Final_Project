import React from 'react';
import Basket from './Basket';
import BasketSummary from './BasketSummary';

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
                  <div className="col-8"></div>
                  <div className="col-4">
                      <button className="basket-total-order" onClick={() => { this.initSummary() }}>Finish your order</button>
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