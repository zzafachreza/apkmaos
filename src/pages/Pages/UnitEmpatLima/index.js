

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksEmpatima({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaEmpat')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 2</Text>
                </View>
            </View>





            <ScrollView>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 325, height: 207, }} source={require('../../../assets/img/unitempat/unitempat(2).png')} />
                </View>

                <View style={{ padding: 10, top: 20 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>        Antibiotic is kind of compounds both natural and synthetic, which has the function of pressing or stopping a process of an organism’s growth, particularly bacteria. Antibiotics are used to treat bacterial infections and as a tool for genetic engineering in biotechnology. Antibiotic works as pesticides by pressing or breaking the chain of bacteria’s metabolism. Nevertheless, antibiotic is different from disinfectant in the process to kills bacteria. Disinfectant kills bacteria by creating an unnatural environment for germs to live in.
                        In terms of treatment, antibiotics are dubbed as “magic bullet “because antibiotic kills instantly without injuring their sufferers. Although antibiotic is suitable for medication, it is ineffective in handling infection caused by viruses, fungi, or other nonbacterial. Antibiotic has diverse types based on their effectiveness against bacteria. Some antibiotics target gram-negative or gram-positive bacteria, and some have a broader spectrum. The effectiveness depends on the infection’s location and the antibiotic’s ability to reach the infection’s location. Based on how to use, antibiotics are divided into two that are oral antibiotics and antibiotic intradermal. An oral antibiotic is used by mouth, while intradermal is used through anus. Intradermal antibiotic is used for serious cases.



                    </Text>
                </View>



                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>Questions :</Text>
                </View>


                <View>

                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. What is the best title for the text above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. What kind of text is above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. What is the purpose of the text above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. What is the main idea of the second paragraph?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. What is the function of antibiotics?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatEnam')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>





            <View style={{ padding: 1, backgroundColor: colors.secondary, }}></View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}  >
                    <Image style={{ width: 38, height: 33, }} source={require('../../../assets/img/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{}}  >
                    <Image style={{ width: 28, height: 33, }} source={require('../../../assets/img/history.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanAkun')} style={{}}  >
                    <Image style={{ width: 33, height: 33, }} source={require('../../../assets/img/profle.png')} />
                </TouchableOpacity>
            </View>



        </View>
    );
}


export default KelompokTaksEmpatima;