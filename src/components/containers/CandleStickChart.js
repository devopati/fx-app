import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { CandlestickChart } from "react-native-wagmi-charts";
import axios from "axios";
import CandlesTime from "./CandlesTime";
import { fetchCandleHistory } from "../../api/fetch-candle-history";

const CandleStickChart = ({ instrumentSymbol }) => {
  const timeData = ["5m", "30m", "1h", "4h", "1d"];
  const [candlesData, setCandlesData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(2);

  const getCandlesHistory = useCallback(async (period) => {
    setIsLoading(true);
    const data = await fetchCandleHistory(instrumentSymbol, period);
    setCandlesData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getCandlesHistory("1h");
  }, []);

  return (
    <View style={{ height: Dimensions.get("window").height / 1.6, gap: 10 }}>
      <View style={styles.time}>
        {timeData.map((time, index) => {
          return (
            <View key={index}>
              <CandlesTime
                time={time}
                onPress={() => {
                  setIsSelected(index);
                  getCandlesHistory(time);
                }}
                isSelected={index === isSelected}
              />
            </View>
          );
        })}
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={"large"} color="#ffcc00" />
        </View>
      ) : (
        <>
          <CandlestickChart.Provider data={candlesData}>
            <CandlestickChart>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair>
                <CandlestickChart.Tooltip />
              </CandlestickChart.Crosshair>
            </CandlestickChart>
          </CandlestickChart.Provider>
        </>
      )}
    </View>
  );
};

export default CandleStickChart;

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-around",
    paddingHorizontal: 60,
  },
});
