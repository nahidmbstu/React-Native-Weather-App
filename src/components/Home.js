import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Picker,
  AppState,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { getCityName } from "../actions";

const { width, height } = Dimensions.get("window");

import PushController from "./PushController";
import PushNotification from "react-native-push-notification";

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.data);
  };

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={{
            flex: 1,
            height: height / 10,
            padding: 10,
            margin: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#dfe6e9"
          }}
        >
          <Text style={{ fontSize: 23 }}>{this.props.data.name}</Text>
          <Text style={{ fontSize: 18 }}>
            {this.props.data.weather[0].description}
          </Text>
          <View
            style={{
              position: "absolute",
              right: 15,
              top: 15,
              paddingBottom: 15
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              {Number(this.props.data.main.temp - 273).toFixed(2)} .C
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      seconds: 5
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  static navigationOptions = {
    headerTitleStyle: { alignSelf: "center" },
    title: "Weather App"
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    return {
      data: nextProps.cities.CitiesReducer.cities.list
    };
  }

  async componentDidMount() {
    getdata = async () => {
      var res = await this.props.dispatch(getCityName());
      return res;
    };
    getdata().then(() =>
      AppState.addEventListener("change", this.handleAppStateChange)
    );
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === "background") {
      let date = new Date(Date.now() + this.state.seconds * 1000);

      if (Platform.OS === "ios") {
        date = date.toISOString();
      }

      PushNotification.localNotificationSchedule({
        message: `Current Temparature is ${Number(
          this.state.data[0].main.temp - 273.13
        ).toFixed(2)}`,
        date
      });
    }
  }

  _onPressItem = item => {
    console.log(item);
    this.props.navigation.navigate("Details", { data: item });
  };

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <MyListItem id={item.id} onPressItem={this._onPressItem} data={item} />
  );

  render() {
    return (
      <View>
        {this.state.data != null ? (
          <View>
            <FlatList
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
        <PushController />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state
  };
}
export default connect(mapStateToProps)(HomeScreen);
