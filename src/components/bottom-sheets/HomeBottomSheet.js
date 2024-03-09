import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { customStyles } from "../../styles/styles";
import { colors } from "../../colors/colors";
import InstrumentContainer from "../containers/InstrumentContainer";
import { useNavigation } from "@react-navigation/native";
import { getInstrumentsFlag } from "../../utils/get-instrument-flags";
import { RefreshControl } from "react-native-gesture-handler";

const HomeBottomSheet = ({ instruments, isLoading, onReload }) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["100%", "100%"], []);

  // render
  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        handleIndicatorStyle={{ backgroundColor: undefined }}
        containerStyle={{ backgroundColor: colors.blue }}
        backgroundStyle={{
          borderTopEndRadius: 46,
          borderTopStartRadius: 46,
        }}
      >
        <Text style={styles.title}>Top 10 Instruments</Text>

        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={"large"} color="#ffcc00" />
          </View>
        ) : (
          <View
            style={[
              customStyles.containerStyle,
              { flex: 1, paddingTop: 25, gap: 8 },
            ]}
          >
            <BottomSheetFlatList
              data={instruments.response}
              renderItem={({ item }) => (
                <InstrumentContainer
                  flag1={getInstrumentsFlag(item.s.split("/")[0])}
                  flag2={getInstrumentsFlag(item.s.split("/")[1])}
                  symbol1={item.s.split("/")[0]}
                  symbol2={item.s.split("/")[1]}
                  high={item.h}
                  low={item.l}
                  spread={item.cp}
                  onPress={() =>
                    navigation.navigate("instrument-screen", {
                      symbol: item.s,
                      date: item.tm,
                      open: item.o,
                      close: item.c,
                      spread: item.cp,
                    })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              refreshControl={() => (
                <RefreshControl
                  onRefresh={() => onReload()}
                  refreshing={isLoading}
                />
              )}
            />
          </View>
        )}
      </BottomSheet>
    </View>
  );
};

export default HomeBottomSheet;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -5,
    textTransform: "uppercase",
    color: colors.blue,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
