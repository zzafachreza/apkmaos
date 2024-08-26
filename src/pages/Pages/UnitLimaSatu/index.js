// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksLimaSatu({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitLima')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let's Start </Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }} >What is the promotion?</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 309, height: 213 }} source={require('../../../assets/img/unitlima/unitlima(letstart1).png')} />
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => Linking.openURL('https://www.paperdaisycrafting.co.uk/2021/03/my-buy-one-get-one-free-sale-just-got.html')}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://www.paperdaisycrafting.co.uk/2021/03/my-buy-one-get-one-free-sale-just-got.html
                    </Text>
                </TouchableOpacity>

                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 321, height: 164 }} source={require('../../../assets/img/unitlima/unitlima(letstart2).png')} />
                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksLimaDua')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksLimaSatu;