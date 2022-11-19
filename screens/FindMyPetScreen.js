import { useNavigation } from "@react-navigation/native";
import React from "react"; 
import { Button, StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import CreateFindMyPetScreen from "./CreateFindMyPetScreen";
import CustomButton from "../components/CustomButton";
import { auth , db } from "../firebase";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


const FindMyPetScreen = () => {
    const navigation = useNavigation();
    const [postsFindMyPet, setPostsFindMyPet] = useState([]);
    
    useEffect(() => {
      db.collection('postFindMyPets')
      .orderBy("timestamp", "desc")
      .onSnapshot(
        querySnapshot => {
          const posts = [];
          querySnapshot.forEach((doc) => {
            const {breed, contact, detail, localUri, location, namePet, petType, timestamp, uid} = doc.data()
            posts.push({
              id: doc.id,
              namePet,
              petType,
              breed,
              location,
              detail,
              contact,
              localUri,
              timestamp,
              uid
            })
          })
          setPostsFindMyPet(posts) 
        }
      )
    }, []);

    // const getPost = () => {
    //   console.log(postsFindMyPet)
    // }
    
    // const editPost = (postId) => {
    //   console.log('postId : ', postId)
    //   navigation.navigate('EditFindMyPost', {
    //     postId: postId
    //   });
    // }

    const deletePost = (postId) => {
      console.log('postId : ', postId)
      Alert.alert(
        "ลบโพสต์",
        "คุณแน่ใจหรือว่าต้องการลบโพสต์นี้?",
        [
          {
            text: 'ยกเลิก',
            style: "cancel",
            onPress: () => console.log("cancel delete post")
          },
          {
            text: 'ลบ',
            onPress: () => {
              db.collection('postFindMyPets')
              .doc(postId)
              .delete()
              .then((res) => {
                console.log("The post was deleted!! Pls check your DB!!")
              })
            },
          }
        ]
      )
      
      
    }

    const detailPost = (postId) => {
      console.log('postId : ', postId)
      navigation.navigate('DetailFindMyPet', {
        postId: postId
      });
    }

    return(
      <View style={styles.container}>
        {/* <Pressable onPress={getPost}>
          <Text>Get post</Text>
        </Pressable> */}
        <ScrollView>
          <View>
            {postsFindMyPet.map((post, index) => {
              return(
                <View style={styles.postItem} key={index}>
                  <Image source={{uri: post.localUri}} style={styles.picPet}/>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'col', justifyContent: 'space-between', }}>
                      <Text style={styles.title}>ตามหา{post.petType}หาย</Text>
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>ชื่อ :</Text> {post.namePet}</Text>
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>พันธุ์ :</Text> {post.breed}</Text>
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>รายละเอียด :</Text> {post.detail}</Text>
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>สถานที่พบล่าสุด :</Text> {post.location}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, alignSelf: 'flex-end', }}>
                        
                        {/* {post.uid == auth.currentUser?.uid ? 
                          <Pressable style={styles.edit} onPress={() => editPost(post.id)}>
                            <Text style={styles.textBtn}>แก้ไข</Text>
                          </Pressable> 
                          :
                          <View></View>
                        } */}
                        {post.uid == auth.currentUser?.uid ?
                          <Pressable style={styles.delete} onPress={() => deletePost(post.id)}>
                            <Text style={styles.textBtn}>ลบ</Text>
                          </Pressable>
                          :
                          <View></View>
                        }

                        {post.uid == auth.currentUser?.uid ?
                          <Pressable style={styles.contact} onPress={() => detailPost(post.id)}>
                            <Text style={styles.textBtn}>ดูโพสต์ของฉัน</Text>
                          </Pressable>
                        :
                        <View></View>
                        }

                        {post.uid != auth.currentUser?.uid ?
                          <Pressable style={styles.contact} onPress={() => detailPost(post.id)}>
                            <Text style={styles.textBtn}>ติดต่อเจ้าของ</Text>
                          </Pressable>
                        :
                        <View></View>
                        }

                        
                      </View>
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
    backgroundColor: '#B2D0E4',
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
  title:{
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 15,
  },
  // edit: {
  //   width: 50,
  //   padding: 5,
  //   borderRadius: 10,
  //   marginTop: 8,
  //   marginBottom: 0,
  //   backgroundColor: '#FFDB58'
  // },
  delete: {
    width: 50,
    padding: 5,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 0,
    backgroundColor: '#FF8858',
    marginHorizontal: 3
  },
  contact: {
    backgroundColor: '#587CFF',
    padding: 5,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 0,
  },
  textBtn: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  }
});

export default FindMyPetScreen;