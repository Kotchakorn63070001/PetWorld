import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { db, auth  } from '../firebase';

const DetailFindMyPetScreen = ({route, navigation}) => {
      const {postId} = route.params;

      const [uid, setUid] = useState('');
      const [namePet, setNamePet] = useState('');
      const [petType, setPetType] = useState('');
      const [breed, setBreed] = useState('');
      const [location, setLocation] = useState('');
      const [detail, setDetail] = useState('');
      const [contactLine, setContactLine] = useState('');
      const [contactTel, setContactTel] = useState('');
      const [image, setImage] = useState(null);

      const [comment, setComment] = useState('');
      const [commentFindMyPet, setCommentFindMyPet] = useState([]);

      const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
  useEffect(() => {
    db.collection('commentFindMyPets')
    .orderBy("timestamp", "desc")
    .onSnapshot(
      querySnapshot => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const {commentDetail, postIdComment, timestamp, username, uid} = doc.data()
          comments.push({
            id: doc.id,
            commentDetail,
            postIdComment,
            timestamp,
            username,
            uid
          })
        })
        setCommentFindMyPet(comments)
      }
    )

    db.collection('postFindMyPets')
        .doc(postId)
        .get()
        .then((doc) => {
            if (doc.exists){
                const post = doc.data();
                setUid(post.uid)
                setNamePet(post.namePet)
                setPetType(post.petType)
                setBreed(post.breed)
                setLocation(post.location)
                setDetail(post.detail)
                if (post.contactLine == ""){
                  setContactLine('-')
                } else{
                  setContactLine(post.contactLine)
                }
                if (post.contactTel == ""){
                  setContactTel('-')
                } else{
                  setContactTel(post.contactTel)
                }
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
    const username = auth.currentUser?.email.slice(index, auth.currentUser?.email.length())
    db.collection('commentFindMyPets').add({
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
          <Image source={{uri: image}} style={styles.picPet}/>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'col', justifyContent: 'space-between', }}>
                <Text style={styles.title}>ตามหา{petType}หาย</Text>
                <Text style={styles.text}><Text style={{fontWeight: '500'}}>ชื่อ :</Text> {namePet}</Text>
                <Text style={styles.text}><Text style={{fontWeight: '500'}}>พันธุ์ :</Text> {breed}</Text>
                <Text style={styles.text}><Text style={{fontWeight: '500'}}>รายละเอียด :</Text> {detail}</Text>
                <Text style={styles.text}><Text style={{fontWeight: '500'}}>สถานที่พบล่าสุด :</Text> {location}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5 name="line" size={24} color="black" style={{marginTop: 5,}}/>
                  <Text style={styles.text}> : {contactLine}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5 name="phone-alt" size={20} color="black" style={{marginTop: 5,}}/>
                  <Text style={styles.text}> : {contactTel}</Text>
                </View>
              </View>
            </View>
        </View>
        
        <View>
            {commentFindMyPet.map((comment, index) => {
              if (comment.postIdComment == postId){
                return(
                  <View style={styles.commentItem} key={index}>
                    <Image source={require("../assets/avatar.png")} style={styles.avatar}/>
                    <View style={{flex: 1}}>
                      <View style={{flexDirection: 'col', justifyContent: 'space-between', }}>
                        <Text style={styles.username}> {comment.username}</Text>
                        <Text style={styles.text}> {comment.commentDetail}</Text>
                       </View>
                    </View>
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
          placeholder="แจ้งเบาะแส"
          onChangeText={text => setComment(text)}
          value={comment}>
        </TextInput>
        <Pressable 
          style={styles.btnSend} 
          onPress={sendComment} 
          disabled={false} 
          // activeOpacity={disabled ? 1 : 0.7}
        >
          <Text>ตอบกลับ</Text>
        </Pressable>
      </View>
      {/* </View> */}

    </SafeAreaView>

  )
}

export default DetailFindMyPetScreen

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
    backgroundColor: '#B2D0E4',
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center'
  }
})