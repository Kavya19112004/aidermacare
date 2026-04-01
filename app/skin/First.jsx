import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";

export default function First({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Logo */}
      <Image
        source={require("../assets/skin.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title} onPress={() => navigation.navigate("Login")}>Derma AI Mirror</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8A65", // coral / peach background
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
