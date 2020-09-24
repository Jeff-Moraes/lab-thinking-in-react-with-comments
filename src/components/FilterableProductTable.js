import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    productList: this.props.products.data,
    query: '',
    // create a new propriety for the checkbox value
  };

  handleQuery = (newValue) => {
    this.setState({
      query: newValue,
    });
  };

  // create a new function to update the value of the checkbox propriety

  render() {
    // console.log(this.props.products.data);
    return (
      <div>
        <SearchBar
          query={this.state.query}
          handleQuery={this.handleQuery}
          // send checkbox valeu and function as a props
        />
        <ProductTable
          query={this.state.query}
          productList={this.state.productList}
          // send checkbox valeu as a props
        />
      </div>
    );
  }
}
