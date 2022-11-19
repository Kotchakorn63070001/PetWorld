import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const ChihuahuaScreen = () => {

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
                    <Image source={require("../../assets/chihuahua.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Chihuahua (ชิวาว่า)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      ต้นกำเนิดชิวาวานั้นมาจากประเทศเม็กซิโก ทั้งนี้รูปร่างของน้องจะมีขนาดที่ค่อนข้างเล็ก มีดวงตาที่กลมโตดำสนิท ขนาดตัวประมาณ 16-20 เซนติเมตร และมีน้ำหนักที่ไม่เกิน 2.5 – 2.7 กิโลกรัม ดังนั้นใครที่มีพื้นที่ในบ้านน้อยและค่อนข้างจำกัด น้องหมาพันธุ์ชิวาวาจะเหมาะมาก แต่อย่างไรก็ดีคุณก็อาจจะต้องใส่ใจสุนัขพันธุ์นี้ในเรื่องของสุขภาพให้ดี เพราะกรรมพันธุ์อาจทำให้น้องหมาเกิดโรคได้ </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แม้ตัวมันจะขนาดเล็กดูภายนอกสงบ ๆ อ่อนหวาน แต่แท้จริงแล้วพวกมันใจใหญ่ กล้าหาญ และเป็นสุนัขเฝ้าบ้านที่เยี่ยมยอดอีกหนึ่งสายพันธุ์เลยทีเดียว โดยชิวาว่านั้นมีนิสัย ตื่นตัว ขี้ตกใจ และเห่าเก่งมาก โดยเสียงเห่าของชิวาว่าจะมีความแหลม ก้อง ทำให้คนแปลกหน้ารู้สึกตกใจและหวาดกลัวได้ในบางครั้ง แต่ในอีกมุมน้อง ๆ เข้ากับสมาชิกในครอบครัวได้ดีมาก ด้วยนิสัยรักเจ้าของ ชอบให้เจ้าของตามใจ และคอยตามติดเจ้าของตลอดเวลา</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ชิวาว่าในช่วงโตเต็มวัยไม่ต้องการการออกกำลังมากนัก เพียงพาน้อง ๆ ไปเดินเล่น 20-30 นาทีต่อวันก็เพียงพอ โดยหลีกเลี่ยงพาน้องไปที่ลมแรง ๆ หรืออากาศหนาวจัด ซึ่งชิวาว่าเป็นสายพันธุ์ที่ไม่ถูกกับสภาพอากาศหนาวเย็นและอาจทำให้เกิดปัญหาสุขภาพตามมาได้</Text>
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

export default  ChihuahuaScreen;
