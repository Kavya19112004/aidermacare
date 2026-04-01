import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

export default function LogoutScreen({ navigation }) {
  useEffect(() => {
    Alert.alert("Logged out", "You have been logged out");
    navigation.navigate("Login");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
