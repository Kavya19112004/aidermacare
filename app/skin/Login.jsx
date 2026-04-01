import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { link } from "./url";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      const res = await axios.post(`${link}/login`, {
        email,
        password,
      });

      Alert.alert("Success", res.data.message);

      // Example: Navigate to Home
      navigation.replace("Admin", { user: res.data.user });

    } catch (err) {
      Alert.alert(
        "Login Failed",
        err.response?.data?.message || "Server error"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      {/* Email */}
      <View style={styles.inputBox}>
        <MaterialIcons name="email" size={20} />
        <TextInput
          placeholder="Your Email"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed" size={20} />
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
          />
        </TouchableOpacity>
      </View>

      {/* Sign In */}
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      {/* <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
   backgroundColor: "#FF8A65",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4ECEA",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#f5f0ee",
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#2b2929",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#1E3A8A",
  },
  forgot: {
    marginTop: 10,
    textAlign: "center",
    color: "#1E3A8A",
    textDecorationLine: "underline",
  },
});
