import React, { useEffect ,useState} from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback ,ScrollView, Dimensions} from 'react-native';
import CatData from "../app/CatData";
import DogData from "../app/DogData";
// import firebase from "firebase";


const BasicLearningScreen = () => {
    return(
        <View style={styles.container}>
          <View style={{flexDirection:'row',marginTop:20, padding:20 ,backgroundColor:'rgba(27,27,51,1)', borderRadius:20}} >
          <Text style={{fontSize:18,color:'white'}}>วิธีการเลี้ยงดูโดยทั่วไป</Text>
          </View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          <DogData />
          <CatData />
          
        </ScrollView>
        
        </View>
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

export default BasicLearningScreen;
