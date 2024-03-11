import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { readableTimeFormat } from "./get-readable-time";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../colors/colors";

const SignalScreen = ({ signal, setModalActive }) => {
  const navigation = useNavigation();

  const copyToClipboard = async (text, identifier) => {
    await Clipboard.setStringAsync(text);
  };
  return (
    <SafeAreaView style={{ backgroundColor: colors.greyVariant, flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={[{ fontSize: 18, fontWeight: "300" }]}>
            {signal?.buyingPoint1 ? "Buying Points:" : "Selling Points:"}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.clipb}>
              <Text style={[{ fontSize: 17, fontWeight: "200" }]}>
                {signal?.sellingPoint1 || signal?.buyingPoint1}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  copyToClipboard(
                    signal?.sellingPoint1 || signal?.buyingPoint1,
                    "Points"
                  )
                }
              >
                <AntDesign name="copy1" size={18} color={"red"} />
              </TouchableOpacity>
            </View>

            <View style={styles.clipb}>
              <Text style={[{ fontSize: 17, fontWeight: "200" }]}>
                {signal?.sellingPoint2 || signal?.buyingPoint2}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  copyToClipboard(
                    signal?.sellingPoint2 || signal?.buyingPoint2,
                    "Points"
                  )
                }
              >
                <AntDesign name="copy1" size={18} color={"red"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*  */}

        <View style={[styles.item, { marginTop: 25 }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[{ fontSize: 18, fontWeight: "300" }]}>
              Take Profit 1:
            </Text>
            <Octicons name="dot-fill" size={24} color={"green"} />
          </View>

          <View style={styles.clipb}>
            <Text style={[{ fontSize: 17, fontWeight: "200" }]}>
              {signal?.takeProfit1}
            </Text>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(signal?.takeProfit1, "Take profit 1")
              }
            >
              <AntDesign name="copy1" size={18} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View style={[styles.item, { marginTop: 25 }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[{ fontSize: 18, fontWeight: "300" }]}>
              Take Profit 2:
            </Text>
            <Octicons name="dot-fill" size={24} color={"green"} />
          </View>

          <View style={styles.clipb}>
            <Text style={[{ fontSize: 17, fontWeight: "200" }]}>
              {signal?.takeProfit2}
            </Text>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(signal?.takeProfit2, "Take profit 2")
              }
            >
              <AntDesign name="copy1" size={18} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View style={[styles.item, { marginTop: 25 }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[{ fontSize: 18, fontWeight: "300" }]}>
              Stop Loss:
            </Text>
            <Entypo name="circle-with-minus" size={16} color={"red"} />
          </View>

          <View style={styles.clipb}>
            <Text style={[{ fontSize: 17, fontWeight: "200" }]}>
              {signal?.stopLoss}
            </Text>
            <TouchableOpacity
              onPress={() => copyToClipboard(signal?.stopLoss, "Stop loss")}
            >
              <AntDesign name="copy1" size={18} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.caution}>
          <Text style={[{ fontSize: 15, fontWeight: "100" }]}>
            Trade responsibly to avoid loosing your money
          </Text>
          <Text
            style={[{ fontSize: 15, fontWeight: "300", fontStyle: "italic" }]}
          >
            Posted {readableTimeFormat(signal?.postedAt)}
          </Text>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 40,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalActive(false)}
        >
          <View>
            <Text style={[styles.toptext, { color: colors.greyVariant }]}>
              Go back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignalScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 55,
    marginHorizontal: 13,
    padding: 18,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  item: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 12,
    gap: 20,
  },
  caution: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20,
    gap: 4,
  },
  clipb: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    paddingHorizontal: 55,
    paddingVertical: 16,
    borderRadius: 4,
    // width: Dimensions.get("window").width / 2.4,
  },
});
