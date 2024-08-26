import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthenticationSlice from "./slices/AuthenticationSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["isLoggedIn", "userData", "packageInfoActive"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, AuthenticationSlice),
});

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(Store);

export { Store, persistor };
