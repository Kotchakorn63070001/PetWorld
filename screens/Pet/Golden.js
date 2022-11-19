import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const GoldenScreen = () => {

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
                    <Image source={require("../../assets/golden.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Golden Retriever</Text>
                      <Text style={styles.title}>(โกลเด้น รีทรีฟเวอร์)</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      โกลเด้น รีทรีฟเวอร์ สายพันธุ์อเมริกันมีรูปร่างผอมและมีกล้ามเนื้อที่น้อยกว่าอังกฤษ  เพศผู้มีความสูงอยู่ระหว่าง58-61เซนติเมตร (22 -24 นิ้ว) โดยวัดความสูงจากที่ไหล่ และมีน้ำหนักระหว่าง 65 -75 ปอนด์  มีขนที่หนาและกันน้ำได้ดี มีขนเฉดสีทองในระดับต่าง  ๆ ท่าเดินก้าวอย่างอิสระ เต็มไปด้วยความนิ่มนวลแต่ทรงพลัง</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      มักจะเป็นมิตรกับทั้งคนแปลกหน้าและคนที่คุ้นเคย ด้วยนิสัยที่สุภาพและเชื่อใจ จึงทำหน้าที่เป็นยามได้ไม่ดีนัก  ในขณะที่การเเสดงอาการก้าวร้าวอย่างไม่มีเหตุผล หรือการต่อต้านต่อผู้คน สุนัข หรือสัตว์อื่น ๆ ไม่ว่าจะในรูปแบบใด เป็นนิสัยที่ไม่เป็นที่ยอมรับนักในโกลเด้น รีทรีฟเวอร์ และไม่สอดคล้องกับลักษณะของสายพันธุ์ จนถือว่าเป็นความบกพร่อง เพราะโดยทั่วไปโกลเด้น รีทรีฟเวอร์ จะใจเย็น มีความฉลาดตามธรรมชาติ เชื่อฟัง และมีความกระตือรือร้น</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      โกลเด้น รีทรีฟเวอร์เป็นสุนัขที่มีขนร่วงมาก จำเป็นจะต้องแปรงและหวีขนให้มันสัปดาห์ละหลายๆ ครั้ง เพื่อป้องกันขนพันกัน การแปรงขนบ่อยๆ จะทำให้โกลเด้น รีทรีฟเวอร์ดูสวยได้ ผู้เลี้ยงควรดูแลเรื่องเห็บ หมัด การระคายเคืองที่ผิวหนัง ขณะที่ทำการแปรงขน</Text>
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

export default  GoldenScreen;
