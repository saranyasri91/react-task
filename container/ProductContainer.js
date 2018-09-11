import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  Button
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductList, processSearchData } from "../actionCreators/productList";

class MainProductModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.productList = [];
  }

  componentDidMount(text) {
    console.log(text);
    this.props.actions.getProductList();
  }

  _onProductSearch = text => {
    this.props.actions.processSearchData(text);
  };

  render() {

    return (
      <View>
        <TextInput placeholder="Search" onChangeText={this._onProductSearch} />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.productList.products,
    isLoding: state.productList.isLoding,
    text: state.productList.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProductList, processSearchData }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainProductModule);
