import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const NotifyHanger = ({ onOkayPress, AlertActive, alertText, alertTitle }) => {
  return (
    <View
      style={[
        styles.loaderContainer,
        {
          zIndex: AlertActive ? 9999 : 0,
          opacity: AlertActive ? 1 : 0,
        },
      ]}
    >
      <View style={styles.innerCont}>
        <Text style={styles.alertTitle}>{alertTitle}</Text>
        <Text style={[styles.alertText]}>{alertText}</Text>
        <Button title="Okay" onPress={onOkayPress} color={"blue"} />
      </View>
    </View>
  );
};

export default NotifyHanger;

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCont: {
    backgroundColor: "white",
    gap: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 330,
  },
  alertText: {
    fontWeight: "bold",
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
  alertTitle: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 18,
    color: "blue",
  },
});
