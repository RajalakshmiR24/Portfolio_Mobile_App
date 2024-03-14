import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PACKAGING = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.packaging}>
      <Image
        style={[styles.backgroundIcon, styles.menuPosition]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <View style={styles.body4}>
        <View style={styles.bottom}>
          <Text style={styles.thankYouFor}>{`Thank you
for your time`}</Text>
          <Image
            style={styles.xIcon}
            contentFit="cover"
            source={require("../assets/x.png")}
          />
          <Text style={[styles.designedBy, styles.designedByTypo]}>
            DESIGNED BY
          </Text>
          <Image
            style={styles.stampIcon}
            contentFit="cover"
            source={require("../assets/stamp.png")}
          />
          <View style={[styles.bottomChild, styles.bottomLayout]} />
          <View style={[styles.bottomItem, styles.bottomLayout]} />
          <View style={[styles.bottomItem, styles.bottomLayout]} />
        </View>
        <View style={styles.frameParent}>
          <ImageBackground
            style={styles.rectangleWrapper}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          >
            <View style={styles.frameChild} />
          </ImageBackground>
          <Image
            style={styles.ef6c81427045451Icon}
            contentFit="cover"
            source={require("../assets/7ef6c8142704545-1.png")}
          />
          <Image
            style={styles.n1Icon}
            contentFit="cover"
            source={require("../assets/199762790-6425389744153534-5492026615077208455-n-1.png")}
          />
          <Image
            style={styles.e6360d670c83cadd93921Icon}
            contentFit="cover"
            source={require("../assets/e6360d670c83cadd9392-1.png")}
          />
          <Image
            style={styles.n2Icon}
            contentFit="cover"
            source={require("../assets/275385022-7885706161455211-5510721039222064836-n-2.png")}
          />
          <Image
            style={[styles.n1Icon1, styles.n1Icon1Layout]}
            contentFit="cover"
            source={require("../assets/194012371-6387468657945643-2960381050992251939-n-1.png")}
          />
          <Image
            style={styles.n1Icon}
            contentFit="cover"
            source={require("../assets/195867700-6345064392186070-3973174597655595585-n-1.png")}
          />
          <ImageBackground
            style={styles.rectangleParent}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          >
            <View style={[styles.frameItem, styles.frameBg]} />
            <View style={[styles.frameInner, styles.frameBg]} />
          </ImageBackground>
          <ImageBackground
            style={[styles.rectangleContainer, styles.n1Icon1Layout]}
            resizeMode="cover"
            source={require("../assets/frame7.png")}
          >
            <View style={[styles.rectangleView, styles.frameChild2Bg]} />
          </ImageBackground>
          <ImageBackground
            style={styles.rectangleFrame}
            resizeMode="cover"
            source={require("../assets/frame8.png")}
          >
            <View style={styles.frameChild1} />
          </ImageBackground>
          <Image
            style={styles.n1Icon3}
            contentFit="cover"
            source={require("../assets/200334994-6415603088465533-4926771182964122122-n-1.png")}
          />
          <Image
            style={styles.n1Icon4}
            contentFit="cover"
            source={require("../assets/158753576-5878498372176010-1454810545887913203-n-1.png")}
          />
          <ImageBackground
            style={[styles.rectangleContainer, styles.n1Icon1Layout]}
            resizeMode="cover"
            source={require("../assets/frame9.png")}
          >
            <View style={[styles.frameChild2, styles.frameChild2Bg]} />
          </ImageBackground>
        </View>
        <Text style={[styles.packaging1, styles.designedByTypo]}>
          PACKAGING
        </Text>
        <View style={[styles.body4Child, styles.body4Layout]} />
        <View style={[styles.body4Item, styles.body4Layout]} />
      </View>
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
            <Text style={[styles.experience1, styles.logo1FlexBox]}>
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
          source={require("../assets/line2.png")}
        />
        <View style={[styles.menu, styles.menuLayout1]}>
          <Pressable
            style={styles.aboutMe}
            onPress={() => navigation.navigate("BANNER")}
          >
            <Text style={[styles.banner1, styles.banner1Layout]}>Banner</Text>
          </Pressable>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate("LOGO")}
          >
            <Text style={[styles.logo1, styles.logo1FlexBox]}>Logo</Text>
          </Pressable>
          <Text style={[styles.packaging2, styles.banner1Layout]}>
            Packaging
          </Text>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("MORE")}
          >
            <Text style={[styles.logo1, styles.logo1FlexBox]}>More</Text>
          </Pressable>
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
  designedByTypo: {
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
    textAlign: "center",
  },
  bottomLayout: {
    height: 1,
    width: 31,
    marginTop: 51,
  },
  n1Icon1Layout: {
    height: 240,
    marginTop: 33,
  },
  frameBg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  frameChild2Bg: {
    backgroundColor: Color.colorSilver_100,
    position: "absolute",
  },
  body4Layout: {
    width: 282,
    left: 43,
    borderRadius: Border.br_12xs,
    height: 1,
    backgroundColor: Color.colorTan_100,
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
    display: "flex",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
    alignItems: "center",
  },
  logo1FlexBox: {
    justifyContent: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    color: Color.colorTan_100,
    fontFamily: FontFamily.montserratRegular,
    height: 26,
    textAlign: "center",
    alignItems: "center",
  },
  banner1Layout: {
    width: 82,
    justifyContent: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
    alignItems: "center",
  },
  backgroundIcon: {
    height: 932,
    top: 0,
  },
  thankYouFor: {
    letterSpacing: 1.5,
    lineHeight: 23,
    fontFamily: FontFamily.uTMAmericana,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  xIcon: {
    width: 16,
    marginTop: 51,
    height: 16,
  },
  designedBy: {
    letterSpacing: 15.3,
    lineHeight: 20,
    marginTop: 51,
    fontSize: FontSize.size_xl,
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
  },
  stampIcon: {
    width: 106,
    height: 106,
    marginTop: 51,
  },
  bottomChild: {
    backgroundColor: Color.colorTan_100,
  },
  bottomItem: {
    backgroundColor: Color.colorTan_300,
  },
  bottom: {
    bottom: -4588,
    left: 61,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  frameChild: {
    left: 3,
    backgroundColor: Color.colorWhite,
    width: 137,
    height: 34,
    top: 3,
    position: "absolute",
  },
  rectangleWrapper: {
    height: 342,
    width: 369,
  },
  ef6c81427045451Icon: {
    height: 266,
    marginTop: 33,
    width: 369,
  },
  n1Icon: {
    height: 261,
    width: 368,
    marginTop: 33,
  },
  e6360d670c83cadd93921Icon: {
    height: 1024,
    width: 368,
    marginTop: 33,
  },
  n2Icon: {
    height: 296,
    width: 368,
    marginTop: 33,
  },
  n1Icon1: {
    width: 368,
  },
  frameItem: {
    left: 5,
    width: 88,
    height: 24,
    top: 3,
  },
  frameInner: {
    top: 243,
    left: 275,
    width: 90,
    height: 18,
  },
  rectangleParent: {
    height: 262,
    marginTop: 33,
    width: 369,
  },
  rectangleView: {
    left: 8,
    width: 36,
    height: 33,
    top: 6,
  },
  rectangleContainer: {
    width: 369,
  },
  frameChild1: {
    left: 14,
    backgroundColor: "#edeef0",
    width: 61,
    height: 35,
    top: 0,
    position: "absolute",
  },
  rectangleFrame: {
    height: 281,
    marginTop: 33,
    width: 369,
  },
  n1Icon3: {
    height: 285,
    width: 368,
    marginTop: 33,
  },
  n1Icon4: {
    height: 242,
    width: 368,
    marginTop: 33,
  },
  frameChild2: {
    left: 6,
    width: 60,
    height: 47,
    top: 0,
  },
  frameParent: {
    bottom: -3979,
    left: 0,
    position: "absolute",
  },
  packaging1: {
    bottom: 762,
    left: 112,
    fontSize: FontSize.size_12xl,
    letterSpacing: 2.3,
    lineHeight: 30,
    position: "absolute",
  },
  body4Child: {
    bottom: 730,
  },
  body4Item: {
    bottom: -4033,
  },
  body4: {
    top: 61,
    left: 31,
    height: 868,
    width: 369,
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
    top: 6,
    backgroundColor: Color.colorTan_100,
    height: 16,
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
    width: 1,
    height: 14,
    borderRadius: Border.br_12xs,
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
    top: 37,
    width: 350,
    left: 40,
    height: 2,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  banner1: {
    color: Color.colorTan_100,
    fontFamily: FontFamily.montserratRegular,
    width: 82,
  },
  logo1: {
    width: 81,
  },
  logo: {
    left: 90,
    top: 0,
    position: "absolute",
  },
  packaging2: {
    left: 179,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 82,
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  more: {
    left: 269,
    top: 0,
    position: "absolute",
  },
  menu: {
    top: 12,
  },
  wallIcon: {
    top: 19,
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
  packaging: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 929,
    overflow: "hidden",
  },
});

export default PACKAGING;
