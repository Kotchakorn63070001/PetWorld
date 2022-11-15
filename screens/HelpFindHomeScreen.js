import React from "react"; 
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HelpFindHomeScreen = () => {

  const navigation = useNavigation();
    return(
      <View>

      
        <Text>This is HelpFindHomeScreen</Text>
        <TouchableOpacity
          style={styles.btnAddPost}>
          <Ionicons name="add-circle" size={50} color="#f57c00" onPress={() => {navigation.navigate('CreateFindHome')}}/>
        </TouchableOpacity>
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

export default HelpFindHomeScreen;
