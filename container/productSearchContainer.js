import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  FlatList
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  requestApi,
  productSearch
} from "../actionCreators/productList";
import { DisplayList, imageSrc } from "../components";

class SearchModule extends Component {
  componentDidMount() {
    
  }

  _productRenderItem({ item: fdata }) {
    return <DisplayList product={fdata} />;
  }

  _onProductSearch = searchText => {
    const { products } = this.props.products;
    this.props.productSearch(searchText, products);
  };

  render() {
    const { filterData, products } = this.props.products;
    filterData.map((el, i) => {
      return (el.image = imageSrc[i]);
    });
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={this._onProductSearch}
        />
        {filterData.length > 0 ? (
          <View style={styles.contentContainer}>
            <FlatList
              data={filterData}
              keyExtractor={(f, i) => `${f.id}`}
              renderItem={this._productRenderItem}
            />
          </View>
        ) : (
          <View
            style={{ flex: 7, alignItems: "center", justifyContent: "center" }}
          >
            <Text>No Search product data </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    height: 24
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
    
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  contentContainer: {
    flex: 6
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  searchBar: {
    paddingLeft: 30,
    fontSize: 22,
    height: 10,
    flex: 1,
    borderWidth: 9,
    borderColor: "#E4E4E4"
  }
});

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApi, productSearch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModule);
