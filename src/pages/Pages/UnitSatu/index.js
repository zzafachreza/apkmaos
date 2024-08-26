// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';

function KelompokTaksSatu({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitSatu')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let's Start</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}  >Do you know what health</Text>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}  >protocols are?</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 260, height: 148, }} source={require('../../../assets/img/takssatu(1).png')} />
                </View>


                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >With your friend, discuss the following questions:</Text>
                </View>


                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >Why should you follow health protocols?</Text>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >What are the proper health protocols?</Text>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >What are the minimum health protocols?</Text>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >Why safety protocols important?</Text>
                </View>

                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 299, height: 225, }} source={require('../../../assets/img/takssatu(2).png')} />
                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }} onPress={() => Linking.openURL('https://www.vecteezy.com/vector-art/3408670-new-normal-signage-icon-set')}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: '#CDCDCD'
                    }}>Adopted from: https://www.vecteezy.com/vector-art/3408670-new-normal-signage-icon-set</Text>
                </TouchableOpacity>

                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >Health protocols are some of the rules about health safety to prevent transmitting viruses to enable the community to carry out activities safely without risking the health of others.</Text>
                </View>

                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >To prevent the spread of viruses or diseases in a face-to-face meeting, you should at least wear a face mask, use hand sanitizer, avoid crowds, wash your hands, and keep your distance at school.</Text>
                </View>


                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center', color: '#F3AC14' }}  >How to Wear a Mask</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 298, height: 227, }} source={require('../../../assets/img/takssatu(3).png')} />
                </View>


                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }} onPress={() => Linking.openURL('https://medlineplus.gov/ency/imagepages/19946.htm')}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: '#CDCDCD'
                    }}>Adopted from: https://medlineplus.gov/ency/imagepages/19946.htm</Text>
                </TouchableOpacity>
                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >Wearing well-fitting face masks helps prevent the spread of the virus. For masks to work, they have to be worn properly. Choose a mask with two or more layers that completely cover your mouth and nose and fit snugly against the sides of your face, leaving no gaps. Do not wear a mask that is too loose on the sides. Do not pull the mask low on your nose, below your nose, mouth, or chin. Do not leave your chin or mouth exposed or dangle the mask from one ear. Do not wear the mask in any other way that does not entirely cover your mouth and nose. Please wash your hands before and after wearing the mask and use only the loops of the mask to put it on and take it off. Please do not touch the front of the mask while wearing it. If you use a cloth mask, wash it, dry it daily, and keep it in a clean, dry place.

                    </Text>
                </View>


                <View style={{ padding: 10, top: 5, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuDua')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksSatu;