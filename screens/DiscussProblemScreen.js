import { useNavigation } from "@react-navigation/native";
import React from "react"; 
import { Button, StyleSheet, Text, View, Image, ScrollView,Alert } from 'react-native';
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
          
          setPostsDiscussProblem(posts)
        }
      )
    }, []);


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
              db.collection('postDiscussProblem')
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

    return(
      <View style={styles.container}>
       
        <ScrollView>
          <View>
            {postsDiscussProblem.map((post) => {
              return(
                <View style={styles.postItem} key={post.id}>
                 { post.localUri == null ? <Image source={require("../assets/logo.png")} style={styles.picPet}/> : <Image source={{uri: post.localUri}} style={styles.picPet}/>}
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'col', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                      <Text style={styles.title}>ปรึกษาปัญหาน้อง{post.petType}</Text>  
                      <Text style={styles.text}><Text style={{fontWeight: '500'}}>รายละเอียด :</Text> {post.detaildiscuss}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, alignSelf: 'flex-end', }}>
                       
                        {post.uid == auth.currentUser?.uid ?
                          <Pressable style={styles.delete} onPress={() => deletePost(post.id)}>
                            <Text style={styles.textBtn}>ลบ</Text>
                          </Pressable>
                          :
                          <View></View>
                        }

                        {post.uid != auth.currentUser?.uid ?
                          <Pressable style={styles.contact} >
                            <Text style={styles.textBtn}>แสดงความคิดเห็น</Text>
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
            <Ionicons name="add-circle" size={55} color="#FF587C" onPress={() => {navigation.navigate('CreateDiscussProblem')}}/>
          </Pressable>
        </View>
        
        
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
  },
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

export default DiscussProblemScreen;
