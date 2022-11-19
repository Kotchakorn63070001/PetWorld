import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const RogdollScreen = () => {

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
                    <Image source={require("../../assets/ragdoll.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Ragdoll (แร็กดอล)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวพันธุ์แร็กดอลมีส่วนหัวที่ค่อนข้างกว้าง ด้านบนแบน และหูทั้งสองข้างตั้งห่างกัน ตาลึกกลมโตสีฟ้า ลำตัวของแมวพันธุ์นี้ยาว มีกล้ามอกกว้าง คอสั้นและขาตรงแข็งแรง อุ้งมือค่อนข้างกลมและใหญ่ มีขนแซมตามซอกนิ้ว ส่วนหางยาวเป็นพวง ขนของแมวพันธุ์แร็กดอลหนาละเอียดเหมือนเส้นไหม มีทั้งแบบขนยาวกลาง ๆ ไปจนถึงยาวมาก</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เป็นแมวที่รักสงบมากที่สุดในโลกเมื่อเทียบกับแมวบ้านพันธุ์อื่น ๆ แมวพันธุ์นี้มีความสุขกับตัวเอง ไม่เรียกร้องและอดทนต่อหลายสถานการณ์ ด้วยนิสัยอ่อนโยนและสงบเย็น ทำให้แมวแร็กดอลเป็นสัตว์เลี้ยงที่ซื่อสัตย์และรักผู้เลี้ยง </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวพันธุ์แร็กดอลจะต้องแปรงขนดูแลความสะอาดอย่างสม่ำเสมอเพื่อให้ขนอยู่ในสภาพดี ควรหัดแปรงขนทำความสะอาดตั้งแต่แมวยังเล็กเพื่อให้เกิดความเคยชินและเกิดความรู้สึกดีต่อผู้เลี้ยง การแปรงขนเป็นประจำทุกวันจะช่วยป้องกันปัญหาขนพันกันเป็นก้อนและต้องออกแรงดึงก้อนเหนียว ๆ ที่ติดตามขนออก</Text>
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

export default  RogdollScreen;
