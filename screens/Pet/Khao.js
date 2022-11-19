import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const KhaoScreen = () => {

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
                    <Image source={require("../../assets/white.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Khao Manee (ขาวมณี)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวขาวมณีมีรูปร่างเพรียว มีกล้ามเนื้อที่ปกคลุมด้วยขนสั้นแน่นนุ่มสีขาว มีใบหูขนาดกลางถึงใหญ่ ส่วนจมูกจะเชิดเล็กน้อย จุดเด่นที่เป็นเอกลักษณ์ของสายพันธุ์นี้อยู่ที่ตา แมวขาวมณีมีตาได้หลายสี ไม่ว่าจะเป็นสีฟ้าหรือเหลืองอำพัน เหลือง หรือเขียว โดยข้างหนึ่งอาจเป็นสีฟ้า ส่วนอีกข้างอาจเป็นสีอื่นก็ได้ </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวขาวมณีเป็นแมวที่ตื่นตัว ชอบผจญภัย ชอบพูดชอบคุย ฉลาดและขี้เล่น ชอบให้มีทาสล้อมรอบตัว และชอบครางหรือทำเสียงออดอ้อน</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เนื่องจากแมวขาวมณีโดยธรรมชาติเป็นแมวที่ชอบเล่น ชอบทำกิจกรรม ทำให้การออกกำลังกายเป็นสิ่งที่จำเป็น เพื่อช่วยรักษาความสมดุลของระบบกล้ามเนื้อ ความแข็งแรงของร่างกาย </Text>
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

export default  KhaoScreen;
