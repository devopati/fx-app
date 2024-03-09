import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { customStyles } from "../../styles/styles";
import { colors } from "../../colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const InstrumentBottomContainer = ({ symbol, open, close, spread, date }) => {
  return (
    <View style={[customStyles.containerStyle, styles.container]}>
      <View style={[styles.top]}>
        <Text style={styles.toptext}>Instrument {symbol}</Text>
        <Text style={styles.toptext}>Spread {spread}</Text>
      </View>

      <View style={styles.infoCont}>
        <Text style={styles.toptext}>
          Date {date}
          {`     `} <Text>Tradeable true</Text> {"\n\n"}
          Closeout Bid {open} {`           `} <Text>Closeout Ask {close}</Text>
        </Text>
      </View>

      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text style={[styles.toptext, { color: colors.greyVariant }]}>
              FOLLOW
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "rgba(0,0,0,0.4)" }]}
        >
          <View>
            <Text style={[styles.toptext, { color: colors.greyVariant }]}>
              SIGNALS
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstrumentBottomContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 28,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toptext: {
    fontSize: 15,
    color: "rgba(0,0,0,0.55)",
    fontWeight: "500",
  },
  infoCont: {
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 18,
  },
  btnCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#6495ED",
    paddingHorizontal: 55,
    paddingVertical: 16,
    borderRadius: 4,
    // width: Dimensions.get("window").width / 2.4,
  },
});
