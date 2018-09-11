import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ListModule, MainProductModule } from "../container";

class DisplayProductList extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <ListModule />
        </View>
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
  contentContainer: {
    flex: 6
  }
});

export default DisplayProductList;
