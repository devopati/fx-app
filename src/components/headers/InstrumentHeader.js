import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../colors/colors";
import { customStyles } from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const InstrumentHeader = ({ symbol }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, customStyles.containerStyle]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.pair}>{symbol}</Text>

      <Text>{`              `}</Text>
    </SafeAreaView>
  );
};

export default InstrumentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  icon: {
    backgroundColor: colors.grey,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  pair: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
