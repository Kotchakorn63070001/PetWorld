import { useNavigation } from "@react-navigation/native";
import React from "react"; 
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CreateFindMyPetScreen from "./CreateFindMyPetScreen";
import CustomButton from "../components/CustomButton";
import { auth , db } from "../firebase";
import { useState, useEffect } from "react";


const FindMyPetScreen = () => {
    const navigation = useNavigation();
    const [postsFindMyPet, setPostsFindMyPet] = useState([]);
    
    useEffect(() => {
      db.collection('postFindMyPets')
      .onSnapshot(
        querySnapshot => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            const {breed, detail, localUri, location, namePet, petType, timestamp, uid} = doc.data()
            posts.push({
              id: doc.id,
              namePet,
              petType,
              breed,
              location,
              detail,
              localUri,
              timestamp,
              uid
            })
          })
          setPostsFindMyPet(posts) 
        }
      )
    }, );

    const getPost = () => {
      console.log(postsFindMyPet)
    }

    return(
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={getPost}>
          <Text>Get post</Text>
        </TouchableOpacity> */}
        <ScrollView>
          <>
            {postsFindMyPet.map((post, index) => {
              return(
                <View style={styles.postItem}>
                  <Image source={{uri: post.localUri}} style={styles.picPet}/>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'col', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                      <Text style={styles.title}>ตามหา{post.petType}หาย</Text>
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>ชื่อ :</Text> {post.namePet}</Text>
                      <Text style={styles.text}>พันธุ์ : {post.breed}</Text>
                      <Text style={styles.text}>รายละเอียด : {post.detail}</Text>
                      <Text style={styles.text}>สถานที่พบล่าสุด : {post.location}</Text>
                     </View>
                  </View>
                </View>
              )
            })}
          </>
        </ScrollView>
        
        <View style={styles.bottomRight}>
          <TouchableOpacity
            style={styles.btnAddPost}>
            <Ionicons name="add-circle" size={50} color="#f57c00" onPress={() => {navigation.navigate('CreateFindMyPet')}}/>
          </TouchableOpacity>
        </View>
        
        {/* <Text>This is FindMyPetScreen</Text>
        <Text>Email : { auth.currentUser?.email }</Text>
        <Text>uid: { auth.currentUser?.uid } </Text> */}
        {/* <CustomButton
          text="Sign Out" 
          onPress={handleSignOut}
        /> */}
      </View>
        
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  bottomRight: {
    flex: 1,
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
  },
  postItem: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  picPet:{
    width: 150,
    height: 180,
    borderRadius: 18,
    marginRight: 16
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 15,
  }
});

export default FindMyPetScreen;