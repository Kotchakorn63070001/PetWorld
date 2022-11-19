import React from "react"; 
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Pressable, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";


const AmericanScreen = () => {

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
                    <Image source={require("../../assets/american.jpg")} style={styles.picPet}/>
                      <Text style={styles.title}>American Shorthair</Text>
                      <Text style={styles.title}>(อเมริกัน ชอร์ตแฮร์)</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      แมวขนาดกลาง-ใหญ่ที่มีพลังมากเป็นพิเศษ มีกล้ามเนื้อและกระดูกหนัก ตัวกลมหนา คอหนา อกกว้าง กรามแข็งแรง พัฒนามาจากแมวที่เลี้ยงไว้เพื่อจับหนูในบ้านหรือฟาร์ม ขนแน่น มีลวดลายสำหรับอำพรางตัว </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  ลักษณะนิสัย</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      เลี้ยงง่าย อยู่ง่าย ไม่ต้องการเอาใจใส่มากนัก เป็นมิตรและน่ารักกับทุกคน มีสัญชาตญาณการเป็นนักล่า </Text>
                    <Text style={{fontSize:20, marginBottom:5, fontWeight:'500'}}>  เทคนิคการดูแล</Text>
                    <Text style={{fontSize:16, marginBottom:5}}>      ควรแปรงขนบ่อยๆ เพราะขนของแมวจะหนาขึ้นหรือบางลงตามฤดูกาล และด้วยนิสัยที่ชอบกินจุกจิกระหว่างวัน เจ้าของต้องระวังเรื่องน้ำหนักตัวเป็นพิเศษ อย่าปล่อยให้อ้วนเกินไป อาจทำให้เกิดโรคอื่นๆได้</Text>
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

export default  AmericanScreen;
