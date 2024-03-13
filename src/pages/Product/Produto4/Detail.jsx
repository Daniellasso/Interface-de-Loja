import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Dot from "../../../components/Dot/Dot";
import SizeButton from "../../../components/SizeButton/SizeButton";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Epic React Flyknit 2"
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/4.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Nike Epic React Flyknit 2
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">
              40
            </SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Epic React Flyknit 2</Text>
          <Text style={styles.textContent}>
            O Nike Epic React Flyknit 2 é um tênis de corrida leve e reativo,
            projetado para oferecer conforto e desempenho excelentes. Com sua
            tecnologia avançada de amortecimento e suporte, este tênis é ideal
            para corredores de longa distância que desejam uma experiência de
            corrida suave e confortável. Além disso, o Nike Epic React Flyknit 2
            é confeccionado em material respirável e leve, o que o torna uma
            ótima opção para quem deseja um tênis leve e flexível. Seja no
            asfalto ou no trilho, o Nike Epic React Flyknit 2 é o par de tênis
            perfeito para você atingir seus objetivos de corrida.
          </Text>
          <Text style={styles.textList}>- Categoria: Amortecimento</Text>
          <Text style={styles.textList}>- Material: Mesh</Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF"
  },
  image: {
    width: "100%",
    height: 350
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%"
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%"
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%"
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%"
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%"
  }
});
