import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SCREENINTRO = () => {
  return (
    <View style={styles.screenIntro}>
      <Image
        style={[styles.backgroundIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <View style={[styles.design, styles.designLayout]}>
        <Image
          style={[styles.ringIcon, styles.designLayout]}
          contentFit="cover"
          source={require("../assets/ring.png")}
        />
        <Text style={styles.portfolio}>PORTFOLIO</Text>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <Image
          style={[styles.statueIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/statue.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 430,
    position: "absolute",
  },
  designLayout: {
    width: 498,
    position: "absolute",
  },
  backgroundIcon: {
    top: 0,
    left: 0,
    height: 932,
  },
  ringIcon: {
    top: 190,
    height: 833,
    opacity: 0,
    left: 0,
  },
  portfolio: {
    top: 1393,
    left: 87,
    fontSize: FontSize.size_65xl,
    lineHeight: 82,
    fontFamily: FontFamily.antonRegular,
    color: Color.colorTan_200,
    textAlign: "right",
    width: 324,
    height: 88,
    position: "absolute",
  },
  logoIcon: {
    top: 154,
    left: 101,
    width: 295,
    height: 295,
    position: "absolute",
  },
  statueIcon: {
    top: 822,
    left: 34,
    height: 540,
  },
  design: {
    top: 141,
    left: -34,
    height: 1481,
  },
  screenIntro: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default SCREENINTRO;
