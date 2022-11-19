import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const SiameseScreen = () => {

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
                    <Image source={require("../../assets/Siamese.png")} style={styles.picPet}/>
                      <Text style={styles.title}>Siamese Cat (วิเชียรมาศ)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      มีแต้มสีน้ำตาลเข้ม 9 จุดบนตัว ได้แก่บริเวณ ปลายเท้าทั้ง 4 ข้าง ปลายหูทั้ง 2 ข้าง ปลายหาง จมูกและที่อวัยวะเพศของเจ้าเหมียวสายพันธุ์นี้ แถมแต้มสีน้ำตาลยังเปลี่ยนสีตามฤดูกาล มีนัยน์ตาสีฟ้าเป็นประกาย และสีขนครีมอ่อนๆ</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เป็นแมวที่ฉลาด เป็นมิตรและติดคนมาก มีลักษณะนิสัยเป็นนักล่าที่ชอบกินเนื้อสัตว์ จึงสังเกตและสนใจสิ่งแวดล้อมรอบตัวเป็นพิเศษ</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แมววิเชียรมาสเป็นแมวขนสั้น สามารถเลียขน ทำความสะอาดตัวเองได้อย่างดี สามารถให้อาบน้ำเดือนละครั้งได้ เช็ดใบหู ตัดเล็บ และดูฟันให้ดี  </Text>
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

export default  SiameseScreen;
