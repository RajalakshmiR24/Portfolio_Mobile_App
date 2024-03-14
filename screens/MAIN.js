import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MAIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Image
        style={[styles.backgroundIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <View style={[styles.design, styles.designLayout]}>
        <Image
          style={[styles.ringIcon, styles.designLayout]}
          contentFit="cover"
          source={require("../assets/ring2.png")}
        />
        <Text style={styles.portfolio}>PORTFOLIO</Text>
        <Image
          style={[styles.statueIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/statue2.png")}
        />
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo2.png")}
        />
      </View>
      <View style={styles.body1}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.frameChildLayout]} />
          <Pressable
            style={styles.avatar}
            onPress={() => navigation.navigate("SCREENINTRO")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </Pressable>
          <Text style={[styles.leXuanTuan, styles.contactMeTypo]}>{`LE XUAN
TUAN KIET`}</Text>
          <View style={styles.frameInner} />
          <Text
            style={styles.mnhLKit}
          >{`Mình là Kiệt, và cũng là một Thợ thiết kế,

Với một góc nhìn thứ 3 mình tự đánh giá bản thân mình là người thích học hỏi, yêu sự sáng tạo và muốn được nâng cao, phát triển bản thân. Và đương nhiên mình chịu được áp lực công việc vì nếu không thì mình sẽ không thể tồn tại trong cái ngành “làm dâu” này.

Kiệt đã được hơn 3 năm kinh nghiệm trong việc cầm chuột và “làm dâu” cùng các “mẹ chồng”. Với mình design thì chưa bao giờ dừng lại ở việc sáng tạo trên những artwork đầy ấp hình và chữ, nó còn là sự cảm nhận và thông tin truyền tải đến người dùng. Cho nên mình luôn cố gắng để mở ra cho mình cơ hội để học hỏi, làm việc và phát triển bản thân cũng như nghề nghiệp. Chính vì vậy hôm nay mình ở đây và mong sẽ được bén duyên cùng công ty của bạn.
`}</Text>
          <Image
            style={styles.logoIcon1}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          <Text style={[styles.contactMe, styles.contactMeTypo]}>
            CONTACT ME
          </Text>
          <View style={styles.mail}>
            <Image
              style={[styles.mailIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/mail.png")}
            />
            <Text style={styles.kiranle2997xgmailcom}>
              kiranle2997x@gmail.com
            </Text>
          </View>
          <View style={styles.phone}>
            <Image
              style={[styles.phoneIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/phone.png")}
            />
            <Text style={styles.kiranle2997xgmailcom}>08 555 16 121</Text>
          </View>
          <View style={styles.behance}>
            <Image
              style={[styles.beIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/be.png")}
            />
            <Text style={styles.kiranle2997xgmailcom}>Kiran97</Text>
          </View>
          <View style={styles.facebook}>
            <Image
              style={[styles.facebookIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/facebook.png")}
            />
            <Text style={styles.kiranle2997xgmailcom}>Kiran.le97</Text>
          </View>
          <View style={styles.facebook}>
            <Image
              style={[styles.facebookIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/ins.png")}
            />
            <Text style={styles.kiranle2997xgmailcom}>Kiran.le97</Text>
          </View>
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.frameChildLayout]} />
        </View>
      </View>
      <View style={[styles.topBarMenu, styles.iconLayout]}>
        <Image
          style={[styles.topBarMenuChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={[styles.topBarMenuItem, styles.rectangleViewLayout]} />
        <View style={styles.menuBar}>
          <View style={[styles.menuBarChild, styles.menuLayout]} />
          <View style={[styles.menuBarItem, styles.menuLayout]} />
          <Text style={styles.aboutMe}>About Me</Text>
          <Pressable
            style={styles.experience}
            onPress={() => navigation.navigate("EXPERIENCE")}
          >
            <Text style={[styles.experience1, styles.portfolio2Typo]}>
              Experience
            </Text>
          </Pressable>
          <Pressable
            style={styles.portfolio1}
            onPress={() => navigation.navigate("BANNER")}
          >
            <Text style={[styles.portfolio2, styles.portfolio2Typo]}>
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
  iconLayout: {
    width: 430,
    position: "absolute",
  },
  designLayout: {
    width: 498,
    position: "absolute",
  },
  frameChildLayout: {
    height: 1,
    width: 31,
  },
  contactMeTypo: {
    textAlign: "left",
    marginTop: 34,
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
  },
  rectangleViewLayout: {
    width: 86,
    borderRadius: Border.br_6xs,
    height: 2,
    backgroundColor: Color.colorTan_100,
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  portfolio2Typo: {
    color: Color.colorTan_100,
    fontFamily: FontFamily.montserratRegular,
    justifyContent: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
    alignItems: "center",
  },
  backgroundIcon: {
    left: 0,
    top: 0,
    height: 932,
    width: 430,
  },
  ringIcon: {
    top: -130,
    height: 833,
    opacity: 0,
    left: 0,
  },
  portfolio: {
    top: -1521,
    left: 87,
    textAlign: "right",
    width: 324,
    height: 88,
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
    lineHeight: 82,
    fontSize: FontSize.size_65xl,
    position: "absolute",
  },
  statueIcon: {
    top: -1099,
    left: 34,
    height: 540,
  },
  logoIcon: {
    top: -1875,
    left: 155,
    width: 189,
    height: 189,
    position: "absolute",
  },
  design: {
    top: 141,
    left: -34,
    height: 1023,
  },
  frameChild: {
    backgroundColor: Color.colorTan_300,
    width: 31,
  },
  frameItem: {
    marginTop: 34,
    backgroundColor: Color.colorTan_300,
    width: 31,
  },
  icon: {
    borderRadius: Border.br_10xl,
    height: "100%",
    width: "100%",
  },
  avatar: {
    height: 486,
    marginTop: 34,
    width: 350,
  },
  leXuanTuan: {
    letterSpacing: 6.3,
    lineHeight: 82,
    fontSize: FontSize.size_65xl,
    textAlign: "left",
  },
  frameInner: {
    height: 2,
    width: 351,
    backgroundColor: Color.colorTan_100,
    marginTop: 34,
  },
  mnhLKit: {
    textAlign: "justify",
    height: 317,
    color: Color.colorWhite,
    fontFamily: FontFamily.uTMAmericana,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
    width: 351,
    marginTop: 34,
  },
  logoIcon1: {
    width: 176,
    height: 176,
    marginTop: 34,
  },
  rectangleView: {
    marginTop: 34,
  },
  contactMe: {
    fontSize: FontSize.size_12xl,
    letterSpacing: 2.3,
    lineHeight: 30,
  },
  mailIcon: {
    width: "10.2%",
    right: "89.8%",
  },
  kiranle2997xgmailcom: {
    top: 2,
    left: 28,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.uTMAmericana,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  mail: {
    width: 196,
    height: 20,
    marginTop: 34,
  },
  phoneIcon: {
    width: "15.75%",
    right: "84.25%",
  },
  phone: {
    width: 127,
    height: 20,
    marginTop: 34,
  },
  beIcon: {
    width: "25%",
    right: "75%",
  },
  behance: {
    width: 80,
    height: 20,
    marginTop: 34,
  },
  facebookIcon: {
    width: "20.83%",
    right: "79.17%",
  },
  facebook: {
    width: 96,
    height: 20,
    marginTop: 34,
  },
  frameChild1: {
    backgroundColor: Color.colorTan_100,
    marginTop: 34,
  },
  rectangleParent: {
    height: 1775,
    alignItems: "center",
    top: 7,
    width: 350,
    left: 0,
    position: "absolute",
  },
  body1: {
    top: 61,
    height: 871,
    width: 350,
    left: 40,
    position: "absolute",
  },
  topBarMenuChild: {
    top: -4,
    height: 130,
    left: 0,
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
    left: 0,
  },
  menuBarItem: {
    top: 6,
    left: 2,
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
  aboutMe: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorGray_200,
    width: 117,
    justifyContent: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: 26,
    textAlign: "center",
    alignItems: "center",
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
  portfolio2: {
    width: 117,
  },
  portfolio1: {
    left: 233,
    top: 0,
    position: "absolute",
  },
  menuBarInner: {
    left: 232,
    borderRadius: Border.br_12xs,
    width: 1,
    height: 14,
    backgroundColor: Color.colorTan_100,
    top: 7,
    position: "absolute",
  },
  menuBar: {
    top: 91,
    height: 26,
    width: 350,
    left: 40,
    position: "absolute",
  },
  topBarMenu: {
    height: 126,
    left: 0,
    top: 0,
  },
  main: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 932,
  },
});

export default MAIN;
