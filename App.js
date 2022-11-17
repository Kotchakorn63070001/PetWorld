import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from '../PetWorldNew/navigation/MainNavigator';

export default function App() {

  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
      
    //   <StatusBar style="auto" />
    // </View>
    // <SafeAreaView styles={styles.root}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
      
    // </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // root: {
  //   flex: 1,
  //   backgroundColor: '#f9fbfc',
  // }
});
