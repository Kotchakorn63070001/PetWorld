import { useNavigation } from "@react-navigation/native";
import React from "react"; 
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomButton from "../components/CustomButton";
import { auth , db } from "../firebase";
import { useState, useEffect } from "react";


const DiscussProblemScreen = () => {
    const navigation = useNavigation();
    const [postsDiscussProblem, setPostsDiscussProblem] = useState([]);
    
    useEffect(() => {
      db.collection('postDiscussProblem')
      .orderBy("timestamp", "desc")
      .onSnapshot(
        querySnapshot => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            const {detaildiscuss, localUri,  petType, timestamp, uid} = doc.data()
            posts.push({
              id: doc.id,
              petType,
              detaildiscuss,
              localUri,
              timestamp,
              uid
            })
          })
          // setPostsFindHome(posts) 
          setPostsDiscussProblem(posts)
        }
      )
    }, []);

    const getPost = () => {
      // console.log(postsFindHome)
      console.log(postsDiscussProblem)
    }

    return(
      <View style={styles.container}>
       
        <ScrollView>
          <View>
            {postsDiscussProblem.map((post) => {
              return(
                <View style={styles.postItem} key={post.id}>
                  <Image source={{uri: post.localUri}} style={styles.picPet}/>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'col', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                      <Text style={styles.title}>ปรึกษาปัญหาน้อง{post.petType}</Text>
                      
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>รายละเอียด :</Text> {post.detaildiscuss}</Text>
                     </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        
        <View style={styles.bottomRight}>
          <Pressable
            style={styles.btnAddPost}>
            <Ionicons name="add-circle" size={55} color="#FF587C" onPress={() => {navigation.navigate('CreateFindMyPet')}}/>
          </Pressable>
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
    height: 55,
    width: 50,
    marginRight: 15,
    marginBottom: 15,
    shadowColor: '#FF587C',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .4,
    shadowRadius: 8,
  },
  postItem: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  picPet:{
    width: 150,
    height: 180,
    borderRadius: 10,
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

export default DiscussProblemScreen;









