import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import localimage from '../assets/photo.jpg';

function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/in/raja-lakshmi-154519204/');
  }

  const onMenuItemSelect = (index) => {
    navigation.navigate(index);
    setMenuVisible(false);
  };

  const menuIcon = (name) => (props) => <FontAwesome name={name} {...props} />;

  const styles = StyleSheet.create({
    icon: {
      marginHorizontal: 10,
    }
  });

  return (
    <Appbar.Header>
      <Menu
        visible={menuVisible}
        onDismiss={toggleMenu}
        anchor={
          <Appbar.Action
        icon={() => <MaterialCommunityIcons name="menu" size={24} color="white" />}
        onPress={() => toggleMenu()}
      />
        }
      >
        <Menu.Item
          icon={menuIcon('home')}
          title="Home"
          onPress={() => onMenuItemSelect('Home')}
        />
        <Menu.Item
          icon={menuIcon('briefcase')}
          title="Experience"
          onPress={() => onMenuItemSelect('Experience')}
        />
        <Menu.Item
          icon={menuIcon('graduation-cap')}
          title="Education"
          onPress={() => onMenuItemSelect('Education')}
        />
        <Menu.Item
          icon={menuIcon('comments')}
          title="Contact"
          onPress={() => onMenuItemSelect('Contact')}
        />
      </Menu>
      <Appbar.Content title=" " />
      <TouchableOpacity style={styles.icon} onPress={openBrowser}>
        <FontAwesome name="linkedin-square" size={24} color="white" />
      </TouchableOpacity>
    </Appbar.Header>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.mobileMenu}>
        <View style={styles.blueBackground} />
        <View style={styles.profile}>
                <Image source={localimage} style={styles.profileImage} />

          <View style={styles.profileInfo}>
            <Text style={styles.profileTitle}>Rajalakshmi R</Text>
            <Text style={styles.profileSubtitle}>Frontend Developer</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobileMenu: {
    flex: 1,
    borderRadius: -15,
    overflow: 'hidden',
    shadowColor: '#006db0',
  },
  blueBackground: {
    backgroundColor: '#006db0',
    width: '120%',
    height: 235,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    top: -110,
    left: -25,
    transform: [{ rotate: '-25deg' }],
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  profileSubtitle: {
    fontSize: 14,
    opacity: 0.6,
    color: '#fff',
  }
});

export default App;
