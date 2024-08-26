// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { getData, storeData } from '../../utils/localStorage';

function HalamanHome({ navigation }) {

    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        getData('user').then(u => setUser(u));
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>

            <ScrollView>
                <View style={{ padding: 10, backgroundColor: colors.primary, paddingVertical: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }} >

                    <View style={{ flexDirection: 'row', padding: 10, bottom: 30, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => {
                            storeData('user', null)
                            navigation.navigate('HalamanLogin');

                        }}  >
                            <Image style={{ width: 24, height: 24 }} source={require('../../assets/img/exit.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: 10, bottom: 20, justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 20, }}   >Welcome {user.nama_lengkap},</Text>
                    </View>



                    <View style={{ padding: 10, bottom: 50, flexDirection: 'row' }}>
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 40, }}   >MAOS APPS</Text>
                    </View>
                </View>

                <View style={{ padding: 10, bottom: 90, alignItems: 'center' }} >
                    <Image style={{ width: 350, height: 177 }} source={require('../../assets/img/potoheader.png')} />
                </View>


                <View style={{ flexDirection: 'row', padding: 10, bottom: 95, justifyContent: 'space-around' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitSatu')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 64, height: 79, }} source={require('../../assets/img/unitsatu.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 12 }}>The Best Wealth</Text>
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 12 }}>is Health</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitDua')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 57, height: 79, }} source={require('../../assets/img/Unitdua.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', top: 10, textAlign: 'center', fontSize: 12 }}>What is the Recipe?</Text>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', bottom: 95, justifyContent: 'space-around' }} >
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, }}   >Unit 1</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, }}   >Unit 2</Text>
                </View>





                <View style={{ flexDirection: 'row', padding: 10, bottom: 95, justifyContent: 'space-around' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitTiga')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 92, height: 67, }} source={require('../../assets/img/Unittiga.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', top: 10, textAlign: 'center', fontSize: 12 }}>Let’s Read the Story!</Text>

                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitEmpat')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 69, height: 67, }} source={require('../../assets/img/Unitempat.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', top: 10, textAlign: 'center', fontSize: 12 }}>The More You Read,</Text>
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', top: 10, textAlign: 'center', fontSize: 12 }}>the More You Know</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', bottom: 95, justifyContent: 'space-around' }} >
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, }}   >Unit 3</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, }}   >Unit 4</Text>
                </View>






                <View style={{ flexDirection: 'row', padding: 10, bottom: 95, justifyContent: 'space-around', }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitLima')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 67, height: 67, }} source={require('../../assets/img/Unitlima.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', textAlign: 'center', top: 10, fontSize: 12 }}>Buy 1, Get 1 Free</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => navigation.navigate('HalamanStudent0')} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 59, height: 66, }} source={require('../../assets/img/studentguidens.png')} />


                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom: 95, left: 20 }} >
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, textAlign: 'center' }}>Unit 5</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, textAlign: 'center' }}>Student’s Guidance</Text>

                </View>




                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around', bottom: 95 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanTeacher0')} style={{ justifyContent: 'center', padding: 10, backgroundColor: colors.secondary, borderRadius: 10, width: 138, height: 138, alignItems: 'center', borderWidth: 2, borderColor: colors.primary }} >
                        <Image style={{ width: 78, height: 66, left: 0 }} source={require('../../assets/img/teacherguidens.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, backgroundColor: colors.white, borderRadius: 10, width: 138, height: 138, alignItems: 'center' }} >
                    </TouchableOpacity>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom: 95, left: 7 }} >
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.secondary, }}>Teacher’s Guidance</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Alata-Regular', color: colors.white }}>Student’s Guidance</Text>
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

                <TouchableOpacity onPress={() => navigation.navigate('HalamanAkun', user)} style={{}}  >
                    <Image style={{ width: 33, height: 33, }} source={require('../../assets/img/profle.png')} />
                </TouchableOpacity>
            </View>

        </View>

    );
}


export default HalamanHome;