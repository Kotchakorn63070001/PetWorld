import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const BeagleScreen = () => {

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
                    <Image source={require("../../assets/Begle.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>Beagle (บีเกิ้ล)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      ที่มาของสายพันธุ์บีเกิ้ลนั้นเชื่อกันว่าเป็นสายพันธุ์สุนัขที่สืบเชื้อสายมาจากสุนัขที่ใช้ล่าสัตว์ โดยจัดอยู่ในกลุ่มสุนัขล่าสัตว์ขนาดเล็ก ช่วยล่าสัตว์  </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      บีเกิ้ลมีลักษณะนิสัยที่อ่อนโยน และมักสร้างเสียงหัวเราะให้กับเจ้าของด้วยความน่ารักและตลกขี้เล่น แต่ในความน่ารักนั้นก็มีความซนพลังล้นซ่อนอยู่ด้วยเหมือนกัน ชอบการเข้าสังคมพบปะผู้คนหลากหลาย ชอบออกไปเที่ยว ได้มองเห็น ได้ยินเสียงใหม่ ๆ และตอบรับกับทุกประสบการณ์ที่เจ้าของมอบให้</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      บีเกิ้ลมีความต้องการออกกำลังกายสูง เนื่องจากเป็นสุนัขที่พลังงานเยอะ พวกเค้าต้องได้เดินอย่างน้อยวันละ 1 ชั่วโมง จะเป็นการเดินเล่นในสวนหรือเดินในละแวกบ้านของคุณก็ได้ การเดินเล่นจะช่วยให้พวกเค้าแข็งแรง และมีความสุขมาก ๆ ข้อควรระวังในการเดินเล่นกับบีเกิ้ลคือ ต้องใส่สายจูงทุกครั้ง เพื่อป้องกันไม่ให้พวกเค้าวิ่งเตลิดหรือออกวิ่งไล่ล่าเหยื่อ</Text>
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

export default  BeagleScreen;
