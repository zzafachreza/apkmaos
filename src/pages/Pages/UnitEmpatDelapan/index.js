// In App.js in a new project

import React, { useState, Component, } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import Modal from "react-native-modal";


function KelompokTaksEmpatDelapan({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>










            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatTujuh')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Reflect</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center', }}  >Reflection</Text>
                </View>





                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >In this chapter, I learnt</Text>
                </View>

                <TextInput style={{ margin: 20, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, height: 76, bottom: 30 }} />



                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >The activities I liked most were</Text>
                </View>

                <TextInput style={{ margin: 20, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, height: 76, bottom: 30 }} />



                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >The tasks I found most challenging were</Text>
                </View>

                <TextInput style={{ margin: 20, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, height: 76, bottom: 30 }} />



                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left', left: 25 }}  >What I should improve upon is</Text>
                </View>

                <TextInput style={{ margin: 20, backgroundColor: '#f5f5f5', borderRadius: 10, fontFamily: 'Alata-Regular', padding: 10, color: colors.black, borderWidth: 1, borderColor: colors.secondary, height: 76, bottom: 30 }} />




                <View style={{ padding: 10, margin: 20, bottom: 0 }} >
                    <TouchableOpacity onPress={() => {
                        alert('Completed!');
                        navigation.replace('HalamanHome');
                    }} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Done</Text>
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


export default KelompokTaksEmpatDelapan;