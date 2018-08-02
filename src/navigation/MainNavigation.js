import React from "react";

import { createStackNavigator } from "react-navigation";

import HomeScreen from "../components/Home";
import DetailsScreen from "../components/Details";

const MainNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#00804A"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
      }
    }
  }
);

export default MainNavigation;
