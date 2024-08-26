import { Store, persistor } from "../redux/Store";
import { Alert } from "react-native";
import {
  SET_ERR_MSG,
  SET_IS_LOGGED_IN,
  SET_SUCCESS_MSG,
  SET_TOKEN,
} from "../redux/slices/AuthenticationSlice";

export const clearUserData = async () => {
  try {
    await persistor.pause();
    await persistor.flush().then(() => {
      return persistor.purge();
    });
    Store.dispatch(SET_IS_LOGGED_IN(false));
    Store.dispatch(SET_SUCCESS_MSG(""));
    Store.dispatch(SET_ERR_MSG(""));
    Store.dispatch(SET_TOKEN(""));
  } catch (error) {
    Alert.alert("Logout failed", "Error while logging out");
    console.error("Error clearing persisted data:", error);
  }
};
