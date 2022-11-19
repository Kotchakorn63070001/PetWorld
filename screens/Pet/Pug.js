import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const PugScreen = () => {

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
                    <Image source={require("../../assets/Pug.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Pug (ปั๊ก)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      ปั๊กเป็นอีกหนึ่งสุนัขสายพันธุ์เล็ก ที่มีต้นกำเนิดมาจากประเทศจีน เมื่อประมาณ 400 ปีก่อน โดยปั๊กจะมีลักษณะรูปร่างที่เป็นเอกลักษณ์มากนั่นคือ หน้าที่ย่น หูตก และมีขนที่ค่อนข้างสั้น แต่ในขณะเดียวกันขนของปั๊กก็มีความหนาแน่นถึงสองชั้น ทั้งนี้ปั๊กจะมีสีขนอยู่ประมาณ 3 สี นั่นคือ ส้มแกมเงิน, ส้มแกมเหลือง หรือสีดำ </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      มีความแข็งแรง ใจดี และไม่ค่อยพบว่าพวกมันมีนิสัยดุร้าย สุนัขพันธุ์นี้เหมาะกับครอบครัวที่มีเด็กอยู่ เนื่องจากลักษณะหลักๆของพันธุ์นี้ คือ รักเด็กและมีกำลังแรงพอที่จะเล่นกับเด็กอย่างเหมาะสม พวกมันมีความสงบและว่านอนสอนง่าย และพวกมันร่าเริงและเล่นกับเจ้าของตามตามอารมณ์ของเจ้าของ พวกมันสามารถเป็นสุนัขเฝ้าบ้านที่ดี พวกมันตื่นตัวอยู่ตลอดเวลาและบางครั้งก็มีความสุข</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ควรทำความสะอาดรอยย่นบนใบหน้าทุกสัปดาห์เพราะรอยย่นบนใบหน้าของสุนัขพันธุ์ปั๊กสามารถเก็บสะสมอาหาร น้ำลาย ฝุ่นและสิ่งสกปรกอื่นๆ ที่อาจทำให้เกิดกลิ่นเหม็นและการระคายเคือง ใช้คัตตอนบัดจุ่มในน้ำอุ่นเพื่อทำความสะอาดรอยย่นเหล่านั้น ลูบคัตตอนบัดไปตามรอยย่นข้างจมูกและดวงตาของสุนัข ระมัดระวังอย่าให้คัตตอนบัดสัมผัสดวงตา รูจมูกหรือปากของมัน</Text>
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

export default  PugScreen;
