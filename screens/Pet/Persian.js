import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const PersianScreen = () => {

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
                    <Image source={require("../../assets/persian.png")} style={styles.picPet}/>
                      <Text style={styles.title}>Persian (เปอร์เซีย)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวเปอร์เซียเป็นแมวขนฟู นุ่มหนา มันวาว ถือเป็นหนึ่งในสายพันธุ์แมวที่ขนสวยที่สุด หน้ากลม กระดูกใหญ่และแข็งแรง แตกต่างจากแมวไทยอย่างเห็นได้ชัด ด้วยลักษณะของเครื่องหน้าที่มีหน้าผากโหนก หน้าแบน แก้มแน่น ตาแป๋ว กลมโต และมีจุดเด่นที่จมูกหัก สามารถสังเกตได้จากด้านข้างอย่างชัดเจน</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เป็นมิตร เข้ากับคนได้ง่าย ขี้อ้อน มีไหวพริบดี รักสงบ ชอบชีวิตเรียบง่าย ไม่ชอบเสียงดัง</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ต้องใส่ใจในเรื่องการดูแลขนเป็นพิเศษ หมั่นแปรงขนเป็นประจำทุกวัน แปรงเน้นๆในจุดที่แมวไม่สามารถเอื้อมถึงได้เอง เพื่อป้องกันขนพันกัน การเพาะเชื้อของเชื้อโรคต่างๆ เช่น เชื้อราแมว อาบน้ำเดือนละหนึ่งครั้ง และเหมาะสำหรับเลี้ยงในระบบปิด ต้องดูแลสุขภาพดวงตาของแมวให้ดี หมั่นเช็ดคราบตาให้สะอาดเพราะจะมีน้ำตาไหลเยอะกว่าแมวพันธุ์อื่น รวมถึงปัญหาสุขภาพตา เช่น เชอร์รี่อาย และหนังตาม้วน เป็นต้น </Text>
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

export default  PersianScreen;
