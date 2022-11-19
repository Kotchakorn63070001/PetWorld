import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const KoratScreen = () => {

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
                    <Image source={require("../../assets/Korat.png")} style={styles.picPet}/>
                      <Text style={styles.title}>Korat Cat (สีสวาด)</Text>
                    
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวขนสั้นสีเงินเข้ม แซมด้วยขนสีประกายเงิน นัยน์ตาสีฟ้าสดใสกลมโตจะเปลี่ยนเป็นสีเหลืองสดเมื่ออยู่ในวัยกำลังเติบโตและเป็นสีเขียวหรือเหลืองอำพันเมื่อโตเต็มวัย ลำตัวขนาดกลาง หางยาวเรียว และหากมองด้านหน้า ส่วนหัวของแมวสีสวาดจะเป็นรูปหัวใจ</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวสีสวาดเป็นแมวฉลาดและรักเจ้าของ ใจดีเข้ากันได้ดีกับคนแปลกหน้า สัตว์ตัวอื่นๆ และแมวตัวอื่นในบ้าน ไม่ค่อยวิ่งหนีหายเวลามีแขกมาเยี่ยมบ้านสักเท่าไหร่</Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ถึงแม้ว่าแมวสีสวาดหรือแมวโคราชจะมีขนสั้นจึงไม่จำเป็นต้องดูแลเป็นพิเศษ แต่ชอบให้เจ้าของแปรงขนด้วยแปรงขนนุ่มเพื่อเอาใจใส่ แมวสีสวาดหรือแมวโคราชนี้ก็เหมือนกับแมวสายพันธุ์อื่น ๆ ที่ควรรับวัคซีนและป้องกันเห็บหมัดอย่างสม่ำเสมอ </Text>
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

export default  KoratScreen;
