import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../colors/colors";
import { StatusBar } from "expo-status-bar";
import MenuIcon from "../containers/MenuIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import LineGraph from "../containers/LineGraph";

const HomeTopView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.menu}>
        <MenuIcon />
      </View>

      <View style={styles.innerContainer}>
        <LineGraph />
      </View>
    </SafeAreaView>
  );
};

export default HomeTopView;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2,
    position: "relative",
  },
  innerContainer: {
    // height: "120%",
    paddingTop: 60,
  },
  menu: {
    position: "absolute",
    zIndex: 99,
    top: 35,
    left: 15,
  },
});
