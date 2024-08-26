// In App.js in a new project
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView, Alert, } from 'react-native';
import colors from '../../../utils/colors/colors';
import { apiURL, getData, MYAPP } from "../../../utils/localStorage";

export default function KelompokTaksSatuTujuh({ navigation }) {


  const sendServer = () => {

    getData('user').then(u => {

      const kirim = {
        fid_user: u.id,
        unit: 1,
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
          <Image style={{ width: 314, height: 501, }} source={require('../../../assets/img/takssatu(21).png')} />
        </View>
        <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
          onPress={() => Linking.openURL('Adopted from: https://www.google.com/url?sa=i&url=https%3A%2F%2Fbarsottijuice.com%2F&psig=AOvVaw3Yafj1RgsQSM6jbvvz_475&ust=1670811758069000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDQ-PzA8PsCFQAAAAAdAAAAABAN')}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://www.google.com/url?sa=i&url=https%3A%2F%2Fbarsottijuice.com%2F&psig=AOvVaw3Yafj1RgsQSM6jbvvz_475&ust=1670811758069000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDQ-PzA8PsCFQAAAAAdAAAAABAN
          </Text>
        </TouchableOpacity>



        <MYsoal no={1} soal="1. The text is useful for the readers to ……."
          a="A. Find out the benefits of the product"
          b="B. Know the detailed information about the product"
          c="C. Obtain the nutrition information per spoon serving"
          d="D. Get detailed information on the nutrition of the product"
          benar="b"
        />

        <MYsoal no={2} soal="2. What ingredients are not contained in the product?"
          a="A. Freshly squeezed lemon juice"
          b="B. Organic cane sugar"
          c="C. Milk"
          d="D. Filtered water"
          benar="c"
        />

        <MYsoal no={3} soal="3. From the text, we can conclude that the product ……."
          a="A. is rich of vitamin C"
          b="B. contains high cholesterol"
          c="C. is not good for children"
          d="D. is excellent on zinc"
          benar="a"
        />

        <MYsoal no={4} soal="4. What should we pay attention to about the product?"
          a="A. The children cannot consume the product"
          b="B. Shake before consuming"
          c="C. Shake after consuming"
          d="D. The product could be added sugar before consuming"
          benar="b"
        />


        <MYsoal no={5} soal="5. How many liters of the product above?"
          a="A. 2.40 L"
          b="B. 1.40 L"
          c="C. 1.89 L"
          d="D. 1.98 L"
          benar="c"
        />


        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 6-10 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 341, height: 217, }} source={require('../../../assets/img/takssatu(22).png')} />
        </View>

        <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
          onPress={() => Linking.openURL('https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=867a4e22-e15a-4248-bd98-ef90376adbf6&type=display')}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=867a4e22-e15a-4248-bd98-ef90376adbf6&type=display
          </Text>
        </TouchableOpacity>

        <MYsoal no={6} soal="6. What is the text about?"
          a="A. The benefits of the product."
          b="B. The drug facts of the product"
          c="C. The nutrition facts of the product"
          d="D. The ingredients of the product"
          benar="b"
        />

        <MYsoal no={7} soal="7. What is the brand of the product?"
          a="A. Equate"
          b="B. Acne Treatment Body Pads"
          c="C. 75 Pads"
          d="D. Drug facts"
          benar="a"
        />

        <MYsoal no={8} soal="8. What is the name of the drug?"
          a="A. Equate"
          b="B. Acne Treatment Body Pads"
          c="C. 75 Pads"
          d="D. Drug facts"
          benar="b"
        />

        <MYsoal no={9} soal="9. What if people have a question about the product?"
          a="A. Send the email"
          b="B. Visit the factory of the product"
          c="C. Send the letter to the factory address"
          d="D. Call the telephone number above"
          benar="d"
        />

        <MYsoal no={10} soal="10. The product is used for…………"
          a="A. dry skin"
          b="B. sensitive skin"
          c="C. acne skin"
          d="D. oily skin"
          benar="d"
        />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-15 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 334, height: 568, }} source={require('../../../assets/img/takssatu(23).png')} />
        </View>
        <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
          onPress={() => Linking.openURL('https://meadowsfrozencustard.com/portfolio-item/original-frozen-custard-mix-20-overrun/')}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://meadowsfrozencustard.com/portfolio-item/original-frozen-custard-mix-20-overrun/
          </Text>
        </TouchableOpacity>

        <MYsoal no={11} soal="11. Why does the writer write the label?"
          a="A. To give detailed information about the meadows"
          b="B. To show the ingredient of the meadows"
          c="C. To tell us how to use the product"
          d="D. To inform how to consume the product of the product"
          benar="a"
        />
        <MYsoal no={12} soal="12. Which ingredient is excluded from the meadows?"
          a="A. Guar gum"
          b="B. Sugar"
          c="C. Milk"
          d="D. Apple"
          benar="d"
        />
        <MYsoal no={13} soal="13. From the label above, we can assume that the product……."
          a="A. contains much cholesterol"
          b="B. contains calories"
          c="C. contains the honey"
          d="D. contains oil"
          benar="b"
        />
        <MYsoal no={14} soal="14. How many are acne treatment body pads contained in the product above?"
          a="A. 10 pads"
          b="B. 6 pads"
          c="C. 75 pads"
          d="D. 2 pads"
          benar="c"
        />
        <MYsoal no={15} soal="15. What can you tell about the product?"
          a="A. It tastes delicious"
          b="B. It contains many artificial flavors"
          c="C. It has no vitamin"
          d="D. It contains vitamin"
          benar="d"
        />
        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 16-20 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 336, height: 334, }} source={require('../../../assets/img/takssatu(24).png')} />
        </View>
        <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
          onPress={() => Linking.openURL('https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7be4bef4-b59e-3e19-e053-2a91aa0a6949&type=display')}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7be4bef4-b59e-3e19-e053-2a91aa0a6949&type=display
          </Text>
        </TouchableOpacity>

        <MYsoal no={16} soal="16. What is the brand of the product?"
          a="A. Hand Sanitizer"
          b="B. Instant Hand Sanitizer"
          c="C. Assured"
          d="D. Kill 99% of germs"
          benar="c"
        />
        <MYsoal no={17} soal="17. What is the name of the product?"
          a="A. Instant Hand Sanitizer"
          b="B. Assured"
          c="C. Kill 99% of germs"
          d="D. Aloe Vera & Moisturizers"
          benar="a"
        />
        <MYsoal no={18} soal="18. The text is useful for the readers to……."
          a="A. know the detailed information about the product"
          b="B. the benefit of the product"
          c="C. the ingredients of the product"
          d="D. the nutrition facts of the product"
          benar="a"
        />
        <MYsoal no={19} soal="19. This product is useful for……."
          a="A. Getting rid of red eyes"
          b="B. Handwashing to decrease bacteria on the skin"
          c="C. Handwashing increases bacteria on the skin"
          d="D. Getting rid of the headache"
          benar="b"
        />
        <MYsoal no={20} soal="20. What should we pay attention to the product?"
          a="A. We may take the product as the safety seal is broken."
          b="B. The children should not use this product."
          c="C. The children may consume the product."
          d="D. This product cannot be used in the eyes."
          benar="d"
        />


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