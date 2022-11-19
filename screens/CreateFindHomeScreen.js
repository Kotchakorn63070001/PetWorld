import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput ,Platform,Alert,ScrollView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
// import React from 'react'
import { Ionicons,MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'


const CreateFindHomeScreen = () => {
    const navigation = useNavigation();


    const [namePet,setNamePet] = useState('');
    const [namePetError,setNamePetError] = useState('');
    const [breed,setBreed] = useState('');
    const [breedError,setBreedError] = useState('');
    const [detail,setDetail] = useState('');
    const [detailError, setDetailError] = useState('');
    const [image, setImage] = useState(null);
    // const [uploading, setUploading] = useState(false);
    const [type, setType] = useState('');
    const [isDog, setIsDog] = React.useState(true);
    const [isCat, setIsCat] = React.useState(false);
    const [sex, setSex] = useState('');
    const [isMale, setIsMale] = React.useState(true);
    const [isFemale, setIsFemale] = React.useState(false);
    const [contactLine, setContactLine] = useState('');
    const [contactTel, setContactTel] = useState('');
    const [contactError, setContactError] = useState('');

    useEffect(() => {
        getPhotoPermission();
        if (isDog == true){
            setType('หมา')
            // console.log(type)
        }else{
            setType('แมว')
            // console.log(type)
        }
        if(isMale == true){
            setSex('ผู้')
        }
        else{
            setSex('เมีย')
        }
        // console.log('---------------------------หมาหรือแมว : '+type+'----------------------')
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
        // setUploading(true)
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
  

   
    const namePetValidator = () =>{
        if(namePet==""){
            setNamePetError("กรุณาใส่ชื่อ")
        }
        else{
            setNamePetError('')
        }
        
    }
    const breedValidator =() => {
        if(breed==""){
            setBreedError('กรุณาใส่พันธุ์')
        }
        else {
            setBreedError('')
        }
    }
    const detailValidator =()=>{
        
        if(detail==""){
            setDetailError("กรุณาใส่รายละเอียด")
        }
        else{   
            setDetailError('')
        }
    }
    const contactValidator = () => {
        if (contactLine == "" || contactTel == ""){
            setContactError("กรุณาใส่ช่องทางการติดต่อ")
        }
        else{
            setContactError('')
        }
    }


    const handlePost = () => {
        if(namePet==""){
            setNamePetError("กรุณาใส่ชื่อ")
        }
        else if(breed==""){
            setBreedError('กรุณาใส่พันธุ์')
        }
        else if(detail==""){
            setDetailError("กรุณาใส่รายละเอียด")
        }
        else if(contactLine=="" || contactTel==""){
            setContactError('กรุณาใส่ช่องทางการติดต่อ')
        }
        else{
            setNamePetError('')
            setBreedError('')
            setDetailError('')
            setContactError('')
        db.collection('postHelpFindHome').add({
            namePet: namePet.trim(),
            petType: type,
            breed: breed.trim(),
            sex: sex,
            detail: detail.trim(),
            contactLine: contactLine.trim(),
            contactTel: contactTel.trim(),
            localUri: image,
            timestamp: Date.now(),
            uid: auth.currentUser?.uid
        })
        .then((docRef) => {
           
            
            console.log("Document written with ID: ", docRef.id);
            navigation.goBack();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        }
    }
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} >
                <Ionicons name="md-arrow-back" size={24} color="black" />
            </Pressable>
            <Pressable 
                    onPress={handlePost} 
                    style={{
                        borderRadius: 15,
                        backgroundColor: "#f57c00",
                        shadowColor: '#f57c00',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: .4,
                        shadowRadius: 8,
                        padding: 2,
                        width: 55,
                        alignItems: 'center'
                    }}>
                    <Text style={{fontWeight: '500', fontSize: 16, color: 'white'}}>โพสต์</Text>
            </Pressable>
        </View >

        <ScrollView>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>ชื่อสัตว์เลี้ยง :</Text>
                <TextInput 
                placeholder="หากไม่มีกรุณาใส่ - "
                 autoFocus={true} 
                    style={styles.textInput}
                    onBlur={()=>namePetValidator()}
                    onChangeText={text => setNamePet(text)}
                    value={namePet}>
                </TextInput>
                <Text style={{color:'red',size:16,}}>{namePetError}</Text>
                <Text style={styles.label}>ประเภทสัตว์เลี้ยง :</Text>
                    <View style={{marginVertical: 12, marginLeft: 10}}>
                        <Pressable style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                              onPress={() => {setIsDog(isDog => !isDog); setIsCat(isCat=> !isCat) } }>
                            {isDog ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> หมา</Text>
                        </Pressable>
                        <Pressable style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                            onPress={() => {setIsCat(isCat=>!isCat); setIsDog(isDog=>!isDog)}}>
                            {isCat ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> แมว</Text>
                        </Pressable>
                    </View>


        <Text style={styles.label}>พันธุ์สัตว์เลี้ยง :</Text>
                <TextInput 
                placeholder="หากไม่ทราบกรุณาใส่ - "
                    style={styles.textInput}
                    onBlur={()=>breedValidator()}
                    onChangeText={text => setBreed(text)}
                    value={breed}>
                </TextInput>   
                <Text style={{color:'red',size:16,}}>{breedError}</Text>


                <Text style={styles.label}>เพศ:</Text>
                    <View style={{marginVertical: 12, marginLeft: 10}}>
                        <Pressable style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                              onPress={() => {setIsMale(isMale => !isMale); setIsFemale(isFemale=> !isFemale) } }>
                            {isMale ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> ผู้</Text>
                        </Pressable>
                        <Pressable style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                            onPress={() => {setIsFemale(isFemale=>!isFemale); setIsMale(isMale=>!isMale)}}>
                            {isFemale ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}> เมีย</Text>
                        </Pressable>
                    </View>
                    
        <Text style={styles.label}>รายละเอียดเพิ่มเติม : </Text>
                <TextInput 
                    multiline={true} 
                    numberOfLines={4} 
                    style={styles.textInputMultiline}
                    placeholder="เช่น อายุ โรคประจำตัว "
                    onBlur={()=>detailValidator()}
                    onChangeText={text => setDetail(text)}
                    value={detail}>
                </TextInput>
            <Text style={{color:'red',size:16,}}>{detailError}</Text>
            <Text style={styles.label}>ช่องทางการติดต่อ :</Text>
                <View style={styles.contact}>
                    <FontAwesome5 name="line" size={36} color="black" style={{marginTop: 12, marginLeft: 12}}/>
                    <TextInput
                        style={styles.textInputContact}
                        placeholder="หากไม่มีกรุณาใส่ - "
                        onBlur={() => contactValidator()}
                        onChangeText={text => setContactLine(text)}
                        value={contactLine}>
                    </TextInput>
                </View>
                <View style={styles.contact}>
                    <FontAwesome5 name="phone-alt" size={32} color="black" style={{marginTop: 12, marginLeft: 12}}/>
                    <TextInput
                        style={styles.textInputContact}
                        placeholder="หากไม่มีกรุณาใส่ - "
                        onBlur={() => contactValidator()}
                        onChangeText={text => setContactTel(text)}
                        value={contactTel}
                        keyboardType='phone-pad'>
                    </TextInput>
                </View>
                <Text style={{color:'red',size:16,}}>{contactError}</Text>
           
          
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.label}>รูปภาพสัตว์เลี้ยงของคุณ :</Text>
                        <Pressable style={styles.photo} onPress={pickImage}>
                            <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                        </Pressable>
                    </View>
          

            <View style={{ marginTop: 10, height: '100%', width: '100%', marginHorizontal: 13}}>
                <Image source={{uri: image}} style={{width: 300, height: 300,borderRadius: 10}}></Image>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )

}
export default CreateFindHomeScreen;

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
    label: {
        fontWeight: '400',
        fontSize: 16,
    },
    textInputMultiline: {
        height: 150,
        // width:"93%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        
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
    contact: {
        flexDirection: 'row',
        borderColor: '#d8d9db',
        // paddingBottom: 10,
    },
    textInputContact:{
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
    }
})
