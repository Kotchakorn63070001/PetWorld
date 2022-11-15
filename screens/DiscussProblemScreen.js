import React from "react"; 
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DiscussProblemScreen = () => {

  const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <Text>This is DiscussProblemScreen</Text>
        <TouchableOpacity
          style={styles.btnAddPost}>
          <Ionicons name="add-circle" size={50} color="#f57c00" onPress={() => {navigation.navigate('CreateDiscussProblem')}}/>
        </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnAddPost: {
    height: 50,
    width: 50,
    marginRight: 15,
    marginBottom: 15,
    shadowColor: '#f57c00',
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    shadowOpacity: .4,
    shadowRadius: 8,
  }
});


export default DiscussProblemScreen;


