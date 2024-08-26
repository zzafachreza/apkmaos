// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanUnitSatu({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, bottom: 30 }}>
                <View style={{ padding: 10, flexDirection: 'row', top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, alignItems: 'center', bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Unit 1</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <Image style={{ height: 150, resizeMode: 'contain' }} source={require('../../assets/img/potounitsatu.png')} />
                </View>

                <View style={{ padding: 10, bottom: 20 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 30, textAlign: 'center' }} >Unit 1 :</Text>
                </View>

                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 25, bottom: 40, textAlign: 'center' }} >The Best Wealth is Heath</Text>
                </View>


                <View style={{ padding: 10, flex: 1 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, }} >
                        In this unit, you will:
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image style={{ width: 15, height: 15 }} source={require('../../assets/img/cek.png')} />
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, left: 5, }} >
                            Identify the specific information of the label text.
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image style={{ width: 15, height: 15 }} source={require('../../assets/img/cek.png')} />
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, left: 5, }} >
                            Ask and give information about pharmaceutical products, food, and beverage.
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image style={{ width: 15, height: 15 }} source={require('../../assets/img/cek.png')} />
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, left: 5, }} >
                            Identify and select the details of the pharmaceutical products, food, and beverage.
                        </Text>
                    </View>
                </View>

                <View style={{ padding: 10, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatu')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Start</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


            <View style={{ padding: 1, backgroundColor: colors.secondary, }}></View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}  >
                    <Image style={{ width: 38, height: 33, }} source={require('../../assets/img/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{}}  >
                    <Image style={{ width: 28, height: 33, }} source={require('../../assets/img/history.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanAkun')} style={{}}  >
                    <Image style={{ width: 33, height: 33, }} source={require('../../assets/img/profle.png')} />
                </TouchableOpacity>
            </View>



        </View>
    );
}


export default HalamanUnitSatu;