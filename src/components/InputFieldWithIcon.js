import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InputFieldWithIcon = ({
  value,
  onchangeHandler,
  keyboardType,
  placeholder,
  secure,
  fieldName,
  onIconPress,
  noIcon,
  inputStyle,
  autocapitalize,
}) => {
  return (
    <View style={[{ paddingHorizontal: 14 }, { gap: 1, position: "relative" }]}>
      <Text style={[{ fontSize: 15, fontWeight: "300" }]}>{fieldName}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onchangeHandler}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secure}
        editable={true}
        autoCapitalize={autocapitalize}
      />
      {noIcon ? (
        <View style={[styles.iconRight, { padding: 10 }]}></View>
      ) : (
        <Pressable style={styles.iconRight} onPress={onIconPress}>
          {secure ? (
            <MaterialCommunityIcons name="eye-off" size={24} color={"grey"} />
          ) : (
            <MaterialCommunityIcons name="eye" size={24} color={"grey"} />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default InputFieldWithIcon;

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderBottomWidth: 1.2,
    borderBottomColor: "grey",
    color: "grey",
    paddingLeft: 1,
    fontSize: 16.5,
    fontWeight: "600",
  },
  iconRight: {
    top: -36,
    right: -320,
  },
});
