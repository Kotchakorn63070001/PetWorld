import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableWithoutFeedback,Dimensions,ScrollView,Image, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const DogData = () =>{

    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginLeft:340}}>
            <Text>แมว</Text>
            <AntDesign name="arrowright" size={24} color="black" />
            </View>
        <ScrollView>

          <Text style={{fontSize:50, color:'black',fontWeight:'bold',marginLeft:10}}>Dog</Text>
          <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านสภาพแวดล้อม</Text>
                        <Text style={styles.text}>          ลูกสุนัขต้องการเรียนรู้และมักจะสนใจสิ่งรอบตัวเป็นอย่างมาก ซึ่งหากได้รับประสบการณ์ด้านลบจะส่งผลกระทบระยะยาว พัฒนาการด้านพฤติกรรมของลูกสุนัขประกอบด้วยหลายระยะ รวมไปถึงระยะของการเข้าสังคม ซึ่งเริ่มตั้งแต่อายุ 4- 14 สัปดาห์</Text>
                        <Text style={styles.text}>     ◉ ควรเตรียมที่นอนให้ลูกสุนัขให้มีที่นอนเป็นของตัวเอง  เพื่อให้ลูกสุนัขมีพื้นที่ส่วนตัวและรู้สึกปลอดภัย</Text>
                        <Text style={styles.text}>     ◉ ควรมีของเล่นและสถานที่ให้ลูกสุนัขเพื่อสร้างสภาพแวดล้อมที่ดึงดูดใจ เช่น กล่องกระดาษแข็งขนาดใหญ่สำหรับซ่อนตัว และของเล่นยางสำหรับเคี้ยว สิ่งสำคัญคือ ควรมีคนคอยดูแลทุกครั้งที่เล่น</Text>
                        <Text style={styles.text}>     ◉ ควรทำให้ลูกสุนัขคุ้นเคยกับสภาพแวดล้อมที่จะต้องพบเจอ เช่น รถยนต์ บันไดเลื่อน ลิฟต์ รถไฟ รถรางหรือรถประจำทาง</Text>
                        <Text style={styles.text}>     ◉ ฝึกให้อยู่ตามลำพัง</Text>
                        <Text style={styles.text}>     ◉ ให้รู้จักและพบเจอกับสุนัขตัวอื่น สัตว์ประเภทอื่น และทำกิจกรรมนอกบ้านกับครอบครัวให้ได้มากที่สุด เพื่อพัฒนาการในเรื่องการเข้าสังคม</Text>
                        <Text style={styles.text}>     ◉ พาสุนัขออกไปเล่นข้างนอกบ้าน</Text>               
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านการให้อาหาร</Text>
                        <Text style={styles.text}>          ความต้องการสารอาหารจะเปลี่ยนแปลงไปเมื่อลูกสุนัขโตขึ้น ในระยะแรก ลูกสุนัขจะต้องการอาหารมื้อเล็กๆ หลายมื้อต่อวัน แล้วค่อยๆ ลดลงจนเหลือหนึ่งหรือสองมื้อ ขนาดและสายพันธุ์ของสุนัขมีผลต่อความต้องการด้านโภชนาการพอๆ กัน เนื่องจากสุนัขบางตัวมีความทนทานต่อการย่อยอาหารที่แตกต่างกันไป สุนัขควรดื่มน้ำบ่อยๆ และไม่ควรให้อาหารสุนัขมากจนเกินไป อาหารจะต้องให้พลังงานในปริมาณที่เหมาะสม</Text>
                        <Text style={styles.text}>     ◉ อย่าเปลี่ยนอาหารอย่างกะทันหันเพื่อหลีกเลี่ยงความแปรปรวนของระบบทางเดินอาหารในลูกสุนัข เมื่อพาลูกสุนัขเข้าบ้านครั้งแรก ควรให้ลูกสุนัขกินอาหารเหมือนที่เคยกินอยู่ก่อนแล้ว หากต้องการเปลี่ยนอาหาร ให้ค่อยๆ เปลี่ยนในช่วงสัปดาห์แรก โดยผสมอาหารแบบใหม่และแบบเดิมในสัดส่วนที่แตกต่างกันออกไป</Text>
                        <Text style={styles.text}>     ◉ ควรมีของเล่นและสถานที่ให้ลูกสุนัขเพื่อสร้างสภาพแวดล้อมที่ดึงดูดใจ เช่น กล่องกระดาษแข็งขนาดใหญ่สำหรับซ่อนตัว และของเล่นยางสำหรับเคี้ยว สิ่งสำคัญคือ ควรมีคนคอยดูแลทุกครั้งที่เล่น</Text>
                        <Text style={styles.text}>     ◉ ให้ลูกสุนัขกินอาหารที่เหมาะกับอายุ  มีอาหารสูตรพิเศษสำหรับลูกสุนัขในช่วงอายุต่างๆ ซึ่งเหมาะสมกับความต้องการเพื่อการเจริญเติบโตของลูกสุนัข เพื่อการเจริญเติบโตที่เหมาะสม โปรดทำตามคำแนะนำของสัตวแพทย์</Text>
                        <Text style={styles.text}>     ◉ ควรให้อาหารลูกสุนัขของทุกวันในสถานที่เดิม เวลาเดิม และให้หลังจากที่เจ้าของรับประทานอาหารแล้ว เพื่อทำให้สุนัขเข้าใจว่าเจ้าของเป็นใหญ่ในบ้าน เพราะสุนัขชอบอยู่กันเป็นฝูงและต้องการแสดงลำดับขั้นที่ชัดเจน หลังจากกินอาหารแล้ว หากเป็นไปได้ อย่าให้ลูกสุนัขกระโดดไปมาประมาณหนึ่งถึงสองชั่วโมง</Text>
                        <Text style={styles.text}>     ◉ ไม่ควรให้ขนมบ่อยๆ เพื่อรักษาน้ำหนักของสุนัขให้อยู่ในเกณฑ์ที่เหมาะสม ห้ามให้น้ำตาลและช็อกโกแลต เนื่องจากช็อกโกแลตอาจเป็นพิษต่อสุนัขได้ หรือสามารถให้อาหารเม็ดแทนขนมได้</Text>                    
                     </View>
                  </View>
                </View>
                
                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>ด้านการออกกำลังกาย</Text>
                        <Text style={styles.text}>          สุนัขทุกตัวต้องออกกำลังกาย แต่ประเภทของการออกกำลังกายนั้นแตกต่างกันไปตามอายุ ขนาด และสายพันธุ์</Text>
                        <Text style={styles.text}>     ◉ ควรมีพื้นที่ออกกำลังกายให้สุนัข</Text>
                        <Text style={styles.text}>     ◉ สุนัขพันธุ์ขนาดกลางถึงพันธุ์ใหญ่จะมีระยะการเจริญเติบโตที่ยาวนานกว่าเพื่อให้กระดูกและข้อต่อพัฒนาเต็มที่ ดังนั้นจึงไม่ควรเดินเป็นระยะทางไกลๆ หรือเล่นกีฬาบางประเภทจนกว่าจะโต ควรให้สุนัขเดินระยะทางใกล้ๆ แต่เดินบ่อยๆ แทน</Text>
                        <Text style={styles.text}>     ◉ การเล่นเป็นการออกกำลังกายตามธรรมชาติของสุนัข และช่วยในเรื่องการพัฒนาทางด้านจิตใจ เป็นสิ่งที่ดีสำหรับสุนัขของในหลายๆ ด้าน  เช่น ช่วยกระชับความสัมพันธ์ ควบคุมน้ำหนัก ทำให้สุนัขมีชีวิตชีวาและเพื่อเสริมสร้างการทำงานของระบบหัวใจหลอดเลือดและระบบภูมิคุ้มกันของสุนัข</Text>
                                        
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>การแปรงขนและสุขภาพ</Text>
                        <Text style={styles.text}>          ควรแปรงขนเป็นกิจวัตรประจำวัน เพราะการแปรงขนจะช่วยทำให้สุขภาพผิวหนังและขนของลูกสุนัขดีขึ้น การแปรงขนอาจช่วยให้ตรวจพบความผิดปกติต่างๆ ได้ เช่น เห็บหมัด ความผิดปกติของผิวหนัง </Text>
                        <Text style={styles.text}>     ◉ เริ่มดูแลฟันตั้งแต่ยังเด็กจะทำให้ลูกสุนัขของคุ้นเคยกับการแปรงฟันด้วยแปรงสีฟันและยาสีฟันที่ออกแบบมาเป็นพิเศษสำหรับสุนัข พยายามแปรงฟันลูกสุนัขให้ได้หลายๆ ครั้งต่อสัปดาห์</Text>
                        <Text style={styles.text}>     ◉ การฉีดวัคซีนช่วยป้องกันโรคติดต่อ และในบางกรณีก็ป้องกันโรคที่มีอันตรายถึงชีวิตได้ วัคซีนบางตัวจำเป็นต้องฉีด แต่บางตัวเป็นวัคซีนที่แนะนำให้ฉีด ปกติแล้วลูกสุนัขจะเริ่มโปรแกรมการฉีดวัคซีนเมื่ออายุหกถึงแปดสัปดาห์</Text>
                        <Text style={styles.text}>     ◉ ลูกสุนัขมักจะมีพยาธิและควรทำการถ่ายพยาธิทุกเดือนจนอายุครบหกเดือน จากนั้นค่อยเปลี่ยนเป็นทุกหกเดือน สัตวแพทย์จะแนะนำตารางนัดหมายในการถ่ายพยาธิที่เหมาะสมกับลูกสุนัข ดังนั้น ควรทำตามคำแนะนำอย่างเคร่งครัด</Text>
                        <Text style={styles.text}>     ◉ ควรดูแลไม่ให้ลูกสุนัขมีหมัดและเห็บ จะต้องดูแลรักษาทั้งสุนัขและสภาพแวดล้อม  </Text>
                        <Text style={styles.text}>     ◉ การทำหมันสัตว์เลี้ยง แล้วแต่ความต้องการของเจ้าของ ควรพิจารณาให้รอบคอบ</Text>                    
                     </View>
                  </View>
                </View>

                <View style={styles.postItem}>
                  <View >
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>
                      <Text style={styles.title}>การฝึก</Text>
                        <Text style={styles.text}>          พฤติกรรมที่ดีและการเชื่อฟังต้องเริ่มต้นตั้งแต่เนิ่นๆ การฝึกสุนัขจำเป็นต้องเริ่มให้เร็วที่สุดเท่าที่จะเป็นไปได้ ในช่วงอายุที่ลูกสุนัขมีความสามารถในการเรียนรู้ตามธรรมชาติได้สูงที่สุด</Text>
                        <Text style={styles.text}>     ◉ การฝึกให้อยู่บ้าน ลูกสุนัขที่นำมาเลี้ยงใหม่ส่วนใหญ่จะไม่ได้รับการฝึกให้อยู่บ้าน การฝึกต้องใช้เวลาและความอดทน ไม่ควรลงโทษหรือดุลูกสุนัขหากขับถ่ายโดยไม่ถูกที่ ควรหาวิธีป้องกันลูกสุนัขไม่ให้ขับถ่ายในบ้านแทน</Text>
                        <Text style={styles.text}>     ◉ เริ่มเรียกชื่อตั้งแต่ยังเด็ก ขั้นแรก ให้เริ่มจากออกเสียงชื่อของลูกสุนัขช้าๆ และชัดเจนเพื่อดึงความสนใจ และเรียกชื่อลูกสุนัขทุกครั้งที่บอกให้ทำตามคำสั่ง เลือกช่วงเวลาที่ลูกสุนัขมีความตื่นตัวเพื่อช่วยให้ลูกสุนัขทำความรู้จักกับเจ้าของ และเรียกให้ลูกสุนัขมาหาเพื่อสอนให้ทำตามคำสั่ง</Text>
                        <Text style={styles.text}>     ◉ ให้ลูกสุนัขมีความคุ้นเคยกับรถยนต์ ให้สุนัขคุ้นเคยกับการนั่งในรถยนต์ตั้งแต่ยังเด็กๆ ลูกสุนัขจะได้ไม่กลัวการขึ้นรถ ลองขับไปที่ใกล้ๆ สักสองสามครั้งก่อนที่จะเริ่มขับไปไหนไกลๆ</Text>                     
                     </View>
                  </View>
                </View>

                <View style={{flexDirection: 'row',flex:1}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Poodle')}}>
                        <Image source={require("../assets/Poodle.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Poodle</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Chihuahua')}}>
                        <Image source={require("../assets/chihuahua.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Chihuahua</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>


                <View style={{flexDirection: 'row',flex:1}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Beagle')}}>
                        <Image source={require("../assets/Begle.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Beagle</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Pug')}}>
                        <Image source={require("../assets/Pug.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Pug</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row',flex:1}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Pomeranian')}}>
                        <Image source={require("../assets/Pom.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Pomeranian</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Golden')}}>
                        <Image source={require("../assets/golden.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Golden Retriever</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row',flex:1}}>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Siberian')}}>
                        <Image source={require("../assets/Siberian.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Siberian Husky</Text>
                        </Pressable>
                        
                         </View>
                    </View>
                    <View style={styles.postPetItem} >
                        <View >
                        <Pressable onPress={() => {navigation.navigate('Labrador')}}>
                        <Image source={require("../assets/Labrador.jpg")} style={styles.picPet}/>
                            <Text style={styles.textPet}>Labrador Retriever</Text>
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
        backgroundColor: '#B2D0E4',
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
        backgroundColor: '#B2D0E4',
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

export default DogData;
