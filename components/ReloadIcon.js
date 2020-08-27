import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

export default function ReloadIcon({ load, error }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  const iconPosition = error ? styles.reloadError : styles.reloadIcon;
  return (
    <View style={iconPosition}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 40,
      },
      default: {
        top: 10,
      },
    }),
    right: 20,
  },
  reloadError: {
    alignItems: "center",
  },
});
