import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const PomeranianScreen = () => {

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
                    <Image source={require("../../assets/Pom.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Pomeranian (ปอมเมอเรเนียน)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      โดยต้นกำเนิดของหมาสายพันธุ์นี้มาจากสุนัขพอเมอเรเนียหรือตอนเหนือของทวีปยุโรป ซึ่งปอมเป็นสุนัขที่ได้รับการผสมพันธุ์ให้มีขนาดที่เล็กและขนยาวเพื่อให้สามารถอยู่ในอากาศของทวีปยุโรปได้ ทั้งนี้หน้าตาของน้องจะมีความแหลมลักษณะคล้ายจิ้งจอก รวมไปถึงหูที่ค่อนข้างสั้นและชี้ตั้งขึ้นมา ซึ่งด้วยความตัวเล็กน่ารักและขนที่ปุกปุยทำให้หลายคนตกหลุมรักและซื้อมาเลี้ยงกันหลายบ้านเลยทีเดียว</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      สุนัขพันธุ์ปอมมีความคล่องตัวสูงและค่อนข้างฉลาด อาจจะต้องเข้าใจธรรมชาติในเรื่องของเสียงเห่าเพราะปอมมีเสียงเห่าที่ค่อนข้างแหลมสูงและในบางครั้งอาจเห่าโดยไม่มีเหตุผลบ้างในบางครั้ง</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แม้จะขนยาว หนา ถึง 2 ชั้น น้อง ๆ ไม่จำเป็นต้องอาบน้ำหรือดูแลขนบ่อย ๆ เหมือนสุนัขขนยาวพันธุ์อื่น ๆ โดยอย่างน้อยให้แปรงขนอย่างน้อย 2 ครั้งต่อสัปดาห์ แต่ควรแปรงขนทุกวันเมื่ออยู่ในฤดูผลัดขน ที่สำคัญ ไม่ควรโกนขนปอมเมอเรเนียนเด็ดขาดเพราะจะทำให้ผิวหนังของปอมสัมผัสกับสิ่งแปลกปลอมหรือภัยอันตรายได้ง่าย ในส่วนของการออกกำลังกาย เพียงการเดินเล่นเบา ๆ รอบบ้าน หรือในสวนเล็ก ๆ ก็เพียงพอ และเน้นไปที่การใช้ของเล่นซึ่งจะทำให้ปอมเมอเรเนียนรู้สึกสนุกสนานขึ้น</Text>
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

export default  PomeranianScreen;
