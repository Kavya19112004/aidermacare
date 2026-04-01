import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { link } from "./url";
import ResultModal from "./ResultModal";

export default function HomeScreen({ navigation }) {
  const [preview, setPreview] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [x, setx] = useState(null);

  // 📸 Capture image
  const captureAndAnalyze = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "Camera access is needed");
      return;
    }

    const res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!res.canceled) {
      sendToBackend(res.assets[0]);
    }
  };

  // 🖼 Upload image
  const uploadImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!res.canceled) {
      sendToBackend(res.assets[0]);
    }
  };

  // 🔮 Send to Flask
  const sendToBackend = async (img) => {
    setPreview(img.uri);

    const formData = new FormData();
    formData.append("file", {
      uri: img.uri,
      name: "skin.jpg",
      type: "image/jpeg",
    });

    try {
      const res = await axios.post(`${link}/predict`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
setResultData(res.data.details);
      setResultData(res.data.details);
      setx(res.data.prediction);
      setModalVisible(true);
    } catch (err) {
      Alert.alert("Error", "Prediction failed");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={26} />
        <Ionicons name="person-circle" size={28} />
      </View>

      {/* Preview */}
      <Image
        source={{
          uri: preview
            ? preview
            : "https://images.unsplash.com/photo-1606813902914-0b3c3f76f4a3",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Scan your skin</Text>
      <Text style={styles.subtitle}>
        Ensure good lighting for accurate results
      </Text>

      <TouchableOpacity style={styles.btn} onPress={captureAndAnalyze}>
        <Text style={styles.btnText}>Capture & Analyze</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={uploadImage}>
        <Text style={styles.btnText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("HowAI")}
      >
        <Text style={styles.btnText}>How AI works</Text>
      </TouchableOpacity>

      {/* Result Modal */}
      <ResultModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={resultData}
        x={x}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#FF8A65",
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#1E3A8A",
  },
  btn: {
    backgroundColor: "#FF8A65",
    width: "85%",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 12,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
