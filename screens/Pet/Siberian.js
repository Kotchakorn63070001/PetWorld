import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const SaiberianScreen = () => {

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
                    <Image source={require("../../assets/Siberian.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Siberian Husky (ไซบีเรียน ฮัสกี้)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      ไซบีเรียนฮัสกีเป็นสุนัขที่ได้รับการสืบสายพันธุ์มาจากสุนัขลากเลื่อนในเขตหนาว ดังนั้นสิ่งที่ติดตัวสุนัขพันธุ์นี้คือความแข็งแรงและการทนความหนาวได้แบบสุดขั้ว โดยรูปร่างลักษณะของสุนัขจะมีขนที่ยาวแน่นหนา ทั้งนี้สีของขนตรงบริเวณรอบดวงตา ท้อง ขา และหน้า จะเป็นสีขาว อีกทั้งดวงตาจะมีสี น้ำตาลอ่อน เหลือง น้ำตาลเข้ม หรือฟ้า</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ไซบีเรียน ฮัสกี้มีการเคลื่อนไหวที่คล่องตัว และประสาทหูที่ดีเยี่ยม ฉลาด เจ้าเล่ห์ แต่การฝึกเจ้าหมาพันธุ์นี้ไม่ได้ง่ายนัก ด้วยธรรมชาติของมันที่จะชอบอยู่รวมกันเป็นฝูง และรับฟังแต่จ่าฝูงเท่านั้น แถมมีนิสัยเบื่อง่ายด้วย</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ไซบีเรียนต้องการการออกกำลังกายที่สม่ำเสมอ สำหรับบ้านที่มีพื้นที่จำกัด อย่างน้อยควรมีลู่วิ่ง อุปกรณ์ฝึกสุนัขที่ใช้พละกำลัง หรือจะพาไปว่ายน้ำ 1 ครั้งต่อสัปดาห์ก็ได้ และหมั่นแปรงขนอาทิตย์ละครั้งอยู่เสมอ และที่สำคัญเวลาพวกมันเปียกน้ำหรือตากฝน ควรอาบน้ำและเป่าให้แห้ง ป้องกันเชื้อราเกาะตามผิวหนัง ซึ่งนำไปสู่ปัญหาสุขภาพที่ร้ายแรงได้</Text>
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

export default  SaiberianScreen;
