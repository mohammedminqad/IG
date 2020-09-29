import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router';
import { withRouter } from 'react-router'

class ProductList extends React.Component {
    state = {
        isBlocking: false
    };
    componentDidMount() {
        setTimeout(()=> {
            this.setState({isBlocking: true}, ()=> {
                console.log(this.state.isBlocking);
            });
        }, 1000);
    }
  componentWillUnmount() {
      console.log('its leaving');
  }

  render() {
    const {isBlocking} = this.state;
    return (
      <div>
         <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        { this.props.products ?
          this.props.products.map(product => (
            <Product
              key={product.id}
              product={product} />
          )) : ''
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;