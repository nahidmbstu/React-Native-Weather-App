import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{props}</Text>
      <ActivityIndicator size="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    backgroundColor: "#ffffff"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00804A"
  }
});

export default Loading;
