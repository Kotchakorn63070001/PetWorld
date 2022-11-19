import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Alert, Button, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { useNavigation, useRoute } from '@react-navigation/native'
import DatePicker from 'react-native-modern-datepicker';
import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'
import { event, set } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'


const EditProfile = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [errorFName,setErrorFname ] = useState('');
    const [errorLName,setErrorLname ] = useState('');
    const [image, setImage] = useState(null);
    const [imagePick, setImagePick] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [type,setType] = useState('');
    
    const [isMale, setIsMale] = React.useState(true);
    const [isFemale, setIsFemale] = React.useState(false)

    const [gender,setGender] = useState('');
    const [checkImage,setCheckImage] = useState(false);
    const [checkPassword,setCheckPassword] = useState(false);
    const[uid,setUid] = useState('');
    const [user,setUser] = useState([]);
    
    const [oldImage, setOldImage] = useState(null);
    const [checkOldImage,setCheckOldImage] = useState(false);

    
    
    


  
    useEffect(() => {
        getPhotoPermission();
        console.log(user)
        setUid(route.params.uid)
        
        // if(image==null&&oldImage!==null){
        //     setImage(oldImage)
        //     setCheckImage(true)
        //     setOldImage(null)
        // }
        db.collection('user')
        .onSnapshot(
          querySnapshot => {
            const user = [];
            querySnapshot.forEach((doc) => {
              const { localUri,fname,lname,uid} = doc.data()
              if(uid === auth.currentUser?.uid){
                user.push({
                    id: doc.id,
                    localUri,
                    uid,
                    fname,
                    lname,
                    
                })
                setfName(fname)
                setlName(lname)
                setImage(localUri)
              }
              
              
            })
            setUser(user)
          }
        )
        if(image==null&&checkImage==false){
            setImage(oldImage)
            setCheckImage(true)
            setOldImage(null)
        }
        console.log(image+"---------------checjImge EditProfile")
        
        
    }, []);
      const getPhotoPermission = async () => {
        
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status != 'granted'){
            alert("We need permission to access your camera roll");
        }
        
    }
    const handleSaveProfile = () => {

       

        if(image==null){
            setImage("https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png")
        }
        else if(fname==""){
            setErrorFname('กรุณากรอกชื่อ')
            
        }
        else if(lname==""){
            setErrorLname('กรุณากรอกชื่อ')
            
        }
        else if(user==null ||user== undefined){
            db.collection('user').add({

                localUri: image,
                fname:fname,
                lname:lname,
                uid: auth.currentUser?.uid

            })
            .then((docRef) => {
                
                console.log("Document written with ID: ", docRef.id);
                navigation.navigate('Profile');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
        else{
            db.collection('user').doc(uid).set({           
                localUri: image,
                fname:fname,
                lname:lname,
                uid: auth.currentUser?.uid
            })
            .then((docRef) => {
                
                console.log("Document written with ID: ");
                navigation.navigate('Profile');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
        
        
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.canceled){
            uploadImage(result.uri)
                .then(()=>{
                    console.log('upload image to storage success')
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    const uploadImage = async (uri) => {
        setUploading(true)
        const response = await fetch(uri)
        const blob = await response.blob();
        const path = `photos/${auth.currentUser?.uid}/${Date.now()}.jpg`
        var ref = firebase.storage().ref().child(path).put(blob);
        
        ref.on(
            'state_changed',
            (snapshot) => {},
            (err) => {
                console.log(err)
            },
            ()=>{
                ref.snapshot.ref.getDownloadURL()
                    .then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setCheckImage(true)
                        setImage(downloadURL)
                    });
            }
        )

    }
    const handelCancelEditProfile=()=>{
        setImage(user[0].localUri)
        setfName(user[0].fname)
        setlName(user[0].lname)
        navigation.navigate('Profile')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handelCancelEditProfile}>
                    <Ionicons name="md-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                {/* <TouchableOpacity >
                    <Text onPress={handleAdd} style={{fontWeight: '500'}}>Add</Text>
                </TouchableOpacity> */}
            </View>
            {/* Detail Pet */}
            <ScrollView>
                <View style={styles.inputContainer}>
                   
                    <View>
                    <TouchableOpacity style={styles.photo} onPress={pickImage}>
                        <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                    </TouchableOpacity>
        
                    <View style={{marginHorizontal: 32, marginTop: 10, height: 150,marginBottom:50,alignItems: 'center'}} onPress={pickImage}>
                        {(checkImage)?<Image source={{uri: image}} style={{width: 150, height: 150,borderRadius:"100%"}}></Image>:
                        <Image source={{uri: "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"}} style={{width: 150, height: 150,borderRadius:"100%"}}></Image>}
                        {/* <Image source={{uri: image}} style={{width: 150, height: 150}}></Image> */}
                    </View>
                    
                    
                    <TextInput 
                    placeholder='FirstName'
                        style={styles.textInput}
                        onChangeText={text => setfName(text)}
                        value={fname}>
                    </TextInput>
                    <TextInput 
                    placeholder='LastName'
                        style={styles.textInput}
                        onChangeText={text => setlName(text)}
                        value={lname}>
                    </TextInput>
                    </View>
                   
                    {/* <Text>Password:</Text>
                    <TextInput 
                    placeholder='Password'
                        style={styles.textInput}
                        onChangeText={text => setPassword(text)}
                        value={password}>
                    </TextInput>
                    <TextInput 
                    placeholder='New Password'
                        style={styles.textInput}
                        onChangeText={text => setName(text)}
                        value={name}>
                    </TextInput> */}
                    
                    {/* <TextInput 
                    placeholder='Full Name'
                        style={styles.textInput}
                        onChangeText={text => setName(text)}
                        value={name}>
                    </TextInput> */}
                    <TouchableOpacity style={{alignItems: "center",padding: 10,borderRadius:10,margin:10,borderStyle:"solid ",borderWidth:1}} onPress={handleSaveProfile}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    
                   
                </View>
            </ScrollView>

            
        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        overflow:"scroll"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d9db'
    },
    inputContainer: {
        margin: 32,
        flexDirection: 'column',

    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
    },
    textInputMultiline: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
        
    },
    label: {
        fontWeight: '400',
        fontSize: 16,
    },
    photo: {
        alignItems: 'center',
        marginHorizontal: 32,
    }

})