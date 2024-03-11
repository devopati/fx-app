import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../colors/colors";

const SignaContainer = ({ Number, pairName, postedDate, onPress, bullish }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // onLongPress={() => console.log(Number + ": " + "long pressed")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colors.grey,
          padding: 12,
          borderRadius: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <View
            style={{
              backgroundColor: colors.greyVariant,
              paddingVertical: 12,
              paddingHorizontal: 13,
              borderRadius: 10,
            }}
          >
            <Text style={[{ fontSize: 18, fontWeight: "900" }]}>
              {Number < 10 ? "0" + Number : Number}
            </Text>
          </View>

          <View>
            <Text style={[{ fontSize: 17 }]}>{pairName}</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
              }}
            >
              {bullish ? (
                <View style={{ flexDirection: "row", gap: -5 }}>
                  <EvilIcons name="arrow-up" size={17} color={"green"} />
                  <EvilIcons name="arrow-up" size={17} color={"green"} />
                </View>
              ) : (
                <View style={{ flexDirection: "row", gap: -5 }}>
                  <EvilIcons name="arrow-down" size={17} color={"red"} />
                  <EvilIcons name="arrow-down" size={17} color={"red"} />
                </View>
              )}
              <Text style={[{ fontSize: 12.5 }]}>{postedDate}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderColor: colors.greyVariant,
            borderWidth: 0.8,
            padding: 3,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={colors.black}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SignaContainer;

const styles = StyleSheet.create({});
