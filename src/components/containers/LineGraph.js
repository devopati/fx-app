import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { customStyles } from "../../styles/styles";

const LineGraph = () => {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  return (
    <View style={[styles.container, customStyles.containerStyle]}>
      <LineChart
        data={data}
        width={280}
        height={280}
        color="white"
        curved
        dataPointsColor="white"
        dashGap={0}
        hideDataPoints
        spacing={80}
        showVerticalLines
        yAxisColor="#0BA5A4"
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        yAxisTextStyle={{ color: "white", fontSize: 13, fontWeight: "bold" }}
      />
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {},
});
