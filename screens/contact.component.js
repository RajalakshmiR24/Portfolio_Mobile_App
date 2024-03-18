import React from 'react';
import { Card, Text, Divider, Button } from 'react-native-paper';
import { StyleSheet, View, ScrollView, TouchableOpacity, Linking } from 'react-native'; // Import TouchableOpacity and Linking
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize } from '../util/font';
import NavBar from '../components/navbar.component';

const ContactScreen = () => {
  const sendEmail = () => {
    Linking.openURL(`mailto:rajalakshmi245806@gmail.com`);
  }

  const openWebsite = () => {
    Linking.openURL(`https://zingy-cranachan-3b920a.netlify.app/`);
  }

  const mainFont = responsiveFontSize(20);

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#fff'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    card: {
      marginBottom: 20,
      elevation: 4,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    cardTitle: {
      fontSize: mainFont,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    cardContent: {
      fontSize: mainFont,
      color: '#666',
      marginBottom: 10,
    },
    link: {
      color: '#006db0',
      textDecorationLine: 'underline',
    },
    button: {
      backgroundColor: '#006db0',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: mainFont,
      color: '#fff',
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <Divider />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        centerContent={true}
      >
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Contact Information</Text>
            <Text style={styles.cardContent}>Email: rajalakshmi245806@gmail.com</Text>
            <Text style={styles.cardContent}>Phone: +91-8248492118</Text>
            <Text style={styles.cardContent}>Project: <Text style={styles.link} onPress={openWebsite}>My Protfolio</Text></Text>
            <Text style={styles.cardContent}>Location: Chennai, Tamil Nadu, India</Text>
          </Card.Content>
          <Card.Actions>
            <TouchableOpacity style={styles.button} onPress={sendEmail}>
              <Text style={styles.buttonText}>Contact Me via Email</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ContactScreen;
