import React, { useEffect } from "react"; 
import { StyleSheet, Text, View } from 'react-native';
// import firebase from "firebase";

const FindMyPetScreen = () => {
  // useEffect({
  //   const subjCollection = firebase.firestore().collection("mypets");
  // }, [])
    return(
        <Text>This is BasicRearingScreen</Text>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FindMyPetScreen;