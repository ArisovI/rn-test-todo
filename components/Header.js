import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>To-Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "#002766",
  },
  titleText: {
    textAlign: "center",
    fontSize: 26,
    textTransform: "capitalize",
    color: "white",
    fontWeight: "700",
  },
});
