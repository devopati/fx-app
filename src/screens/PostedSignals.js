import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from "../components/containers/MenuIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { customStyles } from "../styles/styles";
import SignaContainer from "../components/containers/SignalContainer";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { colors } from "../colors/colors";
import { readableTimeFormat } from "./get-readable-time";
import { useNavigation } from "@react-navigation/native";
import SignalScreen from "./SignalScreen";

const PostedSignals = () => {
  const navigation = useNavigation();

  const [signalsData, setSignalsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [currSignal, setCurrSignal] = useState({});

  const getPostedSignals = useCallback(async () => {
    const BACKEND_URL = "https://tradeorbit-server.onrender.com/api";
    const userId = "65dd6ee85d4328fe33300371";
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BACKEND_URL}/signal/get-signals/${userId}`
      );
      setSignalsData(response.data?.signals);
      console.log(response.data?.signals);
    } catch (error) {
      Alert.alert(
        "Error fetching signals",
        "An error occurred while fetching posted signals, please re-try and ensure you are connected to the internet."
      );
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPostedSignals();
  }, []);

  return (
    <SafeAreaView style={[styles.container, customStyles.containerStyle]}>
      {modalActive && (
        <Modal style={{ marginTop: 55 }}>
          <SignalScreen signal={currSignal} setModalActive={setModalActive} />
        </Modal>
      )}
      <StatusBar style="dark" />
      <MenuIcon />
      {signalsData.length === 0 ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>No signals</Text>
          <Pressable onPress={getPostedSignals}>
            <Text>Reload</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 400, paddingTop: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getPostedSignals}
            />
          }
        >
          <View style={{ gap: 16, margin: 4 }}>
            {signalsData.map((signal, index) => {
              return (
                <View key={index}>
                  <SignaContainer
                    Number={index + 1}
                    pairName={signal?.pairName}
                    postedDate={readableTimeFormat(signal?.postedAt)}
                    onPress={() => {
                      setCurrSignal(signal);
                      setModalActive(true);
                    }}
                    bullish={signal?.buyingPoint1 && true}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default PostedSignals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    paddingTop: 15,
  },
});
