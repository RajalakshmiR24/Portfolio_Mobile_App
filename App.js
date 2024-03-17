/* eslint react/display-name: [0] */
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import AppNavigator from './components/navigation.component';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006db0',
    background: '#fff',
    surface: '#fff',
    backdrop: '#fff',
    white: '#ffffff,'
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider
        settings={{
          icon: props => <FontAwesome {...props} />, 
        }}
        theme={theme}
      >
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
