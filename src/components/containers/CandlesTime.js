import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../colors/colors";

const CandlesTime = ({ time, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && { backgroundColor: "blue" }]}
    >
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CandlesTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6495ED",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    // width: 40,
  },
  time: {
    color: colors.white,
  },
});
