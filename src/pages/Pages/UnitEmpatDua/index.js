// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksEmpatDua({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaSatu')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Pay Attention</Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ Padding: 10, }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>What are the benefits of friendships?</Text>
                </View>

                <View style={{ Padding: 10, alignItems: 'center', top: 10 }}>
                    <Image style={{ width: 300, height: 165, }} source={require('../../../assets/img/unitempat/unitempat(payattention1).png')} />
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Source: https://www.eng-literature.com/2017/06/10-important-short-questions-answers-bacons-essay-of-friendship.html
                    </Text>
                </TouchableOpacity>

                <View style={{ Padding: 10, alignItems: 'center', margin: 20 }}>
                    <Image style={{ width: 316, height: 329, }} source={require('../../../assets/img/unitempat/unitempat(textbackup).png')} />
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        (Adopted from: https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/friendships/art-20044860)
                    </Text>
                </TouchableOpacity>

                <View style={{ Padding: 10, }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>Avoid Spreading Misinformation</Text>
                </View>


                <View style={{ Padding: 10, alignItems: 'center', }}>
                    <Image style={{ width: 320, height: 126, }} source={require('../../../assets/img/unitempat/unitempat(payattention2).png')} />
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Source: https://www.gov.za/covid-19/resources/fake-news-coronavirus-covid-19
                    </Text>
                </TouchableOpacity>


                <View style={{ Padding: 10, alignItems: 'center', margin: 20 }}>
                    <Image style={{ width: 315, height: 815, }} source={require('../../../assets/img/unitempat/unitempat(payattebtion3).png')} />
                </View>


                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatTiga')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksEmpatDua;