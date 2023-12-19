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


function App(): React.JSX.Element {
 
  return (
    <SafeAreaView  style={{flex:1, backgroundColor: 'red'}}>
      <WelcomeScreen />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
