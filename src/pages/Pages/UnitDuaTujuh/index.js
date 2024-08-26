// In App.js in a new project
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView, Alert, } from 'react-native';
import colors from '../../../utils/colors/colors';
import { apiURL, getData, MYAPP } from "../../../utils/localStorage";

export default function KelompokTaksDuaTujuh({ navigation }) {


  const sendServer = () => {

    getData('user').then(u => {

      const kirim = {
        fid_user: u.id,
        unit: 2,
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
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-5 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 333, height: 579, }} source={require('../../../assets/img/unitdua/unitdua(pempek).png')} />
        </View>

        <MYsoal no={1} soal="1. What is the purpose of the text?"
          a="A. Describing pempek Palembang"
          b="B. Entertaining the reader with pempek Palembang"
          c="C. Persuading the reader to cook pempek Palembang"
          d="D. Telling the reader how to cook pempek Palembang"
          benar="d"
        />

        <MYsoal no={2} soal="2. To cook pempek Palembang, you need …"
          a="A. Ginger"
          b="B. Turmeric"
          c="C. Clove garlic"
          d="D. Onion"
          benar="c"
        />

        <MYsoal no={3} soal="3. “Boil the water using a saucepan, and cook the pempek ... ”
The best adverb to complete the instruction is ..."
          a="A. for 15 minutes"
          b="B. when finish"
          c="C. when serving"
          d="D. over the whole oven"
          benar="a"
        />

        <MYsoal no={4} soal="4. The following instruction is to be found in the procedure above ..."
          a="A. Stir the dough slowly"
          b="B. Deep fry the cooked pempek"
          c="C. Add a spoonful of sugar to the dough"
          d="D. Add 3 tablespoons of salt"
          benar="a"
        />

        <MYsoal no={5} soal="5. Who will be more interested in trying the recipe?"
          a="A. Vegans"
          b="B. Meat lovers"
          c="C. Seafood lovers"
          d="D. Fast food lovers"
          benar="c"
        />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 5-10 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 325, height: 225, }} source={require('../../../assets/img/unitdua/unitdua(handnatizer).png')} />
        </View>

        <MYsoal no={6} soal="6. The text is useful for the readers to …"
          a="A. be informed how to wash our hands using soap"
          b="B. know how to clean hands using hand sanitizer"
          c="C. how to produce a hand sanitizer"
          d="D. be informed on how to clean the thumbs"
          benar="b"
        />


        <MYsoal no={7} soal='7. What should we do after we clean the fingernails using hand sanitizer based on the procedure above?' a='A. We should clean the thumbs' b='B. We should rub until dry' c='C. We should clean our wrists' d='D. We should disinfect the hands' benar='a' />
        <MYsoal no={8} soal='8. What is the first step of cleaning hands using hand sanitizer?' a='A. Rubbing until dry' b='B. Cleaning the wrists' c='C. Cleaning the back of hands' d='D. Cleaning palm to palm' benar='d' />
        <MYsoal no={9} soal='9. What is the last stage of the procedure above?' a='A. Cleaning palm to palm' b='B. Disinfecting hands' c='C. Cleaning the wrists' d='D. Rubbing until dry' benar='b' />
        <MYsoal no={10} soal='10. The following is included in the procedure above, except …' a='A. Cleaning palm to palm' b='B. Rubbing until dry' c='C. Cleaning the hair' d='D. Cleaning the wrists' benar='c' />


        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-15 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 340, height: 574, }} source={require('../../../assets/img/unitdua/unitdua(baksosapi).png')} />
        </View>
        <MYsoal no={11} soal='11. The text above is called …' a='A. Descriptive text' b='B. Narrative text' c='C. Report text' d='D. Procedure text' benar='d' />
        <MYsoal no={12} soal='12. The goal of the text above is to tell about…' a='A. How to cook Indonesian meatball soup' b='B. How to bake a cake' c='C. How to make cheesecake' d='D. How to cook the soup' benar='a' />
        <MYsoal no={13} soal='13. The following are the ingredients, except …' a='A. Clove garlic' b='B. Cheese' c='C. Beef' d='D. Oil' benar='b' />
        <MYsoal no={14} soal='14. How much white peppercorns do we need to cook meatball soup?' a='A. 1 tablespoon' b='B. 2 tablespoons' c='C. 3 tablespoons' d='D. 4 tablespoons' benar='a' />
        <MYsoal no={15} soal='15. Which of the following procedures is not true?' a='A. Wash the beef thoroughly.' b='B. Crush the garlic.' c='C. Put two spoonfuls of vanilla.' d='D. Add salt and the beef cube/MSG.' benar='c' />
        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 16-20 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 341, height: 653, }} source={require('../../../assets/img/unitdua/unitdua(salbalterasi).png')} />
        </View>


        <MYsoal no={16} soal='16. According to the text, what should we do to the dried shrimp?' a='A. Wash them' b='B. Remove the seeds' c='C. Cut them into pieces' d='D. Cook them' benar='d' />
        <MYsoal no={17} soal='17. After reading the text, the readers will be able to make ………….' a='A. Indonesian Chili sauce with shrimp paste' b='B. Indonesian shrimp paste' c='C. Food' d='D. Dessert' benar='a' />
        <MYsoal no={18} soal='18. What is the last step of the procedure above?' a='A. Frying the chili' b='B. Stir in the lime juice' c='C. Boil the water' d='D. Cook the dried shrimp paste' benar='b' />
        <MYsoal no={19} soal='19. Which of the following procedures is true?' a='A. Put slices of lemon in the glass.' b='B. Wash the shrimp paste.' c='C. Add the cooked shrimp paste to a pestle' d='D. Boil the shrimp paste' benar='c' />
        <MYsoal no={20} soal='20. The following are the ingredients, except …' a='A. Egg' b='B. Garlic' c='C. Chili' d='D. Oil' benar='a' />





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