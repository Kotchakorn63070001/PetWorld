import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const BritishScreen = () => {

    const navigation = useNavigation();
    return(
    
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} >
            <Ionicons name="md-arrow-back" size={24} color="black" />
        </Pressable>
        
    </View >

      <ScrollView>
            <View style={styles.postItem} >
                <View >
                    <View style={{justifyContent: 'space-between' }}>
                    <Image source={require("../../assets/British.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>British Shorthair</Text>
                      <Text style={styles.title}>(บริติช ชอร์ตแฮร์)</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      มีลำตัวกะทัดรัด แข็งแรง มีลักษณะหัวกลม รับกับใบหูขนาดเล็ก คอสั้น แก้มยุ้ย ดวงตากลมโต อกหนา ขาแข็งแรง อุ้งเท้ากลม มีหางหนา ปลายมน และมีจมูกที่ค่อนข้างสั้นเหมือนตุ๊กตา </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      มีนิสัยรักสงบ ไม่ชอบเสียงดัง ไม่มีนิสัยทำลายของ และไม่เรียกร้องความสนใจมากเกินไป  มีพลังงานสูงมากจึงชอบออกกำลังกายเป็นพิเศษ </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แปรงขนด้วยหวีโลหะซี่ห่างๆ เพียงสัปดาห์ละ 1-2 ครั้ง ตัดเล็บ เช็ดคราบน้ำตา และดูแลสุขภาพฟันให้แข็งแรง</Text>
                    </View>
                </View>
            </View>
      </ScrollView>

</SafeAreaView>

    );
}



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
    postItem: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 10,
      },
      picPet:{
        width: 250,
        height: 230,
        borderRadius: 10,
        marginTop:10,  
        marginBottom:10,
        marginLeft:55     
      },
      title:{
        fontSize: 25,
        fontWeight: '500',
        marginBottom:10,
        textAlign:'center'
      }
});

export default  BritishScreen;
