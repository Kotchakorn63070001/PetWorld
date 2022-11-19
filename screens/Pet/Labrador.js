import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const LabradorScreen = () => {

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
                    <Image source={require("../../assets/Labrador.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Labrador Retriever</Text>
                      <Text style={styles.title}>(ลาบราดอร์รีทรีฟเวอร์)</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      มีต้นกำเนิดมาจากประเทศแคนาดา หลังจากนั้นก็ได้มีการพัฒนาและผสมพันธุ์เพื่อใช้ในการล่าเหยื่อหรือบางที่ก็อาจจะใช้ประโยชน์ในการกู้ภัยได้อีกด้วย ฉะนั้นหมาพันธุ์นี้จะมีความฉลาดและในขณะเดียวกันก็มีความแข็งแรงค่อนข้างมาก ดังนั้นใครที่จะเลี้ยงสุนัขสายพันธุ์นี้คุณจะต้องให้เวลากับน้องหมาในการพาไปออกกำลังกายทุกวันอย่างน้อยวันละ 30 นาที เพื่อให้น้องมีร่างกายที่สมบูรณ์และแข็งแรง</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ฉลาดหลักแหลม กระตือรือร้น รักสนุก ช่างเอาอกเอาใจเป็นสายพันธุ์ที่เหมาะกับครอบครัวที่มีเด็กประกอบกับการที่เป็นสุนัขเฝ้ายามที่ดีเนื่องจากมีเสียงเห่าทุ้มและ หนักแน่น เป็นที่น่าเกรงขามเพื่อเตือนเมื่อมีผู้บุกรุก ปรับตัวเข้ากับสิ่งแวดล้อมใหม่ได้ง่าย สามารถฝึกความสามารถพิเศษอื่นๆ ได้มากมาย เช่น ใช้เป็นสุนัขค้นหาผู้ประสบภัย ค้นหายาเสพติด </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ต้องมีคอกที่ใหญ่และมีรั้วสูงล้อมรอบ มีพื้นที่ให้น้องหมาวิ่งเล่นก็จะดี ควรให้เขาออกกำลังกายวันละ 30 นาที จะทำให้พวกเขาแข็งแรง มีความมั่นคงทางอารมณ์ เนื่องจากสุนัขพันธุ์นี้จะอ้วนง่ายเวลาที่มีอายุมากขึ้นซึ่งสามารถก่อให้เกิดปัญหาด้านสุขภาพ ดังนั้นจึงควรดูแลอาหารการกินที่มีปริมาณและคุณค่าทางอาหารเหมาะสมตามวัยของสุนัข ทำความสะอาดเดือนละ 2 ครั้ง</Text>
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

export default  LabradorScreen;
