import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Basket from './components/pages/Basket/BasketPage';
import FAQ from './components/pages/FAQ/FAQPage';
import TermsConditions from './components/pages/TermsConditions/TermsConditions';
import Contact from './components/pages/Contact/ContactPage';
import ProductCard from './components/features/ProductCard/ProductCard';
import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductCard} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/termsconditions" exact component={TermsConditions} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/basket" exact component={Basket} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;
