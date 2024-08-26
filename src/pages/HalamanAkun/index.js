// In App.js in a new project

import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";
import axios from "axios";
import { apiURL, getData, MYAPP, storeData } from "../../utils/localStorage";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


function HalamanAkun({ navigation, route }) {

    const [kirim, setKirim] = useState({})

    useEffect(() => {
        getData('user').then(u => {
            setKirim({
                id: u.id,
                nama_lengkap: u.nama_lengkap,
                telepon: u.telepon,
                email: u.email,
                kelas: u.kelas,
                alamat: u.alamat,
                foto_user: u.foto_user,
                newfoto_user: null
            })

        })

    }, [])


    const sendServer = () => {
        console.log(kirim);
        axios.post(apiURL + 'update_profile', kirim).then(res => {
            console.log(res.data);
            Alert.alert(MYAPP, res.data.message);
            storeData('user', res.data.data);
            navigation.replace('HalamanHome')
        })
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>





            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Account</Text>
                </View>
            </View>
            <ScrollView>


                <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity onPress={() => {
                        launchImageLibrary({
                            includeBase64: true,
                            quality: 0.3,
                            mediaType: "photo",
                            maxWidth: 100,
                            maxHeight: 100,

                        }, response => {


                            setKirim({
                                ...kirim,
                                newfoto_user: `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
                            });
                        });
                    }}  >
                        <View style={{
                            width: 150,
                            height: 150,
                            borderWidth: 5,
                            borderColor: colors.primary,
                            borderRadius: 75,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image style={{ width: 150, height: 150, }} source={{
                                uri: kirim.newfoto_user !== null ? kirim.newfoto_user : kirim.foto_user,
                            }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 15 }}>Nama</Text>
                </View>
                <TextInput style={{ margin: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.secondary, borderRadius: 10, color: colors.black, fontFamily: 'Alata-Regular', paddingLeft: 10, }} value={kirim.nama_lengkap} onChangeText={x => setKirim({ ...kirim, nama_lengkap: x })} placeholderTextColor='gray' />




                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 15 }}>E-mail</Text>
                </View>
                <TextInput style={{ margin: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.secondary, borderRadius: 10, color: colors.black, fontFamily: 'Alata-Regular', paddingLeft: 10, }} value={kirim.email} onChangeText={x => setKirim({ ...kirim, email: x })} placeholderTextColor='gray' />


                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 15 }}>Phone Number</Text>
                </View>
                <TextInput style={{ margin: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.secondary, borderRadius: 10, color: colors.black, fontFamily: 'Alata-Regular', paddingLeft: 10, }} value={kirim.telepon} onChangeText={x => setKirim({ ...kirim, telepon: x })} placeholderTextColor='gray' />




                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 15 }}>Adress</Text>
                </View>
                <TextInput style={{ margin: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.secondary, borderRadius: 10, color: colors.black, fontFamily: 'Alata-Regular', paddingLeft: 10, }} value={kirim.alamat} onChangeText={x => setKirim({ ...kirim, alamat: x })} placeholderTextColor='gray' />



                <View style={{ padding: 10, }}>
                    <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 15 }}>Password</Text>
                </View>
                <TextInput style={{ margin: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.secondary, borderRadius: 10, color: colors.black, fontFamily: 'Alata-Regular', paddingLeft: 10, }} placeholder='do not fill if not changed' onChangeText={x => setKirim({ ...kirim, newpassword: x })} placeholderTextColor='gray' secureTextEntry={true} />




                <View style={{ padding: 10, top: 5, margin: 20 }} >
                    <TouchableOpacity onPress={sendServer} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, borderWidth: 2, borderColor: colors.secondary }} >
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Save</Text>
                    </TouchableOpacity>
                </View>




            </ScrollView >


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



        </View >
    );
}


export default HalamanAkun;