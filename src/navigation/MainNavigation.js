import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigation from "./DrawerNavigation";
import FullInstrumentScreen from "../screens/FullInstrumentScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="instrument-screen" component={FullInstrumentScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
