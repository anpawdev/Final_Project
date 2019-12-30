import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Bag from './components/pages/Bag/BagPage';
import FAQ from './components/pages/FAQ/FAQPage';
import Regulamin from './components/pages/Regulamin/RegulaminPage';
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
          <Route path="/regulamin" exact component={Regulamin} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/bag" exact component={Bag} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;
