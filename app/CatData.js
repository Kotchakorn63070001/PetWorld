import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableWithoutFeedback,Dimensions, ScrollView,Pressable,Image} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const CatData = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'row', marginRight:340}}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text>หมา</Text>
            
            </View>
            <ScrollView>
          <Text style={{fontSize:50,color:'black', fontWeight:'bold',marginLeft:300}}>Cat</Text>
          <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านสภาพแวดล้อม</Text>
                        <Text style={styles.text}>          สภาพแวดล้อมเป็นส่วนสำคัญของสุขภาพและความเป็นอยู่ที่ดีของแมว สภาพแวดล้อมที่เหมาะสมจะช่วยให้แมวอยู่ร่วมกับเรา และเข้าสังคมได้อย่างราบรื่น อีกทั้งยังช่วยให้ลูกแมวคุ้นเคยกับผู้คนและสิ่งรอบตัวได้ง่ายขึ้นแม้ลูกแมวจะยังมีอายุน้อย</Text>
                        <Text style={styles.text}>     ◉ พื้นที่ให้อาหาร : ต้องเป็นบริเวณที่เงียบสงบ อยู่ห่างจากกระบะทรายและบริเวณรับประทานอาหารของเจ้าของ ควรหลีกเลี่ยงการใช้ห้องรับประทานอาหารหรือบริเวณที่อาจมีการรบกวน และปล่อยให้แมวมีพื้นที่ที่เพียงพอขณะกินอาหาร</Text>
                        <Text style={styles.text}>     ◉ พื้นที่พักผ่อน : พื้นที่นี้จะแตกต่างกันตามช่วงเวลาในระหว่างวัน ทั้งนี้ ขึ้นอยู่กับแสงแดดและแหล่งความร้อน ตามธรรมชาติแล้วแมวชอบนอนที่สูง และมักเลือกจุดที่เหมาะกับตัวเองมากที่สุด</Text>
                        <Text style={styles.text}>     ◉ บริเวณขับถ่าย : ต้องวางกระบะทรายในบริเวณที่เงียบสงบและแมวสามารถเข้าถึงได้ตลอดเวลา ควรมีกระบะทรายอย่างน้อยหนึ่งใบต่อแมวหนึ่งตัว และมีกระบะสำรองอีกหนึ่งใบ</Text>
                        <Text style={styles.text}>     ◉ พื้นที่เล่น : เป็นพื้นที่อยู่อาศัยและบริเวณสำหรับการผ่อนคลายที่ใหญ่ที่สุดของแมว ต้องเป็นที่ที่สามารถวิ่งแข่งรอบ ๆ ซ่อน หรือเกาะอยู่บนที่สูงได้ บ้านต้นไม้เป็นอุปกรณ์เสริมที่ดี ที่จะช่วยให้แมวสนุกกับกิจกรรมนี้เพื่อสุขภาพและความเป็นอยู่ที่ดี</Text>             
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านการให้อาหาร</Text>
                        <Text style={styles.text}>          สำหรับแมวที่เลี้ยงภายในบ้าน การกินอาหารขึ้นอยู่กับหลายปัจจัย แมวส่วนใหญ่มักชอบกินอาหารในพื้นที่เงียบสงบ</Text>
                        <Text style={styles.text}>     ◉ การกินอาหารที่ความหลากหลาสำหรับแมวนั้นอาจไม่เหมาะกับระบบย่อยอาหาร และมีแนวโน้มชอบกินมื้อละน้อย ๆ หลาย ๆ มื้อตลอดทั้งวันมากกว่าอาหารมื้อใหญ่หนึ่งหรือสองมื้อ</Text>
                        <Text style={styles.text}>     ◉ แมวมีความต้องการโปรตีนสูงมาก รวมถึงกรดอะมิโนจำเป็นหลายชนิด หนึ่งในนั้นคือทอรีนที่พบในเนื้อสัตว์เท่านั้น</Text>
                        <Text style={styles.text}>     ◉ ไขมันเป็นแหล่งพลังงานที่สำคัญสำหรับแมว โดยร่างกายแมวต้องการพลังงานจากไขมันในสัดส่วนที่มากกว่าปริมาณที่แนะนำสำหรับคนเสียอีก</Text>
                        <Text style={styles.text}>     ◉ แมวมีความต้องการวิตามินและแร่ธาตุที่เฉพาะเจาะจงมาก เช่น วิตามินดี ซึ่งจะได้รับจากอาหารเท่านั้น</Text>   
                        <Text style={styles.text}>     ◉ ระบบทางเดินอาหารของลูกแมวแรกเกิดจะเหมาะสำหรับย่อยนมสูตรพิเศษสำหรับลูกแมวโดยเฉพาะ แต่ความสามารถในการย่อยจะเปลี่ยนไปตามเวลา โดยเมื่อลูกแมวเข้าสู่ช่วงโตเต็มวัย อาจจะไม่สามารถย่อยแลคโตสในน้ำนมได้อีก</Text>
                                  
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านการออกกำลังกาย</Text>
                        <Text style={styles.text}>          แมวที่อยู่ในบ้านต้องการกิจกรรมมากมายเพื่อให้ร่างกายและจิตใจได้รับการกระตุ้นอย่างต่อเนื่อง ซึ่งหมายความถึง</Text>
                        <Text style={styles.text}>     ◉ ของเล่นหลายชนิดในแต่ช่วงเวลาเพื่อกระตุ้นความสนใจ สิ่งที่จะปีนและซ่อนตัวได้</Text>
                        <Text style={styles.text}>     ◉ สถานที่ลับเล็บให้แมว : การลับเล็บเป็นพฤติกรรมตามธรรมชาติ จึงเป็นเรื่องจำเป็นที่เจ้าของจะต้องเตรียมหาเสาลับเล็บอย่างน้อยหนึ่งอัน</Text>            
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>การแปรงขน</Text>
                        <Text style={styles.text}>          การแปรงขนมีประโยชน์เนื่องจากแมวใช้เวลาโดยเฉลี่ย 30% ของเวลาทั้งหมดในการทำความสะอาดร่างกาย นำไปสู่การบริโภคเส้นขนที่หลุดร่วง ซึ่งอาจก่อให้เกิดปัญหาก้อนขนและปัญหาในระบบทางเดินอาหารในบางครั้ง</Text>
                        <Text style={styles.text}>     ◉ แมวที่มีขนยาวเช่นแมวสายพันธุ์เปอร์เซียจำเป็นต้องหวีขนเพื่อคลายเส้นขนที่พันกันอย่างระมัดระวังด้วยหวีที่มีคุณภาพทุกวัน</Text>
                        <Text style={styles.text}>     ◉ ในแมวที่มีขนสั้นและเรียบ อาจใช้การลูบด้วยมือเพียงไม่กี่ครั้งก็เพียงพอแล้ว</Text>
                        <Text style={styles.text}>     ◉ สำหรับแมวที่มีขนหนาปานกลางหรือมีขนด้านในที่แน่น แนะนำให้ใช้แปรงที่นุ่มหวีขนทุกสัปดาห์</Text>            
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>สุขภาพ</Text>
                        <Text style={styles.text}>          สุขภาพและความเป็นอยู่ที่ดีของแมวขึ้นอยู่กับปัจจัยที่หลากหลาย ตั้งแต่การฉีดวัคซีนป้องกันและรับประทานยาเม็ด หรือแม้กระทั่งการทำหมันให้กับสัตว์เลี้ยง ค่าใช้จ่ายบางส่วนนี้อาจแยกออกจากส่วนอื่น</Text>
                        <Text style={styles.text}>     ◉ แมวควรได้รับวัคซีนโรคไข้หัด โรคเริม และโรคคาลิไซเป็นประจำ โปรแกรมวัคซีนประกอบด้วยการฉีด 2 ครั้ง ห่างกัน 3-4 สัปดาห์ แมวอาจได้รับการฉีดวัคซีนครั้งแรกตั้งแต่ก่อนที่จะอาศัยร่วมกันกับเจ้าของ เนื่องจากสามารถฉีดวัคซีนเข็มแรกตั้งแต่อายุประมาณ 9 สัปดาห์</Text>
                        <Text style={styles.text}>     ◉ เจ้าของควรสอบถามประวัติการทำวัคซีนในอดีตของแมวหรือลูกแมวกับเจ้าของคนล่าสุดที่กำลังรับแมวมาเลี้ยงต่อ เพื่อป้องกันไม่ให้แมวติดหมัด พยาธิ หรือเห็บ</Text>
                        <Text style={styles.text}>     ◉ การทำหมันเป็นหนึ่งในความรับผิดชอบที่สำคัญที่สุดที่เจ้าของสัตว์เลี้ยงทุกคนสามารถทำได้ โดยปกติแล้วแมวจะต้องมีการทำหมันตั้งแต่ตั้งแต่อายุประมาณหกเดือน</Text>
                        <Text style={styles.text}>     ◉ สิ่งสำคัญคือทำการนัดตรวจสุขภาพประจำปีกับสัตวแพทย์ เพื่อช่วยป้องกันปัญหาสุขภาพและถือเป็นตรวจสอบการเปลี่ยนแปลงของน้ำหนักและพฤติกรรมของแมว</Text>             
                     </View>
                  </View>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Persian')}}>
                        <Image source={require("../assets/persian.png")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Persian</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('British')}}>
                        <Image source={require("../assets/British.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>British Shorthair</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('American')}}>
                        <Image source={require("../assets/american.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>American Shorthair</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Scottish')}}>
                        <Image source={require("../assets/scottish.png")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Scottish Fold</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Siamese')}}>
                        <Image source={require("../assets/Siamese.png")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Siamese</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Korat')}}>
                        <Image source={require("../assets/Korat.png")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Korat</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Ragdoll')}}>
                        <Image source={require("../assets/ragdoll.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Ragdoll</Text>
                        </Pressable>
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Khao')}}>
                        <Image source={require("../assets/white.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Khao Manee</Text>
                        </Pressable>
                         </View>
                    </View>
                </View>

                

                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
            justifyContent: 'center',
            alignItems:'center',  
            width:Dimensions.get('window').width
    },
    postItem: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 10,
      },
      title:{
        fontSize: 25,
        fontWeight: '500',
        marginBottom:10
      },
      text:{
        fontSize:15,
        marginBottom:5
      },
      picPet:{
        width: 160,
        height: 150,
        borderRadius: 10,
        // marginRight: 16
      },
      postPetItem: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 10,
        // width: 180,
      },
      textPet:{
        textAlign:'center',
        marginTop:5,
        fontSize:18
        
      }
    
    
})

export default CatData;
