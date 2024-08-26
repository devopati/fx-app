import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";
import { persistor, Store } from "./src/redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate
        // loading={<LoadingSpinner text={"Loading..."} />}
        persistor={persistor}
      />
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
        <BottomSheetModalProvider>
          <RootNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
