import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import InstrumentHeader from "../components/headers/InstrumentHeader";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../colors/colors";
import CandleStickChart from "../components/containers/CandleStickChart";
import InstrumentBottomContainer from "../components/containers/InstrumentBottomContainer";
import { StatusBar } from "expo-status-bar";
import CandlesTime from "../components/containers/CandlesTime";

const FullInstrumentScreen = ({ route }) => {
  const { symbol, date, open, close, spread } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return <InstrumentHeader symbol={symbol} />;
      },
    });
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 18 }}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <CandleStickChart instrumentSymbol={symbol} />

        <InstrumentBottomContainer
          date={date}
          open={open}
          close={close}
          spread={spread}
          symbol={symbol}
        />
      </ScrollView>
    </View>
  );
};

export default FullInstrumentScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 20,
  },
});
