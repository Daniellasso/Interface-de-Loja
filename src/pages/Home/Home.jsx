import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Shoes from "../../components/Shoes/Shoes";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.TextContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTO</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes />
          <Shoes />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff"
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: "100%"
  },
  TextContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%"
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%"
  },
  line: {
    borderBlockColor: "#d8d8d8",
    borderBottomWidth: 2
  }
});
