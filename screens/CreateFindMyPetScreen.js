import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const CreateFindMyPetScreen = () => {
    const navigation = useNavigation();

    const [namePet, setNamePet] = useState('');
    const [namePetError,setNamePetError] = useState('');
    const [breed, setBreed] = useState('');
    const [breedError,setBreedError] = useState('');
    const [location, setLocation] = useState('');
    const [locationError, setLocationError] = useState('');
    const [detail, setDetail] = useState('');
    const [detailError, setDetailError] = useState('');
    const [image, setImage] = useState(null);
    // const [imagePick, setImagePick] = useState(null);
    // const [uploading, setUploading] = useState(false);
    const [type, setType] = useState('');
    const [isDog, setIsDog] = React.useState(true);
    const [isCat, setIsCat] = React.useState(false);

    useEffect(() => {
        getPhotoPermission();
        if (isDog == true){
            setType('หมา')
            // console.log(type)
        }else{
            setType('แมว')
            // console.log(type)
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
    const locationValidator = () => {
        if (location == ''){
            setLocationError('กรุณาใส่สถานที่พบล่าสุด')
        }
        else{
            setLocationError('')
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

    const handlePost = () => {
        console.log('-----------------handlePost----------------------')
        if(namePet==""){
            setNamePetError("กรุณาใส่ชื่อ")
        }
        else if(breed==""){
            setBreedError('กรุณาใส่พันธุ์')
        }
        else if (location==""){
            setLocationError('กรุณาใส่สถานที่พบล่าสุด')
        }
        else if(detail==""){
            setDetailError("กรุณาใส่รายละเอียด")
        }
        else{
            setNamePetError('')
            setBreedError('')
            setDetailError('')
        }
        db.collection('postFindMyPets').add({
            namePet: namePet.trim(),
            petType: type,
            breed: breed.trim(),
            location: location.trim(),
            detail: detail.trim(),
            localUri: image,
            timestamp: Date.now(),
            uid: auth.currentUser?.uid
        })
        .then((docRef) => {
            // setNamePet('');
            // setType('');
            // setBreed('');
            // setLocation('');
            // setDetail('');
            // setImage(null);
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

    // const setDog = (dog, cat) => {
    //     console.log('----ก่อนเซตค่า---หมา: ',dog)
    //     setIsDog(!dog);
    //     setIsCat(!cat);
    //     console.log('หมาเป็นtrue: ', isDog)
    //     console.log('แมวเป็นfalse: ', isCat)
    // }
    // useEffect(() => {
    //     if (isDog == true){
    //         setType('หมา')
    //     }else{
    //         setType('แมว')
    //     }
    // }, [isDog])
    
    // const setCat = (cat, dog) => {
    //     console.log('----ก่อนเซตค่า---แมว: ',cat)
    //     setIsCat(!cat);
    //     setIsDog(!dog);
    //     console.log('หมาเป็นfalse: ', isDog)
    //     console.log('แมวเป็นtrue: ', isCat)
    // }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
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
            </View>

            <ScrollView>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>ชื่อสัตว์เลี้ยง :</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="หากไม่มีกรุณาใส่ - "
                    // autoFocus={true} 
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
                    style={styles.textInput}
                    placeholder="หากไม่ทราบกรุณาใส่ - "
                    onBlur={()=>breedValidator()}
                    onChangeText={text => setBreed(text)}
                    value={breed}>
                </TextInput>
                <Text style={{color:'red',size:16,}}>{breedError}</Text>
                <Text style={styles.label}>สถานที่พบล่าสุด :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="หากไม่ทราบกรุณาใส่ - "
                    onBlur={() => locationValidator()}
                    onChangeText={text => setLocation(text)}
                    value={location}>
                </TextInput>
                <Text style={{color:'red',size:16,}}>{locationError}</Text>
                <Text style={styles.label}>รายละเอียดเพิ่มเติม :</Text>
                <TextInput 
                    // autoFocus={true} 
                    multiline={true} 
                    numberOfLines={4} 
                    style={styles.textInputMultiline}
                    placeholder="เช่น ลักษณะภายนอก ปลอกคอ ป้ายชื่อ "
                    onBlur={()=>detailValidator()}
                    onChangeText={text => setDetail(text)}
                    value={detail}>
                </TextInput>
                <Text style={{color:'red',size:16,}}>{detailError}</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.label}>รูปภาพสัตว์เลี้ยงของคุณ :</Text>
                    <Pressable style={styles.photo} onPress={pickImage}>
                        <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                    </Pressable>
                </View>
        
                <View style={{marginHorizontal: 13, marginTop: 10, height: 150}}>
                    <Image source={{uri: image}} style={{width: 300, height: 300, borderRadius: 5}}></Image>
                </View>
            </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default CreateFindMyPetScreen

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
        marginTop: 32,
        flexDirection: 'column',
        marginHorizontal: 32,
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
        alignItems: 'flex-end',
        marginHorizontal: 10,
    }
})
