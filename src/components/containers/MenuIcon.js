import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MenuIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.toggleDrawer()}
    >
      <Ionicons name="menu-sharp" size={24} color={colors.black} />
    </TouchableOpacity>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
