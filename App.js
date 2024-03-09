import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Home from "./src/screens/HomeScreen";
import RootNavigation from "./src/navigation/RootNavigation";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
      <BottomSheetModalProvider>
        <RootNavigation />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
