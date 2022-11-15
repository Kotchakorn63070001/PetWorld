import { useNavigation } from "@react-navigation/native";
import React from "react"; 
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CreateFindMyPetScreen from "./CreateFindMyPetScreen";
import CustomButton from "../components/CustomButton";
import { auth } from "../firebase";

const FindMyPetScreen = () => {
    const navigation = useNavigation();

    // const handleSignOut = () => {
    //   auth
    //   .signOut()
    //   .then(() => {
    //     navigation.replace("SignIn");
    //   })
    // }
    return(
      <View style={styles.container}>
        <Text>This is FindMyPetScreen</Text>
        <Text>Email : { auth.currentUser?.email }</Text>
        <Text>uid: { auth.currentUser?.uid } </Text>
        {/* <CustomButton
          text="Sign Out" 
          onPress={handleSignOut}
        /> */}
        <TouchableOpacity
          style={styles.btnAddPost}>
          <Ionicons name="add-circle" size={50} color="#f57c00" onPress={() => {navigation.navigate('CreateFindMyPet')}}/>
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

export default FindMyPetScreen;