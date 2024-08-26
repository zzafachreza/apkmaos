// In App.js in a new project
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView, Alert, } from 'react-native';
import colors from '../../../utils/colors/colors';
import { apiURL, getData, MYAPP } from "../../../utils/localStorage";

export default function KelompokTaksEmpatTujuh({ navigation }) {


  const sendServer = () => {

    getData('user').then(u => {

      const kirim = {
        fid_user: u.id,
        unit: 4,
        skor: parseInt(pilih[1].skor) + parseInt(pilih[2].skor)
          + parseInt(pilih[3].skor) + parseInt(pilih[4].skor) + parseInt(pilih[5].skor) + parseInt(pilih[6].skor) + parseInt(pilih[7].skor) + parseInt(pilih[8].skor) + parseInt(pilih[9].skor) + parseInt(pilih[10].skor) + parseInt(pilih[11].skor) + parseInt(pilih[12].skor) + parseInt(pilih[13].skor) + parseInt(pilih[14].skor) + parseInt(pilih[15].skor) + parseInt(pilih[16].skor) + parseInt(pilih[17].skor) + parseInt(pilih[18].skor) + parseInt(pilih[19].skor) + parseInt(pilih[20].skor)
      }

      // console.log(kirim);
      axios.post(apiURL + 'insert_nilai', kirim).then(res => {
        console.log(res.data);
        Alert.alert(MYAPP, res.data.message);
        navigation.navigate('KelompokTaksSatuDelapan')
      })

    }
    );

  }



  const [pilih, setPilih] = useState({
    1: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    2: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    3: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    4: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    5: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    6: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    7: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    8: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    9: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    10: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    11: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    12: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    13: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    14: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    15: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    16: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    17: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    18: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    19: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    20: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
  });


  const MYsoal = ({ no, soal, a, b, c, d, benar, onPress }) => {
    return (
      <View style={{
        margin: 10,
      }}>
        <Text style={{
          fontFamily: 'Alata-Regular',
          fontSize: 20,
        }}>{soal}</Text>

        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: true,
              b: false,
              c: false,
              d: false,
              skor: benar == "a" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].a ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{a}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: true,
              c: false,
              d: false,
              skor: benar == "b" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].b ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{b}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: false,
              c: true,
              d: false,
              skor: benar == "c" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].c ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{c}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: false,
              c: false,
              d: true,
              skor: benar == "d" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].d ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{d}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }}>
        <View style={{ flexDirection: 'row', padding: 10, top: 0 }} >
          <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuEnam')} style={{
            justifyContent: 'center'
          }} >
            <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
          </TouchableOpacity>
          <Text style={{ flex: 1, fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Final Task/{'\n'}
            Activities</Text>
        </View>
      </View>





      <ScrollView showsVerticalScrollIndicator={false}>
        {/* soal */}

        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-2 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 316, height: 355, }} source={require('../../../assets/img/unitempat/unitempat(4).png')} />
        </View>

        <MYsoal no={1} soal='1. At this stage, they are either exported in this form or … (Par. 2) The underlined words refer to …' a='A. Logs' b='B. processed pulp' c='C. raw wood chips' d='D. clean wood chips' benar='d' />
        <MYsoal no={2} soal='2. The woodchips are then screened to remove dirt and other impurities. (Par. 2) In other words, they are …' a='A. Repaired' b='B. cleaned' c='C. moved' d='D. removed' benar='b' />

        <View style={{ padding: 10 }}>

          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       It has long been known that when exposed to light under suitable conditions of temperature and moisture, the green parts of plants use carbon dioxide from the atmosphere and release oxygen to it. These exchanges are the opposite of those that occur in respiration. The process is called photosynthesis. In photosynthesis, carbohydrates are synthesized from carbon dioxide and water by the chloroplasts of plant cells in the presence of light. In most plants, the water used in photosynthesis is absorbed from the soil by the roots and trans-located through the xylem of the root and stem to the leaves. Except for the usually small percentage used in respiration, the oxygen released in the process diffuses out of the leaf into the atmosphere through the stomata. Oxygen is the product of the reaction. For each molecule of carbon dioxide used, one molecule of oxygen is released. A summary chemical equation for photosynthesis is:{'\n'}
            {'\n'}
            6CO2+6H2O→C6H12O6+6O2{'\n'}
            {'\n'}
            As a result of this process, radiant energy from the sun is stored as chemical energy. In turn the chemical energy is used to decompose carbon dioxide and water. The products of their decomposition are recombined into a new compound, which is successively built up into more and more complex substances. After many intermediate steps, sugar is produced. At the same time, a balance of gases is preserved in the atmosphere.


          </Text>
        </View>

        <MYsoal no={3} soal='3. Which title best expresses the ideas in this passage?' a='A. A chemical Equation' b='B. The exchange of Respiration' c='C. The Process of Photosynthesis' d='D. The Parts of vascular Plants' benar='c' />
        <MYsoal no={4} soal='4. In photosynthesis, water …' a='A. must be present' b='B. is produced in carbohydrates' c='C. is stored in chemical energy' d='D. is diffused out of the leaf' benar='a' />
        <MYsoal no={5} soal='5. Combining carbon dioxide and water to form sugar results in an excess of …' a='A. water' b='B. oxygen*' c='C. chlorophyll' d='D. carbon' benar='b' />
        <MYsoal no={6} soal='6. The word “stored” in Par. 2 is closest in meaning to …' a='A. retained' b='B. converted' c='C. discovered' d='D. specified' benar='a' />
        <MYsoal no={7} soal='7. In photosynthesis, energy from the sun is…' a='A. Synthesized' b='B. changed to chemical energy' c='C. not necessary to the process' d='D. conducted from the xylem to the leaves of green plants' benar='b' />
        <MYsoal no={8} soal='8. The word “successively” in Par. 2 is closest in meaning to …' a='A. Carefully' b='B. Exceptionally' c='C. with effort' d='D. in a sequence' benar='d' />
        <MYsoal no={9} soal='9. Besides manufacturing food for plants, what is another benefit of photosynthesis?' a='A. It absorbs the water.' b='B. It diffuses additional carbon dioxide into the air.' c='C. It removes harmful gases from the air.' d='D. It maintains the balance of gases in the atmosphere.' benar='d' />
        <MYsoal no={10} soal='10. Which of the following is NOT true of the oxygen used in photosynthesis?' a='A. It is absorbed by the roots' b='B. It is the product of photosynthesis' c='C. It is used in respiration' d='D. It is released into the atmosphere through the leaves' benar='a' />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-13 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 316, height: 523, }} source={require('../../../assets/img/unitempat/unitempat(6).png')} />
        </View>



        <MYsoal no={11} soal='11. The main idea of the second paragraph is … ' a='A. The final form of gelatin is white and odorless' b='B. Gelatin can only be produced in distilled water' c='C. Producing gelatin is not simple work' d='D. Producing gelatin needs a lot of fresh water' benar='c' />
        <MYsoal no={12} soal='12. From the text, we know that ….' a='A. Gelatin can only be used in the photographic industry' b='B. It is necessary to add the mineral to the gelatin' c='C. Fat aids in the process of making gelatin' d='D. Gelatin is good food because of its high protein' benar='d' />
        <MYsoal no={13} soal='13. “….but it is also beneficial to the consumer …” (par.1). The underlined word means ….' a='A. Dangerous' b='B. Unfaithful' c='C. Additive' d='D. Useful' benar='d' />


        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 14-17 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 316, height: 454, }} source={require('../../../assets/img/unitempat/unitempat(7).png')} />
        </View>


        <MYsoal no={14} soal='14. When you eat a piece of meat or an apple, the use of your front teeth is for ... them.' a='A. Tasting' b='B. tearing' c='C. grinding' d='D. chewing' benar='b' />
        <MYsoal no={15} soal='15. What substance makes the food in the mouth moist?' a='A. the milk' b='B. the starch' c='C. the water' d='D. the saliva' benar='d' />
        <MYsoal no={16} soal='16. The tongue carries the moist food to ...' a='A. the stomach' b='B. the back of the mouth' c='C. the small intestines' d='D. the esophagus' benar='b' />
        <MYsoal no={17} soal='17. Although a person does a headstand, the food that he eats ...' a='A. stays in his mouth' b='B. pushes from his stomach to his mouth' c='C. still moves from his mouth to his stomach' d='D. stays still in his stomach' benar='c' />

        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 18-20 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 316, height: 497, }} source={require('../../../assets/img/unitempat/unitempat(8).png')} />
        </View>

        <MYsoal no={18} soal='18. A plane stays up in the air because...' a='A. the streamlined shape of the plane lets the airflow' b='B. the air under the wing moves slowly' c='C. there is a pressure under its wings' d='D. it moves forward in the sky' benar='c' />
        <MYsoal no={19} soal='19. The plane will ... the earth very fast if the engine fails to run.' a='A. fall down' b='B. jump off' c='C. decrease' d='D. drop on' benar='d' />
        <MYsoal no={20} soal='20. The plane moves forward using.….' a='A. Engines' b='B. Wing' c='C. Thrust' d='D. Air' benar='a' />





        <View style={{ padding: 10, top: 20, margin: 20 }} >
          <TouchableOpacity onPress={sendServer} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
            <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Next</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})