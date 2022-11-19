import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput, ScrollView, Keyboard, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { db, auth  } from '../firebase';

const DetailDiscussProblemScreen = ({route, navigation}) => {
    const {postId} = route.params;

    const [uid, setUid] = useState('');
    const [detaildiscuss, setDetaildiscuss] = useState('');
    const [petType, setPetType] = useState('');
    const [image, setImage] = useState(null);


    const [comment, setComment] = useState('');
    const [commentDiscussProblem, setCommentDiscussProblem] = useState([]);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    
    useEffect(() => {
        db.collection('commentDiscussProblem')
        .orderBy("timestamp", "desc")
        .onSnapshot(
          querySnapshot => {
            const comments = [];
            querySnapshot.forEach((doc) => {
              const {commentDetail, postId, timestamp, username, uid} = doc.data()
              comments.push({
                id: doc.id,
                commentDetail,
                postId,
                timestamp,
                username,
                uid
              })
            })
            // console.log(comments)
            setCommentDiscussProblem(comments)
          }
        )
        // console.log(commentFindMyPet)
    
        db.collection('postDiscussProblem')
            .doc(postId)
            .get()
            .then((doc) => {
                if (doc.exists){
                    const post = doc.data();
                    setUid(post.uid)
                    setDetaildiscuss(post.detaildiscuss)
                    setPetType(post.petType)
                    setImage(post.localUri)
                }
                else{
                    console.log("Document does not exist!!");
                }
            });
    
            const keyboardDidShowListener = Keyboard.addListener(
              'keyboardDidShow',
              (e) => {
                setKeyboardVisible(true); // or some other action
                // console.log(isKeyboardVisible)
              }
            );
            const keyboardDidHideListener = Keyboard.addListener(
              'keyboardDidHide',
              () => {
                setKeyboardVisible(false); // or some other action
                // console.log(isKeyboardVisible)
              }
            );
        
            return () => {
              keyboardDidHideListener.remove();
              keyboardDidShowListener.remove();
            };
      }, []);


      const sendComment = () => {
        const index = auth.currentUser?.email.indexOf('@');
        const email = auth.currentUser?.email;
        const username = email.slice(0, index)
        db.collection('commentDiscussProblem').add({
          postId: postId,
          commentDetail: comment.trim(),
          timestamp: Date.now(),
          uid: auth.currentUser?.uid,
          username: username
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            navigation.goBack();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
      }
    
      const deleteComment = (commentId) => {
        console.log('commentId : ', commentId)
        Alert.alert(
          "ลบคอมเมนต์",
          "คุณแน่ใจหรือว่าต้องการลบคอมเมนต์นี้?",
          [
            {
              text: 'ยกเลิก',
              style: "cancel",
              onPress: () => console.log("cancel delete comment")
            },
            {
              text: 'ลบ',
              onPress: () => {
                db.collection('commentDiscussProblem')
                .doc(commentId)
                .delete()
                .then((res) => {
                  console.log("The comment was deleted!! Pls check your DB!!")
                })
              },
            }
          ]
        )
      }

    return (
        <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </Pressable>
      </View>

      <ScrollView>
        <View style={styles.postItem}>
            { image == null ? <Image source={require("../assets/logo.png")} style={styles.picPet}/> : <Image source={{uri: image}} style={styles.picPet}/>}
                  {/* <Image source={{uri: post.localUri}} style={styles.picPet}/> */}
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'col', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                    <Text style={styles.title}>ปรึกษาปัญหาน้อง{petType}</Text>
                    <Text style={styles.text}><Text style={{fontWeight: '500'}}>รายละเอียด :</Text> {detaildiscuss}</Text>
                </View>
            </View>
        </View>
        
        <View>
            {commentDiscussProblem.map((comment, index) => {
              if (comment.postId == postId){
                return(
                  <View style={styles.commentItem} key={index}>
                    <Image source={require("../assets/avatar.png")} style={styles.avatar}/>
                    <View style={{flex: 1}}>
                      <View style={{flexDirection: 'col', justifyContent: 'space-between', }}>
                        <Text style={styles.username}> {comment.username}</Text>
                        <Text style={styles.text}> {comment.commentDetail}</Text>
                      </View>
                    </View>
                    {comment.uid == auth.currentUser?.uid ? 
                        <View style={{flex: 1,flexDirection: 'column', alignItems: 'flex-end'}}>
                          <Pressable style={styles.delete} onPress={() => deleteComment(comment.id)}>
                            <Text style={styles.textBtn}>ลบ</Text>
                          </Pressable>
                        </View>
                    : 
                    <View></View>
                    }
                  </View>
                );
              }
            })}
          </View>
      </ScrollView>

      {/* <View > */}
      <View style={isKeyboardVisible ? styles.inputContainerOnTopKB : styles.inputContainer}>
        <Image source={require("../assets/avatar.png")} style={styles.avatar}></Image>
        <TextInput 
          multiline={true}
          numberOfLines={3}
          style={styles.textInputMultiline}
          placeholder="เขียนความคิดเห็น"
          onChangeText={text => setComment(text)}
          value={comment}>
        </TextInput>
        <Pressable 
          style={styles.btnSend} 
          onPress={sendComment} 
          disabled={comment == "" ? true : false} 
          // activeOpacity={disabled ? 1 : 0.7}
        >
          <Text style={{color: 'white', fontWeight: '500'}}>ตอบกลับ</Text>
        </Pressable>
      </View>
      {/* </View> */}

    </SafeAreaView>
    )
}

export default DetailDiscussProblemScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'column'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 32,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#d8d9db'
    },
    postItem: {
      backgroundColor: '#B2D0E4',
      borderRadius: 10,
      padding: 8,
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 10,
    },
    title:{
      fontSize: 18,
      fontWeight: '500',
    },
    text: {
      fontSize: 15,
    },
    username: {
      fontSize: 15,
      fontWeight: '500'
    },
    picPet:{
      width: 150,
      height: 180,
      borderRadius: 10,
      marginRight: 16
    },
    inputContainer: {
      margin: 15,
      flexDirection: 'row',
      alignItems: 'center',
      // width: '60%'
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      // marginRight: 0,
    },
    textInputMultiline: {
      // height: 100,
      width:"60%",
      height: 35,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: '#d8d9db',
    },
    btnSend:{
      borderRadius: 15,
      backgroundColor: "#f57c00",
      shadowColor: '#f57c00',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .4,
      shadowRadius: 8,
      padding: 5,
      width: 70,
      alignItems: 'center'
    },
    inputContainerOnTopKB: {
      margin: 15,
      flexDirection: 'row',
      alignItems: 'center',
      // width: '65%',
      marginBottom: '80%'
    },
    commentItem: {
      backgroundColor: '#DFDFDF',
      borderRadius: 10,
      padding: 8,
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 10,
      alignItems: 'center'
    },
    delete: {
      width: 33,
      padding: 5,
      borderRadius: 10,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: '#FF8858',
      marginHorizontal: 3
    },
    textBtn: {
      color: 'white',
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center'
    }
  })