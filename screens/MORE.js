import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const MORE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.more}>
      <Image
        style={[styles.backgroundIcon, styles.menuPosition]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <Text style={styles.more1}>MORE</Text>
      <View style={[styles.topBarMenu, styles.menuPosition]}>
        <Image
          style={[styles.topBarMenuChild, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={styles.topBarMenuItem} />
        <View style={[styles.menuBar, styles.menuLayout1]}>
          <View style={[styles.menuBarChild, styles.menuLayout]} />
          <View style={[styles.menuBarItem, styles.menuLayout]} />
          <Pressable
            style={styles.aboutMe}
            onPress={() => navigation.navigate("MAIN")}
          >
            <Text style={[styles.aboutMe1, styles.aboutMe1Layout]}>
              About Me
            </Text>
          </Pressable>
          <Pressable
            style={styles.experience}
            onPress={() => navigation.navigate("EXPERIENCE")}
          >
            <Text style={[styles.experience1, styles.banner1FlexBox]}>
              Experience
            </Text>
          </Pressable>
          <Text style={[styles.portfolio, styles.aboutMe1Layout]}>
            Portfolio
          </Text>
          <View style={styles.menuBarInner} />
        </View>
      </View>
      <LinearGradient
        style={[styles.menuPort, styles.menuPosition]}
        locations={[0, 0.41, 1]}
        colors={["rgba(37, 37, 37, 0.92)", "#252525", "#252525"]}
      >
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line3.png")}
        />
        <View style={[styles.menu, styles.menuLayout1]}>
          <Pressable
            style={styles.aboutMe}
            onPress={() => navigation.navigate("BANNER")}
          >
            <Text style={[styles.banner1, styles.banner1FlexBox]}>Banner</Text>
          </Pressable>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate("LOGO")}
          >
            <Text style={[styles.logo1, styles.logo1Layout]}>Logo</Text>
          </Pressable>
          <Pressable
            style={styles.packaging}
            onPress={() => navigation.navigate("PACKAGING")}
          >
            <Text style={[styles.banner1, styles.banner1FlexBox]}>
              Packaging
            </Text>
          </Pressable>
          <Text style={[styles.more2, styles.logo1Layout]}>More</Text>
        </View>
        <Image
          style={styles.wallIcon}
          contentFit="cover"
          source={require("../assets/wall.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  menuLayout1: {
    height: 26,
    width: 350,
    left: 40,
    position: "absolute",
  },
  menuLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  aboutMe1Layout: {
    width: 117,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
  },
  banner1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    color: Color.colorTan_100,
    fontFamily: FontFamily.montserratRegular,
    height: 26,
    textAlign: "center",
  },
  logo1Layout: {
    width: 81,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
  },
  backgroundIcon: {
    height: 932,
    top: 0,
  },
  more1: {
    top: 142,
    fontSize: FontSize.size_12xl,
    letterSpacing: 2.3,
    lineHeight: 30,
    fontFamily: FontFamily.antonRegular,
    color: Color.colorTan_200,
    textAlign: "center",
    left: 179,
    position: "absolute",
  },
  topBarMenuChild: {
    top: -4,
    height: 130,
  },
  topBarMenuItem: {
    top: 74,
    left: 172,
    width: 86,
    height: 2,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  menuBarChild: {
    top: 4,
    backgroundColor: Color.colorGray_300,
    height: 20,
    width: 350,
    left: 0,
  },
  menuBarItem: {
    top: 6,
    left: 235,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 113,
    height: 16,
    backgroundColor: Color.colorTan_100,
  },
  aboutMe1: {
    color: Color.colorTan_100,
  },
  aboutMe: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  experience1: {
    width: 116,
  },
  experience: {
    left: 117,
    top: 0,
    position: "absolute",
  },
  portfolio: {
    left: 233,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  menuBarInner: {
    top: 7,
    left: 118,
    borderRadius: Border.br_12xs,
    width: 1,
    height: 14,
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  menuBar: {
    top: 91,
  },
  topBarMenu: {
    height: 126,
    top: 0,
  },
  lineIcon: {
    top: 35,
    width: 350,
    left: 40,
    height: 2,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  banner1: {
    width: 82,
  },
  logo1: {
    color: Color.colorTan_100,
    fontFamily: FontFamily.montserratRegular,
    width: 81,
  },
  logo: {
    left: 90,
    top: 0,
    position: "absolute",
  },
  packaging: {
    left: 179,
    top: 0,
    position: "absolute",
  },
  more2: {
    left: 269,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  menu: {
    top: 10,
  },
  wallIcon: {
    top: 17,
    left: 126,
    width: 179,
    height: 15,
    position: "absolute",
  },
  menuPort: {
    top: 858,
    height: 78,
    backgroundColor: "transparent",
  },
  more: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 929,
    overflow: "hidden",
  },
});

export default MORE;
