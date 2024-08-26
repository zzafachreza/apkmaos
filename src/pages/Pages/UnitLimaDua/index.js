// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksLimaDua({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksLimaSatu')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Pay Attention</Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }} >Doing Small but Thoughtful Things for a Friend</Text>
                </View>



                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 305, height: 203 }} source={require('../../../assets/img/unitlima/unitlima(payattention1).png')} />
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => Linking.openURL('https://everfi.com/blog/k-12/how-friends-influence-behavior-friendships-and-school-performance/')}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Source: https://everfi.com/blog/k-12/how-friends-influence-behavior-friendships-and-school-performance/
                    </Text>
                </TouchableOpacity>


                <View style={{ padding: 10, margin: 20 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', }} >Doing small but thoughtful things for a friend goes a long way. When your friend is stressed, sad, or feeling a bit down, a small gesture filled with kindness is sure to make them feel just a little bit better. Doing nice things for a friend will not only give them an emotional lift, but also help strengthen your friendship bond. So you benefit as well as your friend.

                    </Text>
                </View>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }} >Preventing Fake News</Text>
                </View>

                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 267, height: 264 }} source={require('../../../assets/img/unitlima/unitlima(payattention2).png')} />
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => Linking.openURL('https://www.marionegri.it/magazine/riconoscere-fake-news')}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Source: https://www.marionegri.it/magazine/riconoscere-fake-news
                    </Text>
                </TouchableOpacity>
                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 325, height: 649 }} source={require('../../../assets/img/unitlima/unitlima(payattention3).png')} />
                </View>



                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksLimaTiga')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksLimaDua;