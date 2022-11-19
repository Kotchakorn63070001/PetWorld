import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

import * as ImagePicker from 'expo-image-picker'
import { useNavigation,Button } from '@react-navigation/native'

import { auth } from '../firebase'
import { db } from '../firebase'
import firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler'
// import { Button } from 'react-native-web'


const ProfileScreen = () => {
    const navigation = useNavigation();

    const [addMyPet, setAddMyPet] = useState([]);
    const [user,setUser] = useState([]);
    const [image,setImage] = useState(null);
    const [checkImage,setCheckImage] =useState(false);
    const[tst,setTst] =useState();
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');


    useEffect(() => {

        db.collection('addPets')
        .onSnapshot(
          querySnapshot => {
            const pets = [];
            querySnapshot.forEach((doc) => {
              const { localUri, namePet, uid,vaccinate,breed,brithday,petGender,petType} = doc.data()
              if(uid === auth.currentUser?.uid){
                pets.push({
                    id: doc.id,
                    namePet,
                    localUri,
                    uid,
                    vaccinate,
                    breed,
                    brithday,
                    petGender,
                    petType
                })
              }
             
            })
            setAddMyPet(pets)
          }
        ),
        db.collection('user')
        
        .onSnapshot(
           
          querySnapshot => {
            const u = []; 
            console.log("User DB")
            querySnapshot.forEach((doc) => {
              const { localUri,fname,lname,uid} = doc.data()
              if(uid === auth.currentUser?.uid){
                u.push({
                    id: doc.id,
                    localUri,
                    uid,
                    fname,
                    lname,
                    
                })
                
                setImage(localUri)
                setfName(fname)
                setlName(lname)
              } 
            })
            
          }
          
        )
        // if((user[0].localUri==null || user[0].localUri==undefined) && checkImage==false&&(user!==null||user!== undefined)){
        //     setImage("https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png")
        //   }
        // if((user[0].localUri!==null || user[0].localUri!==undefined)&&(user!==null||user!== undefined)){
        //     setImage(user[0].localUri)
        //     setCheckImage(true)
        //   }
        // else{
        //     setImage("https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png")
        // }
        
      }, []);

    const deletePet=(id,namePet)=>{
        Alert.alert(
            "Delete",
            "คุณแน่ใจหรือว่าต้องการลบ"+namePet+"?",
            [
              {
                text: 'ยกเลิก',
                onPress: () => console.log("cancel delete Pet")
              },
              {
                text: 'ลบ',
                onPress: () => {
                  db.collection('addPets')
                  .doc(id)
                  .delete()
                  .then((res) => {
                    console.log("The post was deleted!! Pls check your DB!!")
                  })
                },
              }
            ]
          )
          
        }  


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('FindMyPet')}>
                    <Ionicons name="md-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.card}>
                    <View style={styles.image}>
                        {(image!==null) ? <Image source={{uri:image}} style={{width:100,height:100,borderRadius:"100%"}}></Image>:
                        <Image source={{uri:"https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"}} style={{width:100,height:100,borderRadius:"100%"}}></Image>}
                        {/* <Image source={{uri:image}}></Image> */}
                        <Text style={{fontWeight: '400',fontSize: 16,alignItems:'center',marginTop:10,marginLeft:20}}>{fname+" "+lname}</Text>
                    </View>
                    
                    <View style={styles.editProfile}>
                        <Image></Image>
                        <Text>{addMyPet.length}</Text>
                        <Text style={styles.label}>สัตว์เลี้ยง</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text onPress={() => {navigation.navigate('EditProfile',{uid:auth.currentUser?.uid})}}>แก้ไขโปรไฟล์</Text>
                        </TouchableOpacity>
                    </View>
                     
                </View>
                <View style={styles.card2}>
                
                    <View style={styles.pets}>
                        <ScrollView horizontal={true}>
                        {addMyPet.map((pets) => {
                            // console.log(pets.namePet+"------------------------name ");
                            // console.log(pets.localUri+"------------------------image ");
                            // console.log(pets.id+"------------------------id ");
                            return(
                                <View  key={pets.id}  style={styles.card3}>
                                   
                                    <Image source={{uri:pets.localUri}} style={styles.photo} />
                                    
                                    <Text style={styles.label} onPress={()=>navigation.navigate('DetailPet',{id:pets.id})}>{pets.namePet}
                                    
                                        <TouchableOpacity onPress={() => navigation.navigate('EditPet',{id:pets.id,localUri:pets.localUri,breed:pets.breed,vaccinate:pets.vaccinate,namePet:pets.namePet,brithday:pets.brithday,petGender:pets.petGender,petType:pets.petType})} >
                                            <Ionicons name="ios-create-outline" size={16} color="black" />
                                        </TouchableOpacity>
                                        <TouchableOpacity  onPress={()=>{
                                            deletePet(pets.id,pets.namePet)  
                                        }}>
                                            <Ionicons name="ios-trash-outline" size={16} color="black" />
                                        </TouchableOpacity>
                                    </Text>
                                </View>
                       
                            );
                        })}</ScrollView>
                    </View>
                    {/* <Image source={{uri:""}}/> */}


                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn}>
                            <Text onPress={() => {navigation.navigate('CreatePet')}}>เพิ่มสัตว์เลี้ยง</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>

        
            
        </SafeAreaView>
    )
}

export default ProfileScreen

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
        // justifyContent: 'space-between',
        alignItems:'center'
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 10,
        // marginRight: 16
    },
    card:{
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        padding: 20,
        elevation: 8,
        borderRadius: 20,
        margin:20,
        flexDirection: "row"
    },
    card2:{
        minHeight:"30%",
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
        margin:20,
        alignItems:'center'
    },
    card3:{
        // width: 120,
        maxWidth: "100%",
        // alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        padding: 5,
        elevation: 8,
        borderRadius: 20,
        margin:10,
        alignItems:'center',
        marginBottom:30
        
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
    pets:{
        flexDirection: "row",
    }

})
