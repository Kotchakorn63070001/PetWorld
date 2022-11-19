import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { useNavigation,Button, useRoute } from '@react-navigation/native'

import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
// import { Button } from 'react-native-web'


const EditPetScreen = () => {
    const navigation = useNavigation();
    const route =useRoute();

    const [newPet, setNewPet] = useState([]);
    const [oldPet, setOldPet] = useState([]); 
    //image
    const [checkImage,setCheckImage] =useState(false);
    const [image,setImage] = useState(null);
    const [imagePick, setImagePick] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [namePet,setNamePet] = useState('');
   
    const [breed,setBreed] = useState('');
    const [checkBreed,setCheckBreed] = useState(false);

    const [vaccinate,setVaccinate] = useState('');
    const [checkVacc,setCheckVacc] = useState(false);
   

    const [checkNamePet,setCheckNamePet] = useState(false);

    const [newNamePet,setNewNamePet] = useState('');
    const [newBreed,setNewBreed] = useState('');
    const [newVaccinate,setNewVaccinate] = useState('');
    const [newImage,setNewImage] = useState(null);
    
    const[id,setId] = useState('');
    

    useEffect(() => {
        getPhotoPermission();
        db.collection('addPets')
        .onSnapshot(
          querySnapshot => {
            
            querySnapshot.forEach((doc) => {
              const { localUri, namePet, uid,vaccinate,breed,brithday,petGender,petType} = doc.data()
              if(route.params.id === doc.id){
                setVaccinate(vaccinate)
              }
            })
            
          }
        )
      
        
        if(namePet!== route.params.namePet){
            setNewNamePet(route.params.namePet)
            

        }
        if(breed!== route.params.breed){
            setNewBreed(route.params.breed)
            
        }
        if(vaccinate !== route.params.vaccinate){
            setNewVaccinate(route.params.vaccinate)
            
        }
        console.log(route.params.id+"----------idfrom route----------")
        console.log(id+"----------id---------")
        console.log(newVaccinate+"----------------Vaccinate New------------")
        console.log(vaccinate+"----------------Vaccinate Old------------")
        console.log(checkVacc+"------------Checkkkkkkk Vaccc---------")
        // console.log(namePet+"-----------------oldName //"+newNamePet+"-----------------NewName")
      });
      const getPhotoPermission = async () => {
        
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
            
                setCheckImage(true)
                console.log("PickImage")
                setImage(route.params.localUri)
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
                        setCheckImage(true);
                        setImage(downloadURL);
                    });
            }
        )

    }

    const handleEditPet = () => {
        
       
                db.collection('addPets').doc(route.params.id).set({
                namePet: newNamePet,
                breed: newBreed,
                vaccinate:newVaccinate,
                // breed: breed,
                // vaccinate:vaccinate,
                localUri: image,
                petType: route.params.petType,
                petGender: route.params.petGender,
                brithday:route.params.brithday,
                uid: auth.currentUser?.uid

            })
            .then((docRef) => {
                setCheckVacc(false)
                setNewVaccinate('')
                console.log("Document Update ");
                
                navigation.navigate('Profile');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    
       
        
    }
    const handleCancel = () => {
       
        setCheckImage(false);
        setCheckVacc(false);
        setCheckBreed(false);
        setCheckNamePet(false);
        // setNamePet(route.params.namePet)
        // setBreed(route.params.breed)
        // setImage(route.params.image)
        // setVaccinate(route.params.vaccinate)
        // setBreed('');
        // setNamePet('');
        // setVaccinate('');
        navigation.navigate('Profile');
    }

    


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
                <TouchableOpacity onPress={handleCancel}>
                    <Ionicons name="md-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} >
                    <Text  style={{fontWeight: '500'}}>canceled</Text>
                </TouchableOpacity>
                {/* -------Edit Pet------- */}
                
            </View>
            <View style={styles.inputContainer}>
                
                <View style={styles.card2}>
                <TouchableOpacity style={styles.photo} onPress={pickImage}>
                        <MaterialIcons name="add-photo-alternate" size={32} color="#d8d9db" />
                    </TouchableOpacity>
        
                    <View style={{marginHorizontal: 32, marginTop: 10, height: 150,marginBottom:50,alignItems: 'center'}}>
                       
                        {checkImage ? <Image source={{uri: image}} style={{width: 150, height: 150}}></Image>:
                        <Image source={{uri: route.params.localUri}} style={{width: 150, height: 150}}></Image>}
                        {/* <Image source={{uri: image}} style={{width: 150, height: 150}}></Image> */}
                    </View>
                    
        
                         
                        <View style={{flexDirection:'row',margin:5,width:270}}>
                            <Text style={styles.label}>ชื่อสัตว์เลี้ยง :</Text>
                            {/* <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:20}} value={namePet} onChangeText={(text)=>{setNamePet(text)}}></TextInput> */}
                            
                           

                            

                            {checkNamePet? <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:20}} value={newNamePet} onChangeText={(text)=>{setNewNamePet(text)}}></TextInput>:
                            <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:20}} value={newNamePet} onChangeText={(text)=>{

                                setCheckNamePet(true),setNewNamePet(route.params.namePet),setNamePet(route.params.namePet)
                                }}></TextInput>}


                            {/* {checkNamePet?
                                <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:20}} value={newNamePet} onChangeText={(text)=>{
                                    setCheckNamePet(false),setNewNamePet(route.params.namePet),setNamePet(route.params.namePet)
                                }}></TextInput> :
                            
                                <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:20}} value={newNamePet} onChangeText={(text)=>{setNewNamePet(text)}}></TextInput>} */}
                           
                        </View>
                        {/* <View style={{alignItems:'center'}}>
                        <Text >{namePetError}</Text></View> */}
                        
                        <View style={{flexDirection:'row',margin:5,width:250}}>
                            <Text style={styles.label}>พันธ์สัตว์เลี้ยง :</Text>

                            {/* <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:10}} value={breed} onChangeText={(text)=>{setBreed(text)}}></TextInput> */}
                            {checkBreed? <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:10}} value={newBreed} onChangeText={(text)=>{setNewBreed(text)}}></TextInput>:
                            
                            <TextInput style={{width:"50%",height:20,borderWidth: 1,borderRadius:10}} value={newBreed} onChangeText={(text)=>{
                                setBreed(route.params.breed),setCheckBreed(true),setNewBreed(route.params.breed)}}>
                                    </TextInput>}
                             
                        </View>
                        <View style={{margin:5}}>
                        <Text style={styles.label}>ประวัติการฉีดวัคซีน  :</Text>
                            <ScrollView>
                        
                            
                            {/* <TextInput style={{width:"95%",height:100,borderWidth: 1,borderRadius:10}} 
                                multiline={true}
                                value={vaccinate} onChangeText={(text)=>{setVaccinate(text)}}>
                                
                            </TextInput> */}

                                {checkVacc? 
                                    <TextInput style={{width:"95%",height:100,borderWidth: 1,borderRadius:10}} multiline={true}
                                    value={newVaccinate} onChangeText={(text)=>{setNewVaccinate(text)}}></TextInput>:
                            
                                    <TextInput style={{width:"95%",height:100,borderWidth: 1,borderRadius:10}} value={newVaccinate} onChangeText={(text)=>{
                                        setCheckVacc(true),setVaccinate(route.params.vaccinate)
                                        setNewVaccinate(route.params.vaccinate)}}>
                                    </TextInput>}
                             </ScrollView>
                        </View>
                       
                    
                    {/* <Image source={{uri:""}}/> */}


                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn}>
                            <Text onPress={handleEditPet}>Save Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

        
            
        </SafeAreaView>
    )
}

export default EditPetScreen

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
        flexDirection: 'column',
    },
    textInput: {
        height: 20,
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
        width:"50%"
    },
    textInputMultiline: {
        height: 80,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d8d9db',
        width:"97%"
        
    },
    label: {
        fontWeight: '400',
        fontSize: 16,
        justifyContent: 'space-between',
        alignItems:'center',
        marginRight:5
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 16
    },
   
    card2:{
        width: 300,
        maxWidth: "80%",
        // alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        padding: 20,
        elevation: 8,
        borderRadius: 20,
        margin:'10%',
        marginBottom:200
    },
    editProfile:{
        flexDirection: "column",
        alignItems: "center",
    },
    btn:{
        alignItems: "center",
        padding: 10,
        borderRadius:10,
        margin:10,
        borderStyle:"solid ",
        borderWidth:1
    },

})
