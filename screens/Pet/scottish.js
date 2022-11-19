import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const ScottishScreen = () => {

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
                    <Image source={require("../../assets/scottish.png")} style={styles.picPet}/>
                      <Text style={styles.title}>Scottish Fold (สก็อตติช โฟลด์)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      เป็นแมวที่ตัวกลม หัวกลม ช่วงลำคอสั้น ดวงตากลมใหญ่ หูพับ จมูกโค้งกว้างรับกับดวงตา และปากโค้งรับกับคางพอดีเป๊ะ เหมือนกำลังยิ้มอยู่ตลอดเวลา ส่วนขนของเจ้าเหมียวนั้น มีอยู่ด้วยกัน 2 แบบ คือ ขนสั้นนุ่มแน่น กับ แบบขนยาว ซึ่งมีทั้งแบบยาวปานกลาง แบบมีขนยาวที่ปลายเท้า ปลายหาง และปลายหู</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เป็นแมวขี้เหงา อยากอยู่ติดกับเจ้าของตลอดเวลา อ่อนไหวง่ายและชอบแสดงอารมณ์ออกมาให้ผู้เลี้ยงได้รับรู้ ไม่ค่อยส่งเสียงดังสักเท่าไหร่ และมีเอกลักษณ์เฉพาะตัวอยู่ที่ท่านอนหงายแผ่หลาบนพื้น </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ถ้าขนสั้น แค่แปรงขนให้สัปดาห์ละ 1 ครั้ง หมั่นทำความสะอาดเอาขนที่ร่วงออกมา แต่ถ้าขนยาวอาจจะต้องแปรงบ่อยขึ้น สัปดาห์ละ 2-3 ครั้ง ไม่ต้องอาบน้ำบ่อย ดูแลฟัน ตัดเล็บ เช็ดทำความสะอาดรอบดวงตาให้น้อง และอย่าลืมเช็ดทำความสะอาดบริเวณหูที่พับลงมาให้ดี เพราะอาจมีสิ่งสกปรกสะสม</Text>
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

export default  ScottishScreen;
