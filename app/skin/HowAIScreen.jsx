import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HowAIScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How Our AI Works</Text>

      <Text style={styles.text}>
        📸 Step 1: Image Capture  
        The user uploads or captures a clear image of the skin lesion.
      </Text>

      <Text style={styles.text}>
        🧪 Step 2: Preprocessing  
        The image is resized to 75×100 pixels and normalized.
      </Text>

      <Text style={styles.text}>
        🧠 Step 3: Deep Learning Model  
        A trained CNN model analyzes texture, color, and shape patterns.
      </Text>

      <Text style={styles.text}>
        📊 Step 4: Classification  
        The model predicts one of 9 skin conditions with highest confidence.
      </Text>

      <Text style={styles.text}>
        ✅ Step 5: Result  
        The diagnosis and medical suggestions are shown instantly.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF8A65",
    marginBottom: 20,
  },

  text: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
    padding: 14,
    borderRadius: 12,
    elevation: 2, // Android shadow
  },
});
