import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { customStyles } from "../../styles/styles";
import { colors } from "../../colors/colors";

const InstrumentContainer = ({
  onPress,
  flag1 = require("../../../assets/images/eur.png"),
  flag2 = require("../../../assets/images/usd.png"),
  symbol1,
  symbol2,
  high,
  low,
  spread,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, customStyles.containerStyle]}
    >
      <View style={styles.firstContainer}>
        <View style={styles.imagesCont}>
          <Image source={flag1} style={styles.image} />
          <Image source={flag2} style={styles.image} />
        </View>

        <Text>
          {symbol1} - <Text>{symbol2}</Text>
        </Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.prices}>HIGH: {high}</Text>
        <Text style={styles.prices}>LOW: {low}</Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={[styles.spread, { fontWeight: "600" }]}>SPREAD</Text>
        <Text
          style={[
            styles.spread,
            {
              color: parseFloat(spread.replace("%", "")) > 0 ? "green" : "red",
            },
          ]}
        >
          {spread}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color="red" />
    </Pressable>
  );
};

export default InstrumentContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ECF3F9",
    paddingVertical: 18,
    borderRadius: 7,
    marginBottom: 8,
  },
  imagesCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
  firstContainer: {
    gap: 10,
  },
  secondContainer: {
    gap: 10,
  },
  prices: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
  spread: {
    fontSize: 13,
    color: "rgba(0,0,0,0.8)",
  },
});
