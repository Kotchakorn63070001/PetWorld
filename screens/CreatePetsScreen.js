import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Alert, Button, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import DatePicker from 'react-native-modern-datepicker';
import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'
import { event } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'


const CreatePetsScreen = () => {
    const navigation = useNavigation();

    const [namePet, setNamePet] = useState('');
    const [breed, setBreed] = useState('');
    const [image, setImage] = useState(null);
    const [imagePick, setImagePick] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [type,setType] = useState('');
    const [isDog, setIsDog] = React.useState(true);
    const [isCat, setIsCat] = React.useState(false)
    const [isMale, setIsMale] = React.useState(true);
    const [isFemale, setIsFemale] = React.useState(false)

    const [gender,setGender] = useState('');
    const [vaccinate,setVaccinate] = useState('');

    const [date,setDate] = useState(new Date);
    const [namePetError,setNamePetError] = useState('');
    const [breedError,setBreedError] = useState('');

  
    useEffect(() => {
        getPhotoPermission();
        if (isDog == true){
            setType('หมา')
            console.log(type)
        }if (isCat == true){
            setType('แมว')
            console.log(type)
        }
        if (isMale == true){
            setGender('เพศผู้')
           
        }if (isFemale == true){
            setGender('เพศเมีย')
            
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
    const handleAdd = () => {
        if(namePet==""){
            setNamePetError("กรุณาใส่ชื่อ")
        }
        else if(breed==""){
            setBreedError('กรุณาใส่พันธุ์')
        }
        else{
            db.collection('addPets').add({
                namePet: namePet.trim(),
                petType: type,
                breed: breed.trim(),
                petGender: gender,
                brithday:date,
                vaccinate:vaccinate.trim(),
                localUri: image,
                uid: auth.currentUser?.uid

            })
            .then((docRef) => {
                setNamePet("");
                setType("");
                setBreed("");
                setDate(new Date(''));
                // setImage(null);
                // setImagePick(null);
                setIsDog(true);
                setIsCat(false);
                setIsFemale(false);
                setIsMale(true);
                setVaccinate("");

                console.log("Document written with ID: ", docRef.id);
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
                        setImage(downloadURL)
                    });
            }
        )

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="md-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text onPress={handleAdd} style={{fontWeight: '500'}}>Add</Text>
                </TouchableOpacity>
            </View>
            {/* Detail Pet */}
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.photo} onPress={pickImage}>
                        <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                    </TouchableOpacity>
        
                    <View style={{marginHorizontal: 32, marginTop: 10, height: 150,marginBottom:50,alignItems: 'center'}} onPress={pickImage}>
                        <Image source={{uri: image}} style={{width: 150, height: 150}}></Image>
                    </View>
                    <Text style={styles.label}>ชื่อสัตว์เลี้ยง :</Text>
                    <Text style={{color:'red',size:16,}}>{namePetError}</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={text => setNamePet(text)}
                        value={namePet}>
                    </TextInput>
                    <Text style={styles.label}>ประเภทสัตว์เลี้ยง :</Text>
                    <View style={{marginVertical: 12, marginLeft: 10,flexDirection: 'row'}}>
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
                    <Text style={styles.label}>พันธุ์สัตว์เลี้ยง :</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={text => setBreed(text)}
                        value={breed}>
                    </TextInput>
                    <Text style={styles.label}>เพศ :</Text>
                    <View style={{marginVertical: 12, marginLeft: 10,flexDirection: 'row',marginBottom:30}}>
                        <TouchableOpacity style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                              onPress={() => {setIsMale(isMale => !isMale); setIsFemale(isFemale=> !isFemale) } }>
                            {isMale ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}>เพศผู้</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}
                            onPress={() => {setIsFemale(isFemale=>!isFemale); setIsMale(isMale=>!isMale)}}>
                            {isFemale ? <Ionicons name="radio-button-on-outline" size={24} color="black" />
                                   : <Ionicons name="radio-button-off-outline" size={24} color="black" />}
                            <Text style={{fontSize: 15}}>เพศเมีย</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>วันเดือนปีเกิด :</Text>
                    {/* <DatePicker onSelectedChange={date => setSelectedDate(date)} value={date}/> */}
                    {/* <Calendar onChange={onChange} value={value} /> */}
                    <DatePicker mode="date"  onDateChange={value =>setDate(value)}  value={date}/>
                    <Text style={styles.label}>ประวัติการฉีดวัคซีน :</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true} 
                        numberOfLines={4} 
                        style={styles.textInputMultiline}
                        onChangeText={text => setVaccinate(text)}
                        value={vaccinate}>
                    </TextInput>
                    
                </View>
            </ScrollView>

            
        </SafeAreaView>
    )
}

export default CreatePetsScreen

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