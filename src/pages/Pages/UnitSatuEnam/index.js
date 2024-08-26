// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';

function KelompokTaksSatuEnam({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuLima')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 3</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }}  >Vaseline Lip Therapy</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center', bottom: 30 }}   >
                    <Image style={{ width: 289, height: 289, }} source={require('../../../assets/img/takssatu(20).png')} />
                </View>



                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >Description{'\n'}
                        Vaseline Lip Therapy Petroleum Jelly, Rosy{'\n'}Lips. The skin on your lips is thinner than rest{'\n'}of your body. It lacks the top protective layer{'\n'}and so is more susceptible to dryness.{'\n'}Vaseline Lip Therapy instantly softens and{'\n'}soothes helping to repair, not just coat, your{'\n'}lip barrier. Made with vaseline petroleum jelly,{'\n'}it locks in moisture for beautiful healthy lips.{'\n'}
                        VASELINE LIP TIN BALM: Vaseline lip tin{'\n'}therapy protects and relieves dry and{'\n'}chapped lips while locking in moisture to help{'\n'}keep them healthy. This lipstick instantly{'\n'}softens, soothes, and hydrates dry lips.{'\n'}
                        LIP PROTECTION: This lip tin therapy protects{'\n'}lips from UVA and UVB rays with SPF 15, This{'\n'}lip balm is dermatologically tested and is the{'\n'}best lip balm for curing dry lips.{'\n'}
                        FOR DRY LIPS: This Vaseline lip is a non-sticky,{'\n'}non-greasy formula that locks in moisture{'\n'}and helps lips recover from discomfort.{'\n'}
                        NATURAL INGREDIENTS: Vaseline lip therapy{'\n'}balm sticks contain triple-purified vaseline{'\n'}petroleum jelly, Contains rose oils, and sweet{'\n'}almonds, to calm and soothe dry irritated{'\n'}skin, and Pro-Vitamin A and E for their{'\n'}antioxidant properties.{'\n'}
                        Key Features :{'\n'}
                        Protects and relieves dry and chapped lips,{'\n'}while locking in moisture to help keep them{'\n'}healthy{'\n'}
                        Instantly softens and soothes dry lips{'\n'}
                        Locks in moisture to help lips recover from{'\n'}discomfort{'\n'}
                        Made with rose oils, sweet almonds and{'\n'}triple-purified Vaseline Petroleum Jelly{'\n'}
                        Clear lip balm gives lips a natural, glossy{'\n'}shine.{'\n'}
                        DIRECTIONS{'\n'}
                        Apply the Vaseline Lip Therapy Original to the{'\n'}lips when they feel dry or chapped. This can{'\n'}be done as often as it is needed. Caution: Do{'\n'}not apply to irritated or damaged skin. Stop{'\n'}use if irritation develops. As we are always{'\n'}looking to improve our products, our{'\n'}formulations change from time to time, so{'\n'}please always check the product packaging{'\n'}before use. For External use only. Store in a{'\n'}cool, dry place away from direct sunlight.{'\n'}
                        INGREDIENTS{'\n'}
                        Petrolatum, Rosa Damascena Flower Oil,{'\n'}Prunus Amygdalus Dulcis Oil, Aroma, Linalool,{'\n'}Ci 73360, Ci 77891.

                    </Text>
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => Linking.openURL('https://www.feelunique.com/p/Vaseline-Lip-Therapy-Petroleum-Jelly-Rosy-Lips-4-x-20g')}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://www.feelunique.com/p/Vaseline-Lip-Therapy-Petroleum-Jelly-Rosy-Lips-4-x-20g
                    </Text>
                </TouchableOpacity>

                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Brand of Drug</Text>
                </View>

                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 40 }} placeholder='Statement' placeholderTextColor={'gray'} />


                <View style={{ padding: 10, bottom: 40 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Name of Drug</Text>
                </View>


                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 40 }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 80 }} placeholder='Statement' placeholderTextColor={'gray'} />


                <View style={{ padding: 10, bottom: 80 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Use(s)</Text>
                </View>


                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 80 }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 120 }} placeholder='Statement' placeholderTextColor={'gray'} />



                <View style={{ padding: 10, bottom: 120 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Content/Amount</Text>
                </View>


                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 120 }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 160 }} placeholder='Statement' placeholderTextColor={'gray'} />


                <View style={{ padding: 10, bottom: 160 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Ingredients</Text>
                </View>


                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 160 }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 200 }} placeholder='Statement' placeholderTextColor={'gray'} />


                <View style={{ padding: 10, bottom: 200 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'left', left: 25 }}  >Direction to Store</Text>
                </View>


                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 200 }} placeholder='Available?' placeholderTextColor={'gray'} />
                <TextInput style={{ margin: 25, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, bottom: 240 }} placeholder='Statement' placeholderTextColor={'gray'} />



                <View style={{ padding: 10, margin: 20, bottom: 250 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuTujuh')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksSatuEnam;