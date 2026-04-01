import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ResultModal({ visible, onClose, data,x}) {
  if (!data) return null;
  console.log(data);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Analysis Result - {x}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.section}>DESCRIPTION</Text>
            <Text style={styles.text}>{data.description}</Text>

            <Text style={styles.section}>SYMPTOMS</Text>
            <Text style={styles.text}>{data.symptoms}</Text>

            <Text style={styles.section}>CAUSES</Text>
            <Text style={styles.text}>{data.causes}</Text>

            <Text style={styles.section}>TREATMENTS</Text>
            <Text style={styles.text}>{data.treatments}</Text>

            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="chatbubble-ellipses"
                size={18}
                color="#fff"
              />
              <Text style={styles.btnText}> Talk To Dermatologist</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    width: "90%",
    maxHeight: "85%",
    borderRadius: 18,
    padding: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    fontWeight: "bold",
    color: "#009688",
    marginTop: 12,
  },
  text: {
    color: "#555",
    marginTop: 5,
    lineHeight: 20,
  },
  btn: {
    backgroundColor: "#26A69A",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
