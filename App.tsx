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


function App(): React.JSX.Element {
 
  return (
    <SafeAreaView  style={{flex:1, backgroundColor: 'red'}}>
      
      <InComeScreen />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
