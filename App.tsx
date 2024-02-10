import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WelcomeScreen from './src/screens/welcomeScreen';
import InComeScreen from './src/screens/inComeScreen';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {
 
  return (

    <NavigationContainer>
      <SafeAreaView  style={{flex:1, backgroundColor: 'red'}}>
        <InComeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
