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
    headerTitle: "Nike Air Max"
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/6.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Max</Text>
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
          <Text style={styles.textTitle}>Nike Air Max</Text>
          <Text style={styles.textContent}>
            O Nike Air Max é um ícone clássico do mundo dos tênis desportivos,
            conhecido por sua tecnologia de amortecimento avançada e design
            distinto. Com sua unidade Air-Sole visível, este tênis oferece uma
            experiência de amortecimento única e confortável, ideal para quem
            deseja um tênis de desempenho de alta qualidade. Além disso, o Nike
            Air Max é confeccionado em material durável e resistente, o que o
            torna uma ótima opção para uso diário. Seja para um passeio casual
            ou para um treino intenso, o Nike Air Max é o par de tênis perfeito
            para você atingir seus objetivos de desempenho.
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
