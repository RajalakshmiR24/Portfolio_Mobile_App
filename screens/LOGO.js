import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LOGO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logo}>
      <Image
        style={[styles.backgroundIcon, styles.menuPosition]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <View style={[styles.body3, styles.menuPosition]}>
        <View style={[styles.bottom, styles.bottomFlexBox]}>
          <Text style={[styles.thankYouFor, styles.coffeeTypo]}>{`Thank you
for your time`}</Text>
          <Image
            style={styles.xIcon}
            contentFit="cover"
            source={require("../assets/x.png")}
          />
          <Text style={[styles.designedBy, styles.logo1Typo]}>DESIGNED BY</Text>
          <Image
            style={styles.stampIcon}
            contentFit="cover"
            source={require("../assets/stamp.png")}
          />
          <View style={[styles.bottomChild, styles.bottomLayout]} />
          <View style={[styles.bottomItem, styles.bottomLayout]} />
          <View style={[styles.bottomItem, styles.bottomLayout]} />
        </View>
        <View style={[styles.lineLogo, styles.bottomFlexBox]}>
          <View style={[styles.lineLogoChild, styles.menuBarInnerLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
          <View style={[styles.lineLogoInner, styles.lineLayout]} />
          <View style={[styles.lineLogoItem, styles.lineLayout]} />
        </View>
        <View style={styles.logoThumb}>
          <View style={styles.viewLayout}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View
                style={[styles.fca1243605091Parent, styles.iconParentLayout]}
              >
                <Image
                  style={[styles.fca1243605091Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/427fca124360509-1.png")}
                />
                <Image
                  style={[styles.fca1243605092Icon, styles.iconLayout6]}
                  contentFit="cover"
                  source={require("../assets/427fca124360509-2.png")}
                />
                <Image
                  style={[styles.fca1243605094Icon, styles.iconLayout6]}
                  contentFit="cover"
                  source={require("../assets/427fca124360509-4.png")}
                />
                <Image
                  style={[styles.fca1243605093Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/427fca124360509-3.png")}
                />
                <Image
                  style={[styles.b9f24a1243605091Icon, styles.iconLayout5]}
                  contentFit="cover"
                  source={require("../assets/b9f24a124360509-1.png")}
                />
              </View>
            </View>
            <Text style={[styles.neptuneLounge, styles.coffeeLayout]}>
              NEPTUNE LOUNGE
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View
                style={[styles.cc243f142704545Parent, styles.iconParentLayout]}
              >
                <Image
                  style={[styles.cc243f142704545Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/cc243f142704545.png")}
                />
                <Image
                  style={[styles.ef6c8142704545Icon, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/7ef6c8142704545.png")}
                />
                <Image
                  style={[styles.dee55142704545Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/8dee55142704545.png")}
                />
                <Image
                  style={[styles.fbea142704545Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/40fbea142704545.png")}
                />
              </View>
            </View>
            <Text style={[styles.cocogourmet, styles.coffeeLayout]}>
              COCOGOURMET
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View
                style={[styles.e81481593031Parent, styles.iconParentLayout]}
              >
                <Image
                  style={[styles.e81481593031Icon, styles.iconLayout3]}
                  contentFit="cover"
                  source={require("../assets/6965e8148159303-1.png")}
                />
                <Image
                  style={[styles.e81481593032Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/6965e8148159303-2.png")}
                />
                <Image
                  style={[styles.e81481593035Icon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/6965e8148159303-5.png")}
                />
                <Image
                  style={[styles.e81481593034Icon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/6965e8148159303-4.png")}
                />
                <Image
                  style={[styles.e81481593033Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/6965e8148159303-3.png")}
                />
              </View>
            </View>
            <Text style={[styles.kocochiSpa, styles.coffeeLayout]}>
              KOCOCHI SPA
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View
                style={[styles.d4021499592631Parent, styles.iconParentLayout]}
              >
                <Image
                  style={[styles.d4021499592631Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-1.png")}
                />
                <Image
                  style={[styles.d4021499592633Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-3.png")}
                />
                <Image
                  style={[styles.d4021499592634Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-4.png")}
                />
                <Image
                  style={[styles.d4021499592635Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-5.png")}
                />
                <Image
                  style={[styles.d4021499592636Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-6.png")}
                />
                <Image
                  style={[styles.d4021499592632Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/88d402149959263-2.png")}
                />
              </View>
            </View>
            <Text style={[styles.bimHousseCoffee, styles.logo2Position]}>
              BIM HOUSSE COFFEE
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View
                style={[styles.f1e531496675532Parent, styles.iconParentLayout]}
              >
                <Image
                  style={[styles.f1e531496675532Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-2.png")}
                />
                <Image
                  style={[styles.f1e531496675537Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-7.png")}
                />
                <Image
                  style={[styles.f1e5314966755310Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-10.png")}
                />
                <Image
                  style={[styles.f1e531496675538Icon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-8.png")}
                />
                <Image
                  style={[styles.f1e531496675539Icon, styles.iconLayout3]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-9.png")}
                />
                <Image
                  style={[styles.f1e531496675536Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/7f1e53149667553-6.png")}
                />
              </View>
            </View>
            <Text style={[styles.punikaKoncept, styles.coffeeLayout]}>
              PUNIKA KONCEPT
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={[styles.nParent, styles.iconParentLayout]}>
                <Image
                  style={[styles.nIcon, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/139451740-5633406416685208-2478915244177642371-n.png")}
                />
                <Image
                  style={[styles.nIcon1, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/137648140-5633408843351632-8163657740041235489-n.png")}
                />
                <Image
                  style={[styles.nIcon2, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/138295440-5633405246685325-1799079626153754817-n.png")}
                />
                <Image
                  style={[styles.nIcon3, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/138295440-5633405246685325-1799079626153754817-n1.png")}
                />
                <Image
                  style={[styles.nIcon4, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/138295440-5633405246685325-1799079626153754817-n2.png")}
                />
                <Image
                  style={[styles.nIcon5, styles.iconLayout5]}
                  contentFit="cover"
                  source={require("../assets/138682121-5633408713351645-3557393428727422821-n.png")}
                />
                <Image
                  style={[
                    styles.z24610882223581835be850691445Icon,
                    styles.iconParentLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/z2461088222358-1835be8506914457b7b77c0db31c9e23scaled-1.png")}
                />
              </View>
            </View>
            <Text style={[styles.beFutureSchool, styles.coffeeLayout]}>
              BE FUTURE SCHOOL
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={styles.parentShadowBox}>
                <Image
                  style={[styles.icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/114.png")}
                />
                <Image
                  style={[styles.icon1, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/124.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/131.png")}
                />
                <Image
                  style={[styles.icon3, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/141.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/52.png")}
                />
              </View>
            </View>
            <Text style={[styles.huynhHan, styles.coffeeLayout]}>
              HUYNH HAN
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={styles.parentShadowBox}>
                <Image
                  style={[styles.icon1, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/151.png")}
                />
                <Image
                  style={[styles.icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/16.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/24.png")}
                />
                <Image
                  style={[styles.icon3, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/310.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/43.png")}
                />
              </View>
            </View>
            <Text style={[styles.langNgheFitness, styles.coffeeLayout]}>
              LANG NGHE FITNESS
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={[styles.container, styles.iconParentLayout]}>
                <Image
                  style={[styles.icon10, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/161.png")}
                />
                <Image
                  style={[styles.icon11, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/17.png")}
                />
                <Image
                  style={[styles.icon12, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/18.png")}
                />
                <Image
                  style={[styles.icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/19.png")}
                />
                <Image
                  style={[styles.icon14, styles.iconLayout5]}
                  contentFit="cover"
                  source={require("../assets/53.png")}
                />
              </View>
            </View>
            <Text style={[styles.fluffyCoffee, styles.coffeeLayout]}>
              FLUFFY COFFEE
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={styles.parentShadowBox}>
                <Image
                  style={[styles.icon1, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/110.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/26.png")}
                />
                <Image
                  style={[styles.icon3, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/312.png")}
                />
                <Image
                  style={[styles.icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/44.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/20.png")}
                />
              </View>
            </View>
            <Text style={[styles.myCoffee, styles.coffeeLayout]}>
              MY COFFEE
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={[styles.parent2, styles.iconParentLayout]}>
                <Image
                  style={[styles.icon20, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/27.png")}
                />
                <Image
                  style={[styles.icon21, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/115.png")}
                />
                <Image
                  style={[styles.n1Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/210998885-6449629681729540-5931844739484839034-n-1.png")}
                />
                <Image
                  style={[styles.n2Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/210998885-6449629681729540-5931844739484839034-n-2.png")}
                />
                <Image
                  style={[styles.n4Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/210998885-6449629681729540-5931844739484839034-n-4.png")}
                />
                <Image
                  style={[styles.n3Icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/210998885-6449629681729540-5931844739484839034-n-3.png")}
                />
              </View>
            </View>
            <Text style={[styles.minara, styles.coffeeLayout]}>MINARA</Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={[styles.parent3, styles.iconParentLayout]}>
                <Image
                  style={[styles.icon22, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/116.png")}
                />
                <Image
                  style={[styles.icon23, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/28.png")}
                />
                <Image
                  style={[styles.icon24, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/313.png")}
                />
              </View>
            </View>
            <Text style={[styles.ntqJewelry, styles.coffeeLayout]}>
              NTQ JEWELRY
            </Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.inner, styles.menuPosition]}>
              <View style={[styles.parent4, styles.iconParentLayout]}>
                <Image
                  style={[styles.icon25, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/29.png")}
                />
                <Image
                  style={[styles.icon26, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/314.png")}
                />
                <Image
                  style={[styles.icon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/117.png")}
                />
              </View>
            </View>
            <Text style={[styles.vietCoach, styles.coffeeLayout]}>
              VIET COACH
            </Text>
          </View>
        </View>
        <Text style={[styles.logo1, styles.logo1Typo]}>LOGO</Text>
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
            <Text style={[styles.experience1, styles.banner1FlexBox]}>
              Experience
            </Text>
          </Pressable>
          <Text style={[styles.portfolio, styles.aboutMe1Layout]}>
            Portfolio
          </Text>
          <View style={[styles.menuBarInner, styles.menuBarInnerLayout]} />
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
          source={require("../assets/line1.png")}
        />
        <View style={[styles.menu, styles.menuLayout1]}>
          <Pressable
            style={styles.aboutMe}
            onPress={() => navigation.navigate("BANNER")}
          >
            <Text style={[styles.banner1, styles.banner1FlexBox]}>Banner</Text>
          </Pressable>
          <Text style={[styles.logo2, styles.logo2Layout]}>Logo</Text>
          <Pressable
            style={styles.packaging}
            onPress={() => navigation.navigate("PACKAGING")}
          >
            <Text style={[styles.banner1, styles.banner1FlexBox]}>
              Packaging
            </Text>
          </Pressable>
          <Pressable
            style={styles.more}
            onPress={() => navigation.navigate("MORE")}
          >
            <Text style={[styles.more1, styles.logo2Layout]}>More</Text>
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
  bottomFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  coffeeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
  },
  logo1Typo: {
    color: Color.colorTan_200,
    fontFamily: FontFamily.antonRegular,
    textAlign: "center",
  },
  bottomLayout: {
    width: 31,
    height: 1,
    marginTop: 51,
  },
  menuBarInnerLayout: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorTan_100,
  },
  lineLayout: {
    marginTop: 256,
    borderRadius: Border.br_12xs,
    height: 1,
    backgroundColor: Color.colorTan_100,
  },
  iconParentLayout: {
    height: 144,
    position: "absolute",
  },
  iconLayout6: {
    width: 221,
    height: 144,
    top: 0,
    position: "absolute",
  },
  iconLayout5: {
    width: 216,
    height: 144,
    top: 0,
    position: "absolute",
  },
  coffeeLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  viewLayout: {
    height: 192,
    width: 430,
  },
  iconLayout4: {
    width: 200,
    height: 144,
    top: 0,
    position: "absolute",
  },
  iconLayout3: {
    width: 183,
    height: 144,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    width: 199,
    height: 144,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 192,
    height: 144,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 222,
    height: 144,
    top: 0,
    position: "absolute",
  },
  logo2Position: {
    left: 90,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 156,
    height: 144,
    top: 0,
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
  banner1FlexBox: {
    justifyContent: "center",
    display: "flex",
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratRegular,
    height: 26,
    color: Color.colorTan_100,
    textAlign: "center",
    alignItems: "center",
  },
  logo2Layout: {
    width: 81,
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
    lineHeight: 23,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
  },
  xIcon: {
    width: 16,
    marginTop: 51,
    height: 16,
  },
  designedBy: {
    letterSpacing: 15.3,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    marginTop: 51,
  },
  stampIcon: {
    width: 106,
    height: 106,
    marginTop: 51,
  },
  bottomChild: {
    height: 1,
    backgroundColor: Color.colorTan_100,
    width: 31,
  },
  bottomItem: {
    backgroundColor: Color.colorTan_300,
    height: 1,
  },
  bottom: {
    top: 3517,
    left: 92,
    justifyContent: "flex-end",
  },
  lineLogoChild: {
    width: 282,
    height: 1,
  },
  lineLogoItem: {
    width: 186,
  },
  lineLogoInner: {
    width: 282,
  },
  lineLogo: {
    bottom: -2611,
    left: 74,
  },
  fca1243605091Icon: {
    left: 228,
    width: 224,
    top: 0,
  },
  fca1243605092Icon: {
    left: 644,
  },
  fca1243605094Icon: {
    left: 877,
  },
  fca1243605093Icon: {
    left: 464,
    width: 168,
    top: 0,
  },
  b9f24a1243605091Icon: {
    left: 0,
  },
  fca1243605091Parent: {
    width: 1098,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  inner: {
    top: 30,
    height: 162,
  },
  neptuneLounge: {
    left: 106,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  cc243f142704545Icon: {
    width: 328,
    left: 0,
    top: 0,
  },
  ef6c8142704545Icon: {
    left: 720,
  },
  dee55142704545Icon: {
    left: 340,
    width: 147,
    top: 0,
  },
  fbea142704545Icon: {
    left: 499,
    width: 209,
    top: 0,
  },
  cc243f142704545Parent: {
    width: 920,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  cocogourmet: {
    left: 121,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  view1: {
    marginTop: 65,
  },
  e81481593031Icon: {
    left: 0,
  },
  e81481593032Icon: {
    left: 887,
    width: 235,
    top: 0,
  },
  e81481593035Icon: {
    left: 677,
  },
  e81481593034Icon: {
    left: 466,
  },
  e81481593033Icon: {
    left: 195,
    width: 259,
    top: 0,
  },
  e81481593031Parent: {
    width: 1122,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  kocochiSpa: {
    left: 133,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  d4021499592631Icon: {
    left: 196,
  },
  d4021499592633Icon: {
    left: 399,
    width: 138,
    top: 0,
  },
  d4021499592634Icon: {
    left: 550,
    width: 101,
    top: 0,
  },
  d4021499592635Icon: {
    left: 663,
  },
  d4021499592636Icon: {
    left: 897,
  },
  d4021499592632Icon: {
    width: 184,
    left: 0,
    top: 0,
  },
  d4021499592631Parent: {
    width: 1118,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  bimHousseCoffee: {
    color: Color.colorTan_100,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
  },
  f1e531496675532Icon: {
    width: 269,
    left: 0,
    top: 0,
  },
  f1e531496675537Icon: {
    left: 615,
    width: 243,
    top: 0,
  },
  f1e5314966755310Icon: {
    left: 1276,
    width: 219,
    top: 0,
  },
  f1e531496675538Icon: {
    left: 1066,
  },
  f1e531496675539Icon: {
    left: 870,
  },
  f1e531496675536Icon: {
    left: 281,
    width: 323,
    top: 0,
  },
  f1e531496675532Parent: {
    width: 1496,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  punikaKoncept: {
    left: 110,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  nIcon: {
    left: 1056,
  },
  nIcon1: {
    left: 440,
  },
  nIcon2: {
    left: 836,
    width: 208,
    top: 0,
  },
  nIcon3: {
    top: 144,
    left: 824,
    width: 173,
  },
  nIcon4: {
    width: 220,
    left: 0,
    top: 0,
  },
  nIcon5: {
    left: 1268,
  },
  z24610882223581835be850691445Icon: {
    left: 232,
    width: 196,
    top: 0,
  },
  nParent: {
    width: 1484,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  beFutureSchool: {
    left: 93,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  icon: {
    width: 144,
    left: 0,
    top: 0,
  },
  icon1: {
    width: 144,
  },
  icon2: {
    left: 312,
    width: 144,
    top: 0,
  },
  icon3: {
    left: 468,
    width: 144,
    top: 0,
  },
  icon4: {
    left: 624,
    width: 144,
    top: 0,
  },
  parentShadowBox: {
    width: 768,
    height: 144,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    position: "absolute",
  },
  huynhHan: {
    left: 144,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  langNgheFitness: {
    left: 91,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  icon10: {
    left: 582,
    width: 144,
    top: 0,
  },
  icon11: {
    width: 258,
  },
  icon12: {
    left: 426,
    width: 144,
    top: 0,
  },
  icon14: {
    left: 738,
  },
  container: {
    width: 954,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  fluffyCoffee: {
    left: 119,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  myCoffee: {
    left: 147,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  icon20: {
    left: 190,
    width: 233,
    top: 0,
  },
  icon21: {
    left: 435,
    width: 214,
    top: 0,
  },
  n1Icon: {
    left: 886,
    width: 218,
    top: 0,
  },
  n2Icon: {
    left: 1116,
  },
  n4Icon: {
    width: 178,
    left: 0,
    top: 0,
  },
  n3Icon: {
    left: 661,
    width: 213,
    top: 0,
  },
  parent2: {
    width: 1308,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  minara: {
    left: 169,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  icon22: {
    left: 194,
    width: 144,
    top: 0,
  },
  icon23: {
    width: 182,
    left: 0,
    top: 0,
  },
  icon24: {
    left: 350,
    width: 247,
    top: 0,
  },
  parent3: {
    width: 596,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  ntqJewelry: {
    left: 132,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  icon25: {
    width: 230,
  },
  icon26: {
    left: 398,
    width: 226,
    top: 0,
  },
  parent4: {
    width: 623,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: 20,
    top: 9,
    height: 144,
  },
  vietCoach: {
    left: 141,
    color: Color.colorTan_100,
    textAlign: "center",
    fontFamily: FontFamily.uTMAmericana,
    letterSpacing: 1.5,
    top: 0,
    position: "absolute",
  },
  logoThumb: {
    bottom: -2578,
    left: 0,
    position: "absolute",
  },
  logo1: {
    bottom: 762,
    left: 183,
    fontSize: FontSize.size_12xl,
    letterSpacing: 2.3,
    lineHeight: 30,
    position: "absolute",
  },
  body3: {
    bottom: 0,
    height: 868,
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
  logo2: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    left: 90,
    top: 0,
    position: "absolute",
    color: Color.colorWhite,
  },
  packaging: {
    left: 179,
    top: 0,
    position: "absolute",
  },
  more1: {
    fontFamily: FontFamily.montserratRegular,
    width: 81,
    color: Color.colorTan_100,
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
  },
  logo: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 929,
    overflow: "hidden",
  },
});

export default LOGO;
