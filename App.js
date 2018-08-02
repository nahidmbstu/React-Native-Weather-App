/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Root } from "native-base";

import MainNavigation from "./src/navigation/MainNavigation";
import Loading from "./src/components/loading";
import { store } from "./src/store.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cities: {}
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  render() {
    if (this.state.loading) {
      return <Loading props="Weather App" />;
    } else
      return (
        <Provider store={store}>
          <Root>
            <MainNavigation />
          </Root>
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
