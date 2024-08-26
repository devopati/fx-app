import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import {
  LoginUser,
  SET_ERR_MSG,
  SET_SUCCESS_MSG,
} from "../../redux/slices/AuthenticationSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import NotifyHanger from "../../components/NotifyHanger";
import InputFieldWithIcon from "../../components/InputFieldWithIcon";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isLoading, errMsg } = useSelector((state) => state.auth);

  const [secureEntry, setSecureEntry] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passErr, setPassErr] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (email) {
      setTimeout(() => {
        setEmailError(false);
      }, 3000);
    }
    if (passErr) {
      setTimeout(() => {
        setPassErr(false);
      }, 3000);
    }
  }, [password, email]);

  const LoginHandler = async () => {
    if (!email) {
      setEmailError(true);
      return;
    }
    if (!password) {
      setPassErr(true);
      return;
    }
    const data = {
      email: email.toLowerCase(),
      password,
    };

    await dispatch(LoginUser(data));
    dispatch(SET_SUCCESS_MSG(""));
  };
  return (
    <>
      <View
        style={[
          { paddingHorizontal: 14 },
          { flex: 1, backgroundColor: "white" },
        ]}
      >
        <NotifyHanger
          AlertActive={errMsg}
          alertTitle={"Login failed!"}
          alertText={errMsg}
          onOkayPress={() => dispatch(SET_ERR_MSG(""))}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={{ gap: 10, marginVertical: 20 }}>
            <Text style={[{ fontSize: 21, fontWeight: "400" }]}>
              Let's sign you in
            </Text>
            <Text
              style={[
                { fontSize: 13, fontWeight: "200", color: "grey", width: 200 },
              ]}
            >
              Welcome back, Please enter your details below
            </Text>
          </View>

          <KeyboardAvoidingView
            style={{ gap: 10 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <InputFieldWithIcon
              noIcon={true}
              fieldName={"Email"}
              value={email}
              onchangeHandler={(text) => setEmail(text)}
              inputStyle={emailError && styles.inputErrStyle}
              autocapitalize={"none"}
            />
            <InputFieldWithIcon
              fieldName={"Password"}
              secure={secureEntry}
              onIconPress={() => setSecureEntry(!secureEntry)}
              value={password}
              onchangeHandler={(pass) => setPassword(pass)}
              inputStyle={passErr && styles.inputErrStyle}
              autocapitalize={"none"}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginRight: 13 }}
            //   onPress={() => navigation.navigate(FORGET_PASSWORD_SCREEN)}
          >
            <Text style={[{ fontSize: 15, fontWeight: "500", color: "blue" }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
            <Button
              title={isLoading ? "Loading..." : "Login"}
              color={"blue"}
              onPress={() => {
                Keyboard.dismiss();
                !isLoading && LoginHandler();
              }}
            />
          </View>

          <TouchableOpacity
            style={{ alignSelf: "center", marginRight: 13, paddingVertical: 2 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[{ fontSize: 15, fontWeight: "500", color: "blue" }]}>
              <Text style={[{ fontSize: 15, fontWeight: "300" }]}>
                New to here? <Text></Text>
              </Text>
              Create account
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputErrStyle: {
    borderBottomColor: "red",
  },
});
