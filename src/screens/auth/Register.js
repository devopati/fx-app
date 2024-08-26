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
// import ScreensTop from "../../components/ScreensTop";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterUser,
  SET_ERR_MSG,
} from "../../redux/slices/AuthenticationSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputFieldWithIcon from "../../components/InputFieldWithIcon";
import NotifyHanger from "../../components/NotifyHanger";

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [secureEntry, setSecureEntry] = useState(true);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passErr, setPassErr] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passMatchErr, setMatchPassErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);

  const { isLoading, successMsg, token, errMsg } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (password === confirmPassword) {
      setMatchPassErr(false);
    }
    if (fullName) {
      setTimeout(() => {
        setNameErr(false);
      }, 3000);
    }
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
  }, [confirmPassword, password, fullName, email]);

  const RegisterHandler = async () => {
    Keyboard.dismiss();
    const userData = {
      fullName,
      email: email.toLowerCase(),
      password,
    };

    if (!fullName) {
      setNameErr(true);
      return;
    }
    if (!email) {
      setEmailError(true);
      return;
    }
    if (!password) {
      setPassErr(true);
      return;
    }
    if (password != confirmPassword) {
      setMatchPassErr(true);
      return;
    }
    await dispatch(RegisterUser(userData));
  };
  //   useEffect(() => {
  //     const navigateUser = async () => {
  //       if (successMsg) {
  //         dispatch(SET_SUCCESS_MSG(""));
  //         dispatch(setToLogin(false));
  //         navigation.navigate(VERIFICATION_SCREEN, { token });
  //       }
  //     };
  //     navigateUser();
  //   }, [successMsg]);

  return (
    <>
      {/* <ScreensTop text={"Register"} notShowBackIcon={true} /> */}
      <View
        style={[
          { paddingHorizontal: 14 },
          { backgroundColor: "white", flex: 1 },
        ]}
      >
        <NotifyHanger
          AlertActive={errMsg}
          alertTitle={"Registration failed!"}
          alertText={errMsg}
          onOkayPress={() => dispatch(SET_ERR_MSG(""))}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={{ gap: 10, marginVertical: 20 }}>
            <Text style={[{ fontSize: 21, fontWeight: "400" }]}>
              Start your Journey
            </Text>
            <Text
              style={[
                { fontSize: 13, fontWeight: "200", color: "grey", width: 200 },
              ]}
            >
              Create your account, Please enter details below
            </Text>
          </View>

          <KeyboardAvoidingView
            style={{ gap: 10 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <InputFieldWithIcon
              noIcon={true}
              fieldName={"Full Name"}
              value={fullName}
              onchangeHandler={(text) => setFullName(text)}
              inputStyle={nameErr && styles.inputErrStyle}
            />
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
            <InputFieldWithIcon
              fieldName={"Confirm Password"}
              secure={secureEntry}
              onIconPress={() => setSecureEntry(!secureEntry)}
              value={confirmPassword}
              onchangeHandler={(pass) => setConfirmPassword(pass)}
              inputStyle={passMatchErr && styles.inputErrStyle}
              autocapitalize={"none"}
            />
            {passMatchErr && (
              <Text style={{ color: "red" }}>Passwords do not match</Text>
            )}
          </KeyboardAvoidingView>

          <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
            <Button
              title={isLoading ? "Loading..." : "Register"}
              color={"blue"}
              onPress={() => {
                !isLoading && RegisterHandler();
              }}
            />
          </View>
          <TouchableOpacity
            style={{ alignSelf: "center", marginRight: 13, paddingVertical: 2 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[{ fontSize: 15, fontWeight: "500", color: "blue" }]}>
              <Text style={[{ fontSize: 15, fontWeight: "300" }]}>
                Already have an account? <Text></Text>
              </Text>
              Sign in now
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputErrStyle: {
    borderBottomColor: "red",
  },
});
