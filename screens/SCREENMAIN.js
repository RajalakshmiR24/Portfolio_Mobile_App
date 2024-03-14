import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SCREENMAIN = () => {
  return (
    <View style={styles.screenMain}>
      <Image
        style={[styles.backgroundIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <View style={[styles.design, styles.designLayout]}>
        <Image
          style={[styles.ringIcon, styles.designLayout]}
          contentFit="cover"
          source={require("../assets/ring1.png")}
        />
        <Text style={styles.portfolio}>PORTFOLIO</Text>
        <Image
          style={[styles.logoIcon, styles.logoIconLayout]}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
        <Image
          style={[styles.statueIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/statue1.png")}
        />
      </View>
      <View style={[styles.body1, styles.body1Position]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.frameChildLayout]} />
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
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
            style={[styles.logoIcon1, styles.logoIconLayout]}
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
          source={require("../assets/group-11.png")}
        />
        <View style={[styles.topBarMenuItem, styles.rectangleViewLayout]} />
        <View style={[styles.menuBar, styles.menuLayout]}>
          <View style={[styles.menuBarChild, styles.menuLayout]} />
          <Text style={styles.aboutMe}>About Me</Text>
          <Text style={[styles.experience, styles.experienceTypo]}>
            Experience
          </Text>
          <Text style={[styles.portfolio1, styles.experienceTypo]}>
            Portfolio
          </Text>
          <View style={styles.menuBarItem} />
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
  logoIconLayout: {
    height: 176,
    width: 176,
  },
  body1Position: {
    left: 40,
    width: 350,
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
  experienceTypo: {
    color: Color.colorTan_100,
    height: 12,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    top: 4,
    textAlign: "center",
    position: "absolute",
  },
  backgroundIcon: {
    top: 0,
    left: 0,
    height: 932,
    width: 430,
  },
  ringIcon: {
    top: 190,
    height: 833,
    left: 0,
  },
  portfolio: {
    top: 219,
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
  logoIcon: {
    top: -20,
    left: 161,
    position: "absolute",
  },
  statueIcon: {
    top: 251,
    left: 34,
    height: 540,
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
  avatarIcon: {
    borderRadius: Border.br_10xl,
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
    left: 28,
    textAlign: "center",
    top: 2,
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
    top: 7,
    height: 1775,
    alignItems: "center",
    width: 350,
    left: 0,
    position: "absolute",
  },
  body1: {
    top: 1066,
    height: 791,
    width: 350,
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
    top: 2,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorTan_100,
  },
  aboutMe: {
    color: Color.colorGray_200,
    height: 12,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    top: 4,
    width: 117,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  experience: {
    left: 117,
    width: 116,
  },
  portfolio1: {
    left: 233,
    width: 117,
    color: Color.colorTan_100,
  },
  menuBarItem: {
    top: 3,
    left: 232,
    borderRadius: Border.br_12xs,
    width: 1,
    height: 14,
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  menuBar: {
    top: 95,
    backgroundColor: Color.colorGray_300,
    height: 20,
    width: 350,
    left: 40,
  },
  topBarMenu: {
    top: 784,
    height: 126,
    opacity: 0,
    left: 0,
  },
  screenMain: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default SCREENMAIN;
