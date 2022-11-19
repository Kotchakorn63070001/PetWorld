import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
const PoodleScreen = () => {

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
                    <Image source={require("../../assets/Poodle.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Poodle (พุดเดิ้ล)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      ถิ่นกำเนิดของน้องหมาสายพันธุ์พุดเดิ้ลมาจากประเทศเยอรมันนีและฝรั่งเศส แต่ด้วยความน่ารักของขนที่หยิกสั้นปุกปุยและมีขนาดตัวที่ไม่ได้ใหญ่มาก รวมไปถึงความฉลาดและความขี้อ้อนที่จะทำให้คุณตกหลุมรักจนถอนตัวแทบไม่ขึ้น จึงทำให้คนทั่วโลกและคนไทยนิยมเลี้ยงกันเป็นจำนวนมากตั้งแต่ในอดีตจนถึงปัจจุบัน </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      พุดเดิ้ลเป็นสายพันธุ์ที่อาจจะเห่าบ่อย แต่ฉลาด สอนง่าย น่ารัก และขี้อ้อน ไม่ควรปล่อยให้ออกนอกบ้านได้อย่างอิสระ เพราะพุดเดิ้ลอาจโดนหมาตัวอื่นเข้ามาทำร้ายได้</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      การดูแลรักษาความสะอาดเป็นเรื่องที่ควรใส่ใจเป็นอย่างมากโดยเฉพาะเรื่องหู เพราะพุดเดิ้ล มีใบหูที่ใหญ่ หนา ห้อยปรกลงมา ดังนั้นจึงต้องหมั่นสำรวจดูใบหูบ่อยๆ แล้วใช้สำลีเช็ดทำความสะอาดให้หมดจด ซึ่งจะดีมากหากจะหยอดน้ำยาเช็ดหูเข้าไปก่อนประมาณ 5 นาทีเพื่อทำให้สิ่งสกปรกอ่อนตัว และง่ายในการเช็ดออกมา แต่ระวังอย่าแหย่สำลีลึกจนเกินไป เพราะอาจจะเป็นอันตรายต่อหูชั้นในได้</Text>
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

export default  PoodleScreen;
