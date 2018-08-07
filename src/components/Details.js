import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_markers: { latitude: 23.86565, longitude: 90.894844 }
    };
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

    var LatLng = {
      latitude: data.coord.lat,
      longitude: data.coord.lon
    };

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: data.coord.lat,
              longitude: data.coord.lon,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker coordinate={LatLng} />
          </MapView>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              width: width / 2,
              padding: 10,
              margin: 10
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              {data.name}
            </Text>
            <Text style={{ fontSize: 20 }}>{data.weather[0].description}</Text>
            <Text style={{ fontSize: 20 }}>
              Humidity : {data.main.humidity}
            </Text>
            <Text style={{ fontSize: 20 }}>Wind Speed :{data.wind.speed}</Text>
            <Text style={{ fontSize: 20 }}>
              Max. Temp: {data.main.temp_max}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Min. Temp: {data.main.temp_min}
            </Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: width, height: 300 },
  map: { width: width, height: 300 }
});

export default DetailsScreen;
