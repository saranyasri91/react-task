import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Iconc from "react-native-vector-icons/MaterialCommunityIcons";


function DisplayList({ product }) {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.callerDetailsContainer}>
        <View style={styles.callerDetailsContainerWrap}>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {product.title}
            </Text>
              </View>
          <View style={styles.rightHeaderContainer}>
            <Text style={{ margin: 5, color: "red", fontWeight: "bold" }}>
              {product.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
    //paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
});

export default DisplayList;
