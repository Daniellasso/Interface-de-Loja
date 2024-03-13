import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Produto2 from "./pages/Product/Produto2/Detail";
import Produto3 from "./pages/Product/Produto3/Detail";
import Produto4 from "./pages/Product/Produto4/Detail";
import Produto5 from "./pages/Product/Produto5/Detail";
import Produto6 from "./pages/Product/Produto6/Detail";

const Stack = createNativeStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Produto2"
          component={Produto2}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Produto3"
          component={Produto3}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Produto4"
          component={Produto4}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Produto5"
          component={Produto5}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Produto6"
          component={Produto6}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
