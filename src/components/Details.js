import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    headerTitleStyle: { alignSelf: "center" },
    title: "Weather App"
  };

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { data } = this.props.navigation.state.params;
    console.log(data);

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            width: width / 2,
            padding: 10,
            margin: 10
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>{data.name}</Text>
          <Text style={{ fontSize: 20 }}>{data.weather[0].description}</Text>
          <Text style={{ fontSize: 20 }}>Humidity : {data.main.humidity}</Text>
          <Text style={{ fontSize: 20 }}>Wind Speed :{data.wind.speed}</Text>
          <Text style={{ fontSize: 20 }}>Max. Temp: {data.main.temp_max}</Text>
          <Text style={{ fontSize: 20 }}>Min. Temp: {data.main.temp_min}</Text>
        </View>
        <View
          style={{
            width: width / 2,
            padding: 10,
            margin: 10
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {Number(data.main.temp - 273).toFixed(2)} .C
          </Text>
        </View>
      </View>
    );
  }
}

export default DetailsScreen;
