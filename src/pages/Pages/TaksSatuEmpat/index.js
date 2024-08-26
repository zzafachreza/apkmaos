// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';

function KelompokTaksSatuEmpat({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuTiga')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 1 </Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }}  >Paracetamol</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center', bottom: 30 }}   >
                    <Image style={{ width: 318, height: 244, }} source={require('../../../assets/img/takssatu(18).png')} />
                </View>



                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >Description{'\n'}
                        Recommended to help relieve pain associated with: Headaches Dental pain Backache{'\n'}Muscle pain Osteoarthritis Period pain{'\n'}Neuralgia Rheumatic Pain Pfizer Paracetamol{'\n'}can also be used to treat aches, pains and{'\n'}fever associated with colds and flu. Film{'\n'}coated tablets means they are easy to{'\n'}swallow. Pfizer Paracetamol is gentle on the{'\n'}stomach and is suitable for those with a{'\n'}sensitive stomach or stomach disorders.{'\n'}Although safe for breastfeeding mothers,{'\n'}small amounts can be found in breastmilk.{'\n'}Therefore only take when necessary.{'\n'}
                        Directions for Use{'\n'}
                        For oral use only.{'\n'}
                        Swallow tablets with water.{'\n'}
                        Adults:{'\n'}
                        Take 2 tablets every 4 hours as required.{'\n'}
                        Do not take more than 8 tablets in 24 hours.{'\n'}
                        Children aged 6-12 years:{'\n'}
                        Give 1/2 to 1 tablet every 4 hours as required.{'\n'}
                        Not more than 4 tablets should be given in 24 hours.{'\n'}
                        Active Ingredients{'\n'}
                        Each tablet contains:{'\n'}
                        500mg Paracetamol{'\n'}
                        Warnings{'\n'}
                        Keep out of reach and sight of children.{'\n'}
                        Please read the accompanying instructions{'\n'}carefully before using this product.{'\n'}
                        Only use this product as intended, in the event{'\n'}of misuse, seek medical advice.{'\n'}
                        Do not exceed the recommended dose. Please{'\n'}seek medical attention if you take too many{'\n'}tablets, even if you feel well.{'\n'}
                        Allergies{'\n'}
                        Do not use this product if you are allergic or{'\n'}have a hypersensitivity to any of the{'\n'}ingredients.{'\n'}
                        Age Restriction{'\n'}
                        This product is not suitable for children under{'\n'}6 years of age.{'\n'}
                        Precautions For Special Groups{'\n'}
                        For advice on the use of this product in{'\n'}pregnancy, please consult your doctor or{'\n'}pharmacist.{'\n'}
                        You can take this product whilst{'\n'}breastfeeding.{'\n'}
                        Please consult your doctor or pharmacist{'\n'}before using this product if you are taking any{'\n'}other medication or if you have a medical{'\n'}condition.{'\n'}
                        Storage{'\n'}
                        Store below 25°C.{'\n'}
                        Product Specific {'\n'}
                        Do not take any other paracetamol containing products.{'\n'}
                        Consult your doctor if symptoms persist.{'\n'}
                        Prolonged use without medical supervision{'\n'}may be harmful.</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => Linking.openURL('https://lucanpharmacy.com/pfizer-paracetamol-500mg-film-coated-tablets-24-tablets-p/')}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://lucanpharmacy.com/pfizer-paracetamol-500mg-film-coated-tablets-24-tablets-p/
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
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuLima')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksSatuEmpat;