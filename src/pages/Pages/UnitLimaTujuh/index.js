// In App.js in a new project
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView, Alert, } from 'react-native';
import colors from '../../../utils/colors/colors';
import { apiURL, getData, MYAPP } from "../../../utils/localStorage";

export default function KelompokTaksLimaTujuh({ navigation }) {


  const sendServer = () => {

    getData('user').then(u => {

      const kirim = {
        fid_user: u.id,
        unit: 5,
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
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-4 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 308, height: 422, }} source={require('../../../assets/img/unitlima/unitlima(4).png')} />
        </View>
        <MYsoal no={1} soal='1. The text is intended to …' a='A. advertise the website of the Oxford School of English' b='B. promote English courses at Oxford School of English' c='C. inform about the kinds of classes the Oxford School of English' d='D. announce the opening of the classes at the Oxford School of English' benar='b' />
        <MYsoal no={2} soal='2. What should a would-be student do to get the 25% discount?' a='A. Register himself not later than 24 February 2020.' b='B. Call the Oxford School of English on 24 February 2020.' c='C. Email the Oxford School of English on 24 February 2020.' d='D. Come to the Oxford School of English on 24 February 2020.' benar='a' />
        <MYsoal no={3} soal='3. "By experienced trainers," The underlined word means...' a='A. Well-known' b='B. Qualified' c='C. Famous' d='D. Patient' benar='b' />
        <MYsoal no={4} soal='4. From the text, we can conclude that the Oxford School of English provides ...' a='A. Exclusive audio-video sessions' b='B. LCD (Liquid Crystal Display)' c='C. Computer' d='D. Telephone' benar='a' />

        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 5-9 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 328, height: 383, }} source={require('../../../assets/img/unitlima/unitlima(5).png')} />
        </View>

        <MYsoal no={5} soal='5. We know from the text that Neko Pet is …….' a='A. Veterinary hospital' b='B. Café' c='C. Supermarket' d='D. Clinic for pets' benar='d' />
        <MYsoal no={6} soal='6. What is the treatment offered if your pets have sore?' a='A. Bathing' b='B. Trimming' c='C. A vet consultation' d='D. Food and vitamins' benar='c' />
        <MYsoal no={7} soal='7. What is the intention of the writer in composing the text?' a='A. To invite pet lovers.' b='B. To sell services for pets.' c='C. To inform about a pet hotel.' d='D. To describe the grooming package.' benar='b' />
        <MYsoal no={8} soal='8. The word “trimming” in the text is closest in meaning to …' a='A. Removing' b='B. Cutting' c='C. Balancing' d='D. Moving' benar='b' />
        <MYsoal no={9} soal='9. The following are the grooming treatments, except…….' a='A. Trimming' b='B. Grooming package' c='C. Nail trimming' d='D. Facial treatment' benar='d' />


        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 10-13 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 328, height: 328, }} source={require('../../../assets/img/unitlima/unitlima(6).png')} />
        </View>

        <MYsoal no={10} soal='10. What is the text about?' a='A. An advertisement for an opening of a store.' b='B. An announcement of a store bankruptcy.' c='C. An advertisement about a big sale.' d='D. A notice for a clothing line.' benar='a' />
        <MYsoal no={11} soal='11. What products does the shop sell?' a='A. Cheaper than the normal price.' b='B. The same as the normal price.' c='C. Higher than the normal price.' d='D. At a big discounted price.' benar='d' />
        <MYsoal no={12} soal='12. How long does the program run?' a='A. A week' b='B. A month' c='C. Fortnight' d='D. Twenty days' benar='d' />
        <MYsoal no={13} soal='13. What is the purpose of the advertisement?' a='A. To tell people how big the items sold are discounted.' b='B. To persuade people to come to the closing ceremony.' c='C. To persuade people to come during the opening month.' d='D. To inform people of the name of the new clothing line in the town.' benar='c' />

        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 14-16 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 296, height: 378, }} source={require('../../../assets/img/unitlima/unitlima(7).png')} />
        </View>

        <MYsoal no={14} soal='14. The main ingredient of the snack is...' a='A. Flour' b='B. Wheat' c='C. Flavors' d='D. Potatoes' benar='d' />
        <MYsoal no={15} soal='15. “No artificial flavors or preservatives.“ The underlined word has a similar meaning to ...' a='A. Chemical' b='B. Materials' c='C. Additives' d='D. Taste' benar='d' />
        <MYsoal no={16} soal='16. The snack comes in many…….' a='A. Colors' b='B. Shapes' c='C. Flavors' d='D. Packages with various sizes' benar='d' />
        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 17-20 refer to the following text.</Text>
        </View>


        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 322, height: 376, }} source={require('../../../assets/img/unitlima/unitlima(8).png')} />
        </View>


        <MYsoal no={17} soal='17. What is the writer’s intention in writing the text?' a='A. To persuade people to buy at soccer store' b='B. To tell how to build a soccer stores' c='C. To give information about the product' d='D. To inform the customers about the products' benar='a' />
        <MYsoal no={18} soal='18. What can people probably find in the store?' a='A. Guitars' b='B. Balls' c='C. Refrigerators' d='D. Book' benar='b' />
        <MYsoal no={19} soal='19. From the text, we can conclude that the store…….' a='A. opens every day' b='B. is located at its old address' c='C. sells products at high prices' d='D. is closed on Sunday afternoons' benar='a' />
        <MYsoal no={20} soal='20. “Affordable” What is the closest meaning of “affordable”?' a='A. Low-cost' b='B. Luxurious' c='C. Up to date' d='D. Glamorous' benar='a' />



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