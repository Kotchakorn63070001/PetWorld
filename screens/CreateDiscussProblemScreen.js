import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import React from 'react'
import { Ionicons,MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'

const CreateDiscussProblemScreen = () => {
    const navigation = useNavigation();

    // const [title, setTitle] = useState('');
    const [detaildiscuss, setDetailDiscuss] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [type, setType] = useState('');
    const [isDog, setIsDog] = React.useState(true);
    const [isCat, setIsCat] = React.useState(false);
    useEffect(() => {
        getPhotoPermission();
        if (isDog == true){
            setType('หมา')
            console.log(type)
        }else{
            setType('แมว')
            console.log(type)
        }
        console.log('---------------------------หมาหรือแมว : '+type+'----------------------')
      });

      const getPhotoPermission = async () => {
        // if (Constants.platform.ios) {
        //     const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        //     if (status != 'granted'){
        //         alert("We need permission to access your camera roll");
        //     }
        // }
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status != 'granted'){
            alert("We need permission to access your camera roll");
        }
    }
    const handlePost = () => {
        db.collection('postDiscussProblem').add({
            petType: type,
            detaildiscuss: detaildiscuss.trim(),
            localUri: image,
            timestamp: Date.now(),
            uid: auth.currentUser?.uid
        })
        .then((docRef) => {
            setType('');
            setDetailDiscuss('');
            setImage(null);
            console.log("Document written with ID: ", docRef.id);
            navigation.goBack();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
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
                        setImage(downloadURL)
                    });
            }
        )

    }
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Ionicons name="md-arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePost}>
                <Text style={{fontWeight: '500'}}>Post</Text>
            </TouchableOpacity>
        </View>


        
    <ScrollView>
        <View style={styles.inputContainer}>
            <Image source={require("../assets/avatar.png")} style={styles.avatar}></Image>
            <TextInput autoFocus={true} 
            multiline={true}
             numberOfLines={4}
             style={styles.textInputMultiline}
             placeholder="รายละเอียด"
            onChangeText={text => setDetailDiscuss(text)}
            value={detaildiscuss}></TextInput>
        </View>
        
    <View style={styles.inputContainer1}>
        <Text style={styles.label}>ประเภทสัตว์เลี้ยง :</Text>
                    <View style={{marginVertical: 12, marginLeft: 10}}>
                        <TouchableOpacity style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                              onPress={() => {setIsDog(isDog => !isDog); setIsCat(isCat=> !isCat) } }>
                            {isDog ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> หมา</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                            onPress={() => {setIsCat(isCat=>!isCat); setIsDog(isDog=>!isDog)}}>
                            {isCat ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> แมว</Text>
                        </TouchableOpacity>
                    </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.label}>รูปภาพของคุณ :</Text>
                        <TouchableOpacity style={styles.photo} onPress={pickImage}>
                            <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                        </TouchableOpacity>
                    </View>
          

            <View style={{ marginTop: 10, height: '100%', width: '100%', marginHorizontal: 13}}>
                <Image source={{uri: image}} style={{width: 300, height: 300,borderRadius: 10}}></Image>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateDiscussProblemScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexDirection: 'row',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32,
    },
    textInputMultiline: {
        height: 150,
        width:"80%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
    },
    inputContainer1: {
        marginTop:-20,
        marginLeft:42,
        flexDirection: 'column',
    }
})
