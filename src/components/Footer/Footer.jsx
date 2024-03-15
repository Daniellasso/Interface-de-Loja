import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Shoes from "../Shoes/Shoes";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/1.png")} cost="110,90" onClick={() => navigation.navigate("Detail")}>
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/5.png")} cost="360,90" onClick={() => navigation.navigate("Produto5")}>
              Nike Epic React Flyknit 2
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/3.png")} cost="890" onClick={() => navigation.navigate("Produto3")}>
              Nike Squidward Tentacles
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%"
  }
});
