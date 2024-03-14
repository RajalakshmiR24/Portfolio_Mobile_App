import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EXPERIENCE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.experience}>
      <View style={styles.background}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.backgroundIcon1}
          contentFit="cover"
          source={require("../assets/background1.png")}
        />
      </View>
      <View style={[styles.body, styles.bodyLayout]}>
        <View style={[styles.lightBg, styles.bodyLayout]}>
          <View style={styles.lightBgChild} />
        </View>
        <View style={[styles.workExperience, styles.softwareFlexBox]}>
          <Text style={[styles.workExperience1, styles.software1Typo]}>
            WORK EXPERIENCE
          </Text>
          <Text style={[styles.text, styles.textTypo]}>
            | 05/2019 - 08/2022 |
          </Text>
          <Text
            style={[styles.stilldesignDesign, styles.textTypo]}
          >{`STILLDESIGN - DESIGN & BRANDING`}</Text>
          <Text
            style={[styles.juniorDesigner, styles.designerTypo]}
          >{`• Junior Designer - (05/2019 - 12/2019)
• Senior Designer - (12/2019 - 03/2021)
• Team Leader - (03/2021 - 08/2022)`}</Text>
          <View
            style={[styles.workExperienceChild, styles.topBarMenuItemLayout]}
          />
          <Text style={[styles.text1, styles.text1FlexBox]}>
            | 08/2022- 11/2022 |
          </Text>
          <Text style={[styles.stilldesignDesign, styles.textTypo]}>
            TSP PERFORMANCE
          </Text>
          <Text style={styles.designerTypo}>
            • Senior Designer - (08/2022 - 12/2022)
          </Text>
        </View>
        <View style={[styles.software, styles.softwareFlexBox]}>
          <Text style={[styles.software1, styles.software1Typo]}>SOFTWARE</Text>
          <View style={styles.master}>
            <Image
              style={[styles.masterSoftwareIcon, styles.softwareIconLayout]}
              contentFit="cover"
              source={require("../assets/master-software.png")}
            />
            <Text style={[styles.masterSkill, styles.textTypo]}>
              | Master Skill |
            </Text>
          </View>
          <View style={styles.basic}>
            <Image
              style={[styles.basicSoftwareIcon, styles.softwareIconLayout]}
              contentFit="cover"
              source={require("../assets/basic-software.png")}
            />
            <Text style={[styles.basicSkill, styles.text1FlexBox]}>
              | Basic Skill |
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.topBarMenu}>
        <Image
          style={styles.topBarMenuChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={[styles.topBarMenuItem, styles.topBarMenuItemLayout]} />
        <View style={styles.menuBar}>
          <View style={[styles.menuBarChild, styles.menuLayout]} />
          <View style={[styles.menuBarItem, styles.menuLayout]} />
          <Pressable
            style={styles.aboutMe}
            onPress={() => navigation.navigate("MAIN")}
          >
            <Text style={[styles.aboutMe1, styles.aboutMe1FlexBox]}>
              About Me
            </Text>
          </Pressable>
          <Text style={[styles.experience1, styles.aboutMe1FlexBox]}>
            Experience
          </Text>
          <Pressable
            style={styles.portfolio}
            onPress={() => navigation.navigate("BANNER")}
          >
            <Text style={[styles.aboutMe1, styles.aboutMe1FlexBox]}>
              Portfolio
            </Text>
          </Pressable>
          <View style={styles.menuBarInner} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyLayout: {
    width: 398,
    position: "absolute",
  },
  softwareFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  software1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.antonRegular,
    lineHeight: 30,
    letterSpacing: 2.3,
    fontSize: FontSize.size_12xl,
  },
  textTypo: {
    fontFamily: FontFamily.uTMAmericana,
    textAlign: "center",
  },
  designerTypo: {
    color: Color.colorWhite,
    lineHeight: 29,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
    marginTop: 17,
    fontFamily: FontFamily.uTMAmericana,
    textAlign: "center",
  },
  topBarMenuItemLayout: {
    width: 86,
    backgroundColor: Color.colorTan_100,
    height: 2,
    borderRadius: Border.br_6xs,
  },
  text1FlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.uTMAmericana,
    lineHeight: 20,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  softwareIconLayout: {
    height: 50,
    width: 314,
    left: 0,
    position: "absolute",
  },
  menuLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  aboutMe1FlexBox: {
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  backgroundIcon: {
    width: 430,
    height: 929,
  },
  backgroundIcon1: {
    height: 1118,
    width: 430,
  },
  background: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lightBgChild: {
    top: 22,
    left: 99,
    backgroundColor: Color.colorGray_200,
    width: 200,
    height: 2,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  lightBg: {
    top: 406,
    borderRadius: 49,
    backgroundColor: Color.colorTan_200,
    height: 527,
    left: 0,
  },
  workExperience1: {
    color: Color.colorTan_200,
    width: 240,
    height: 47,
  },
  text: {
    marginTop: 17,
    color: Color.colorTan_100,
    lineHeight: 20,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.uTMAmericana,
  },
  stilldesignDesign: {
    fontSize: FontSize.size_sm,
    letterSpacing: 1.1,
    lineHeight: 14,
    marginTop: 17,
    color: Color.colorTan_100,
  },
  juniorDesigner: {
    width: 259,
    height: 94,
  },
  workExperienceChild: {
    marginTop: 17,
  },
  text1: {
    width: 229,
    height: 29,
    marginTop: 17,
    color: Color.colorTan_100,
  },
  workExperience: {
    left: 50,
    height: 372,
    top: 0,
  },
  software1: {
    width: 158,
    height: 64,
    color: Color.colorGray_200,
  },
  masterSoftwareIcon: {
    top: 43,
  },
  masterSkill: {
    left: 83,
    color: Color.colorGray_200,
    lineHeight: 20,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.uTMAmericana,
    top: 0,
    position: "absolute",
  },
  master: {
    height: 93,
    width: 314,
  },
  basicSoftwareIcon: {
    top: 59,
  },
  basicSkill: {
    left: 89,
    width: 146,
    height: 36,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  basic: {
    height: 109,
    width: 314,
  },
  software: {
    top: 454,
    left: 42,
    justifyContent: "flex-end",
  },
  body: {
    top: 137,
    left: 16,
    height: 933,
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
    position: "absolute",
  },
  menuBarChild: {
    top: 4,
    backgroundColor: Color.colorGray_300,
    height: 20,
    width: 350,
    borderRadius: Border.br_4xs,
    left: 0,
  },
  menuBarItem: {
    top: 6,
    left: 118,
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
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorTan_100,
  },
  aboutMe1: {
    fontFamily: FontFamily.montserratRegular,
    width: 117,
    color: Color.colorTan_100,
  },
  aboutMe: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  experience1: {
    left: 117,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 116,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  portfolio: {
    left: 233,
    top: 0,
    position: "absolute",
  },
  menuBarInner: {
    top: 7,
    left: 232,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorTan_300,
    width: 1,
    height: 14,
    position: "absolute",
  },
  menuBar: {
    top: 91,
    left: 40,
    height: 26,
    width: 350,
    position: "absolute",
  },
  topBarMenu: {
    height: 126,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  experience: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 929,
  },
});

export default EXPERIENCE;
