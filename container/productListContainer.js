import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApi } from "../actionCreators/productList";
import { DisplayList, imageSrc } from "../components";

class ListModule extends Component {
  componentDidMount() {
    this.props.requestApi();
  }

  _productRenderItem({ item: product }) {
    return <DisplayList product={product} />;
  }

  render() {
    const { products, isLoading } = this.props.products;
    products.sort(function(a, b) {
      return b.price - a.price;
    });
    products.map((el, i) => {
      return (el.image = imageSrc[i]);
    });
    return (
      <View>
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        <FlatList
          data={products}
          keyExtractor={(p, i) => `${p.id}`}
          renderItem={this._productRenderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApi }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListModule);
