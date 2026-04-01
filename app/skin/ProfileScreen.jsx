import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { link } from "./url";

export default function ProfileScreen({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${link}/profile/${user.id}`);
      setName(res.data.name);
      setEmail(res.data.email);
    } catch (err) {
      Alert.alert("Error", "Failed to load profile");
    }
  };

  const updateProfile = async () => {
    try {
      const res = await axios.put(`${link}/profile/update`, {
        id: user.id,
        name,
        email,
      });

      Alert.alert("Success", res.data.message);
    } catch (err) {
      Alert.alert("Error", "Update failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={updateProfile}>
        <Text style={styles.btnText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F4ECEA",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#FF8A65",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
