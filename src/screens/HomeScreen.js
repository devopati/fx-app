import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import HomeTopView from "../components/custom-views/HomeTopView";
import HomeBottomSheet from "../components/bottom-sheets/HomeBottomSheet";
import { colors } from "../colors/colors";
import { fetchInstrumentsData } from "../api/fetch-instruments-data";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instruments, setInstruments] = useState([]);

  const fetchInstruments = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchInstrumentsData();
    setInstruments(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchInstruments();
  }, []);
  return (
    <View style={[styles.container]}>
      <HomeTopView />

      <HomeBottomSheet
        instruments={instruments}
        isLoading={isLoading}
        onReload={fetchInstruments}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});
