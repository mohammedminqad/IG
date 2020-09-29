import React from 'react';
import ProductList from './components/ProductList.jsx';
import products from './products.json';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import { Grid } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products
    };
  }

  render() {

    return (
      <div>
        <Router>
          <Grid id="content">
            
            <Route path="/" exact render={() => <ProductList
              products={this.state.products} />}/>
            <Route path="/shirt" render={() => <h3>One</h3>} />

          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
