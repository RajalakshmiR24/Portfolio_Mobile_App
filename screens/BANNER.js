import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BANNER = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.banner}>
      <View style={styles.background}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
      </View>
      <View style={styles.body2}>
        <View style={styles.bottom}>
          <Text style={styles.thankYouFor}>{`Thank you
for your time`}</Text>
          <Image
            style={styles.xIcon}
            contentFit="cover"
            source={require("../assets/x.png")}
          />
          <Text style={[styles.designedBy, styles.banner2Typo]}>
            DESIGNED BY
          </Text>
          <Image
            style={styles.stampIcon}
            contentFit="cover"
            source={require("../assets/stamp.png")}
          />
          <View style={[styles.bottomChild, styles.bottomLayout]} />
          <View style={[styles.bottomItem, styles.bottomItemBg]} />
          <View style={[styles.bottomItem, styles.bottomItemBg]} />
        </View>
        <View style={[styles.banner1, styles.bannerFlexBox]}>
          <View style={styles.charmLayout}>
            <View style={styles.charmInner}>
              <View style={[styles.parent, styles.parentPosition]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/6.png")}
                />
                <Image
                  style={[styles.icon1, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/1.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/2.png")}
                />
                <Image
                  style={[styles.icon3, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/3.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/4.png")}
                />
                <Image
                  style={[styles.icon5, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/5.png")}
                />
                <Image
                  style={[styles.icon6, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/41414141-1.png")}
                />
                <Image
                  style={[styles.icon7, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/51-1.png")}
                />
                <Image
                  style={[styles.icon8, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/13.png")}
                />
                <Image
                  style={[styles.icon9, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/10.png")}
                />
                <Image
                  style={[styles.icon10, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/101.png")}
                />
                <Image
                  style={[styles.icon11, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/102.png")}
                />
                <Image
                  style={[styles.icon12, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/103.png")}
                />
                <Image
                  style={[styles.icon13, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/11.png")}
                />
                <Image
                  style={[styles.icon14, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/111.png")}
                />
                <Image
                  style={[styles.icon15, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/112.png")}
                />
                <Image
                  style={[styles.icon16, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/113.png")}
                />
                <Image
                  style={[styles.icon17, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/12.png")}
                />
                <Image
                  style={[styles.icon18, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/121.png")}
                />
                <Image
                  style={[styles.icon19, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/122.png")}
                />
                <Image
                  style={[styles.icon20, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/123.png")}
                />
              </View>
            </View>
            <Text style={[styles.charmResort, styles.chubbLifeTypo]}>
              CHARM RESORT
            </Text>
          </View>
          <View style={[styles.chubb, styles.charmLayout]}>
            <View style={[styles.chubbInner, styles.innerPosition]}>
              <View style={[styles.group, styles.groupShadowBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/41.png")}
                />
                <Image
                  style={[styles.icon1, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/61.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/7.png")}
                />
                <Image
                  style={[styles.icon3, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/8.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/9.png")}
                />
                <Image
                  style={[styles.icon5, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/104.png")}
                />
                <Image
                  style={[styles.icon6, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/14.png")}
                />
                <Image
                  style={[styles.icon7, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/21.png")}
                />
                <Image
                  style={[styles.icon8, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/31.png")}
                />
              </View>
            </View>
            <Text style={[styles.chubbLife, styles.chubbLifeTypo]}>
              CHUBB LIFE
            </Text>
          </View>
          <View style={[styles.chubb, styles.charmLayout]}>
            <View style={[styles.chubbInner, styles.innerPosition]}>
              <View style={[styles.container, styles.groupShadowBox]}>
                <Image
                  style={[styles.icon30, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/33.png")}
                />
                <Image
                  style={[styles.icon31, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/51.png")}
                />
                <Image
                  style={[styles.icon32, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/34.png")}
                />
                <Image
                  style={[styles.icon33, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/35.png")}
                />
                <Image
                  style={[styles.icon34, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/36.png")}
                />
                <Image
                  style={[styles.icon35, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/22.png")}
                />
                <Image
                  style={[styles.icon36, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/25.png")}
                />
                <Image
                  style={[styles.icon37, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/311.png")}
                />
                <Image
                  style={[styles.icon38, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/32.png")}
                />
                <Image
                  style={[styles.icon39, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/37.png")}
                />
              </View>
            </View>
            <Text style={[styles.mitsubishiMotors, styles.chubbLifeTypo]}>
              MITSUBISHI MOTORS
            </Text>
          </View>
          <View style={[styles.chubb, styles.charmLayout]}>
            <View style={[styles.chubbInner, styles.innerPosition]}>
              <View style={[styles.frameView, styles.groupShadowBox]}>
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/38.png")}
                />
                <Image
                  style={[styles.icon1, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/42.png")}
                />
                <Image
                  style={[styles.icon42, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/381.png")}
                />
                <Image
                  style={[styles.icon43, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/39.png")}
                />
                <Image
                  style={[styles.icon44, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/40.png")}
                />
                <Image
                  style={[styles.icon45, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/62.png")}
                />
                <Image
                  style={[styles.icon46, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/15.png")}
                />
                <Image
                  style={[styles.icon47, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/23.png")}
                />
              </View>
            </View>
            <Text style={[styles.sacombank1, styles.chubbLifeTypo]}>
              SACOMBANK
            </Text>
          </View>
          <View style={[styles.chubb, styles.charmLayout]}>
            <View style={[styles.thePriviaInner, styles.innerPosition]}>
              <Image
                style={[styles.frameChild, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/group-3.png")}
              />
            </View>
            <Text style={[styles.thePrivia1, styles.chubbLifeTypo]}>
              THE PRIVIA
            </Text>
          </View>
        </View>
        <View style={[styles.lineBanner, styles.bannerFlexBox]}>
          <Image
            style={styles.lineBannerChild}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Image
            style={[styles.lineBannerItem, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Image
            style={[styles.lineBannerInner, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Image
            style={[styles.lineBannerItem, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Image
            style={[styles.lineBannerInner, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Image
            style={[styles.lineBannerItem, styles.lineSpaceBlock]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </View>
        <Text style={[styles.banner2, styles.banner2Typo]}>BANNER</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.body2Child, styles.vectorIconPosition]} />
      </View>
      <View style={styles.topBarMenu}>
        <Image
          style={styles.topBarMenuChild}
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
            <Text style={[styles.experience1, styles.logo1Typo]}>
              Experience
            </Text>
          </Pressable>
          <Text style={[styles.portfolio, styles.banner3Typo]}>Portfolio</Text>
          <View style={styles.menuBarInner} />
        </View>
      </View>
      <LinearGradient
        style={styles.menuPort}
        locations={[0, 0.41, 1]}
        colors={["rgba(37, 37, 37, 0.92)", "#252525", "#252525"]}
      >
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <View style={[styles.menu, styles.menuLayout1]}>
          <Text style={[styles.banner3, styles.banner3Layout]}>Banner</Text>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate("LOGO")}
          >
            <Text style={[styles.logo1, styles.logo1Typo]}>Logo</Text>
          </Pressable>
          <Pressable
            style={styles.packaging}
            onPress={() => navigation.navigate("PACKAGING")}
          >
            <Text style={[styles.packaging1, styles.banner3Layout]}>
              Packaging
            </Text>
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("MORE")}
          >
            <Text style={[styles.logo1, styles.logo1Typo]}>More</Text>
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
  banner2Typo: {
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
    textAlign: "center",
  },
  bottomLayout: {
    width: 31,
    marginTop: 51,
  },
  bottomItemBg: {
    backgroundColor: Color.colorTan_300,
    height: 1,
  },
  bannerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  parentPosition: {
    height: 144,
    top: 9,
    position: "absolute",
  },
  iconLayout1: {
    width: 144,
    height: 144,
    top: 0,
    position: "absolute",
  },
  chubbLifeTypo: {
    color: Color.colorTan_100,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  charmLayout: {
    height: 192,
    width: 430,
  },
  innerPosition: {
    top: 30,
    height: 162,
    left: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  iconLayout: {
    width: 143,
    height: 144,
    top: 0,
    position: "absolute",
  },
  lineSpaceBlock: {
    marginTop: 256,
    height: 1,
  },
  vectorIconPosition: {
    left: 199,
    width: 31,
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
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  logo1Typo: {
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratRegular,
    height: 26,
    color: Color.colorTan_100,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  banner3Typo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  banner3Layout: {
    width: 82,
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  backgroundIcon: {
    width: 430,
    height: 929,
  },
  background: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  thankYouFor: {
    lineHeight: 23,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  xIcon: {
    width: 16,
    marginTop: 51,
    height: 16,
  },
  designedBy: {
    letterSpacing: 15.3,
    lineHeight: 20,
    fontFamily: FontFamily.antonRegular,
    marginTop: 51,
    fontSize: FontSize.size_xl,
  },
  stampIcon: {
    width: 106,
    height: 106,
    marginTop: 51,
  },
  bottomChild: {
    height: 1,
    backgroundColor: Color.colorTan_100,
  },
  bottomItem: {
    width: 31,
    marginTop: 51,
  },
  bottom: {
    top: 1484,
    justifyContent: "flex-end",
    alignItems: "center",
    left: 92,
    position: "absolute",
  },
  icon: {
    left: 0,
  },
  icon1: {
    left: 156,
  },
  icon2: {
    left: 312,
  },
  icon3: {
    left: 468,
  },
  icon4: {
    left: 624,
  },
  icon5: {
    left: 780,
  },
  icon6: {
    left: 936,
  },
  icon7: {
    left: 1092,
  },
  icon8: {
    left: 1248,
  },
  icon9: {
    left: 1404,
  },
  icon10: {
    left: 1560,
  },
  icon11: {
    left: 1716,
  },
  icon12: {
    left: 1872,
  },
  icon13: {
    left: 2028,
  },
  icon14: {
    left: 2184,
  },
  icon15: {
    left: 2340,
  },
  icon16: {
    left: 2496,
  },
  icon17: {
    left: 2652,
  },
  icon18: {
    left: 2808,
  },
  icon19: {
    left: 2964,
  },
  icon20: {
    left: 3120,
  },
  parent: {
    width: 3264,
    left: 20,
    height: 144,
    top: 9,
  },
  charmInner: {
    bottom: 0,
    height: 162,
    width: 450,
    left: 0,
    position: "absolute",
  },
  charmResort: {
    bottom: 172,
    left: 120,
  },
  group: {
    width: 1392,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    height: 144,
    left: 20,
    top: 9,
    position: "absolute",
  },
  chubbInner: {
    width: 450,
    top: 30,
  },
  chubbLife: {
    left: 144,
    top: 0,
  },
  chubb: {
    marginTop: 65,
  },
  icon30: {
    left: 0,
  },
  icon31: {
    left: 155,
  },
  icon32: {
    left: 310,
  },
  icon33: {
    left: 466,
  },
  icon34: {
    left: 622,
  },
  icon35: {
    left: 777,
  },
  icon36: {
    left: 932,
  },
  icon37: {
    left: 1088,
  },
  icon38: {
    left: 1243,
  },
  icon39: {
    left: 1398,
  },
  container: {
    width: 1542,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    height: 144,
    left: 20,
    top: 9,
    position: "absolute",
  },
  mitsubishiMotors: {
    left: 92,
    color: Color.colorTan_100,
    top: 0,
  },
  icon42: {
    left: 312,
  },
  icon43: {
    left: 467,
  },
  icon44: {
    left: 623,
  },
  icon45: {
    left: 779,
  },
  icon46: {
    left: 935,
  },
  icon47: {
    left: 1090,
  },
  frameView: {
    width: 1234,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    height: 144,
    left: 20,
    top: 9,
    position: "absolute",
  },
  sacombank1: {
    left: 140,
    top: 0,
  },
  frameChild: {
    left: 87,
    width: 256,
    height: 144,
    top: 9,
  },
  thePriviaInner: {
    width: 430,
  },
  thePrivia1: {
    left: 148,
    top: 0,
  },
  banner1: {
    top: 170,
    left: 0,
  },
  lineBannerChild: {
    width: 282,
    height: 1,
  },
  lineBannerItem: {
    width: 186,
  },
  lineBannerInner: {
    width: 282,
  },
  lineBanner: {
    top: 137,
    left: 74,
  },
  banner2: {
    top: 76,
    left: 165,
    fontSize: FontSize.size_12xl,
    letterSpacing: 2.3,
    lineHeight: 30,
    position: "absolute",
  },
  vectorIcon: {
    height: 41,
    top: 0,
  },
  body2Child: {
    top: 58,
    backgroundColor: Color.colorTan_300,
    height: 1,
  },
  body2: {
    top: 61,
    height: 875,
    width: 430,
    left: 0,
    position: "absolute",
  },
  topBarMenuChild: {
    top: -4,
    height: 130,
    width: 430,
    left: 0,
    position: "absolute",
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
    shadowRadius: 1,
    elevation: 1,
    width: 113,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorTan_100,
    height: 16,
  },
  aboutMe1: {
    fontFamily: FontFamily.montserratRegular,
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
    width: 117,
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
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
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineIcon: {
    top: 35,
    width: 350,
    left: 40,
    height: 2,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  banner3: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
    color: Color.colorWhite,
    width: 82,
    left: 0,
  },
  logo1: {
    width: 81,
  },
  logo: {
    left: 90,
    top: 0,
    position: "absolute",
  },
  packaging1: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTan_100,
  },
  packaging: {
    left: 179,
    top: 0,
    position: "absolute",
  },
  more: {
    left: 269,
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
    width: 430,
    left: 0,
    position: "absolute",
  },
  banner: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 929,
  },
});

export default BANNER;
