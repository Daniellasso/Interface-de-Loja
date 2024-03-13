import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import React from "react";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoading] = useFonts({
    Anton_400Regular
  });

  if (!fontsLoading) {
    return <Text>Carregando Fontes...</Text>;
  } else {
    return (
      <>
        <StatusBar style="light" backgroundColor="#000" translucent={true} />
        <Routes />
      </>
    );
  }
}
