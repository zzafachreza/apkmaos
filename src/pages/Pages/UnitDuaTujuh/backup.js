// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksDuaTujuh({ navigation }) {



    const [skor1, jawabannomorSatu] = useState(0);
    const [skor2, jawabannomorDua] = useState(0);
    const [skor3, jawabannomorTiga] = useState(0);
    const [skor4, jawabannomorEmpat] = useState(0);
    const [skor5, jawabannomorLima] = useState(0);
    const [skor6, jawabannomorEnam] = useState(0);
    const [skor7, jawabannomorTujuh] = useState(0);
    const [skor8, jawabannomorDelapan] = useState(0);
    const [skor9, jawabannomorSembilan] = useState(0);
    const [skor10, jawabannomorSepuluh] = useState(0);
    const [skor11, jawabannomorSebelas] = useState(0);
    const [skor12, jawabannomorDuabelas] = useState(0);
    const [skor13, jawabannomorTigabelas] = useState(0);
    const [skor14, jawabannomorEmpatbelas] = useState(0);
    const [skor15, jawabannomorLimabelas] = useState(0);
    const [skor16, jawabannomorEnambelas] = useState(0);
    const [skor17, jawabannomorTujuhbelas] = useState(0);
    const [skor18, jawabannomorDelapanbelas] = useState(0);
    const [skor19, jawabannomorSembilanbelas] = useState(0);
    const [skor20, jawabannomorDuapuluh] = useState(0);






    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>



            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksDuaEnam')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Final Task/{'\n'}
                        Activities</Text>
                </View>
            </View>

            <ScrollView>
                <View>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-5 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 333, height: 579, }} source={require('../../../assets/img/unitdua/unitdua(pempek).png')} />
                </View>


                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. What is the purpose of the text?</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Describing pempek Palembang</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Entertaining the reader with pempek Palembang</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Persuading the reader to cook pempek Palembang</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Telling the reader how to cook pempek Palembang</Text>

                        </View>




                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. To cook pempek Palembang, you need …</Text>
                    </View>

                    <View style={{ padding: 10 }}>





                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Ginger</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Turmeric</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Clove garlic</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Onion</Text>
                        </View>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. “Boil the water using a saucepan, and cook the pempek ... ”
                            The best adverb to complete the instruction is ...</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. for 15 minutes</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. when finish</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. when serving</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. over the whole oven</Text>
                        </View>




                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. The following instruction is to be found in the procedure above ...</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Stir the dough slowly</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Deep fry the cooked pempek</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Add a spoonful of sugar to the dough</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Add 3 tablespoons of salt</Text>
                        </View>






                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. Who will be more interested in trying the recipe?</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Vegans</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Meat lovers</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Seafood lovers</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Fast food lovers</Text>
                        </View>



                    </View>
                </View>


                <View style={{}}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 5-10 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image style={{ width: 325, height: 225, }} source={require('../../../assets/img/unitdua/unitdua(handnatizer).png')} />
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>6. The text is useful for the readers to …</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnam(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. be informed how to wash our hands using soap</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnam(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. know how to clean hands using hand sanitizer</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnam(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. how to produce a hand sanitizer</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnam(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. be informed on how to clean the thumbs</Text>
                        </View>




                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>7. What should we do after we clean the fingernails using hand sanitizer based on the procedure above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuh(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. We should clean the thumbs</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. We should rub until dry</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. We should clean our wrists</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. We should disinfect the hands</Text>
                        </View>





                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>8. What is the first step of cleaning hands using hand sanitizer?</Text>
                    </View>

                    <View style={{ padding: 10 }}>





                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapan(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Rubbing until dry</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapan(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Cleaning the wrists</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapan(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Cleaning the back of hands</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapan(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Cleaning palm to palm</Text>
                        </View>



                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>9. What is the last stage of the procedure above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilan(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Cleaning palm to palm</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilan(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Disinfecting hands</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilan(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Cleaning the wrists</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilan(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Rubbing until dry</Text>
                        </View>




                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>10. The following is included in the procedure above, except …</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSepuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Cleaning palm to palm</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSepuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Rubbing until dry</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSepuluh(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Cleaning the hair</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSepuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Cleaning the wrists</Text>
                        </View>




                    </View>
                </View>




                <View style={{}}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-15 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image style={{ width: 340, height: 574, }} source={require('../../../assets/img/unitdua/unitdua(baksosapi).png')} />
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>11. The text above is called …</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSebelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Descriptive text</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSebelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Narrative text</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSebelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Report text</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSebelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Procedure text</Text>
                        </View>





                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>12. The goal of the text above is to tell about…</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>

                            <TouchableOpacity onPress={() => {
                                jawabannomorDuabelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. How to cook Indonesian meatball soup</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. How to bake a cake</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. How to make cheesecake</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. How to cook the soup</Text>
                        </View>



                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>13. The following are the ingredients, except …</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>

                            <TouchableOpacity onPress={() => {
                                jawabannomorTigabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Clove garlic</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTigabelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Cheese</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTigabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Beef</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTigabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Oil</Text>
                        </View>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>14. How much white peppercorns do we need to cook meatball soup?</Text>
                    </View>


                    <View style={{ padding: 10 }}>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpatbelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. 1 tablespoon</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpatbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. 2 tablespoons</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpatbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. 3 tablespoons</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpatbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. 4 tablespoons</Text>
                        </View>





                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>15. Which of the following procedures is not true?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLimabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Wash the beef thoroughly.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLimabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Crush the garlic.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLimabelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Put two spoonfuls of vanilla.</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLimabelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Add salt and the beef cube/MSG.</Text>
                        </View>


                    </View>
                </View>




                <View style={{}}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 16-20 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image style={{ width: 341, height: 653, }} source={require('../../../assets/img/unitdua/unitdua(salbalterasi).png')} />
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>16. According to the text, what should we do to the dried shrimp?</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnambelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Wash them</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnambelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Remove the seeds</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnambelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Cut them into pieces</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEnambelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Cook them</Text>
                        </View>


                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>17. After reading the text, the readers will be able to make ………….</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuhbelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Indonesian Chili sauce with shrimp paste</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuhbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Indonesian shrimp paste</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuhbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Food</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTujuhbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Dessert</Text>
                        </View>



                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>18. What is the last step of the procedure above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Frying the chili</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapanbelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Stir in the lime juice</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Boil the water</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDelapanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Cook the dried shrimp paste</Text>
                        </View>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>19. Which of the following procedures is true?</Text>
                    </View>

                    <View style={{ padding: 10 }}>





                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Put slices of lemon in the glass.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Wash the shrimp paste.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilanbelas(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Add the cooked shrimp paste to a pestle</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSembilanbelas(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Boil the shrimp paste</Text>
                        </View>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>20. The following are the ingredients, except …</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuapuluh(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Egg</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuapuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Garlic</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuapuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Chili</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDuapuluh(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Oil</Text>
                        </View>




                    </View>
                </View>



                <View style={{ padding: 10 }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}>Total SKOR :  {skor1 + skor2 + skor3 + skor4 + skor5 + skor6 + skor7 + skor8 + skor9 + skor10 + skor11 + skor12 + skor13 + skor14 + skor15 + skor16 + skor17 + skor18 + skor19 + skor20}</Text>


                </View>

                <View style={{ padding: 10, top: 20, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuDelapan')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksDuaTujuh;