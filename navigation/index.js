import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DisplayProductList from "../screen/ProductListScreen";
import SearchList from "../screen/ProductSearchScreen";
import { FontAwesome } from "@expo/vector-icons";

const listScreen = createStackNavigator(
  {
    Main: DisplayProductList
    
  },
  {
    navigationOptions: {
      headerTitle: "Product List",
      headerStyle: {
        backgroundColor: "#5e072b"
      },
      headerTintColor: "#fff"
    }
  }
);

const searchScreen = createStackNavigator(
  {
    Main: SearchList,
    Detail: SearchList
  },
  {
    navigationOptions: {
      headerTitle: "Product Search",
      headerStyle: {
        backgroundColor: "#5e072b"
      },
      headerTintColor: "#fff"
    }
  }
);

const Navigation = createBottomTabNavigator({
  List: {
    screen: listScreen,
    navigationOptions: {
      tabBarLabel: "List",
      
    }
  },
  Search: {
    screen: searchScreen,
    navigationOptions: {
      tabBarLabel: "Search",
      
    }
  }
});

export default Navigation;
