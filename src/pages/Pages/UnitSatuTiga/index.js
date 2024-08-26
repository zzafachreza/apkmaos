// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';

function KelompokTaksSatuTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuDua')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Read</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: '#0DBEDF' }}  >Label Text</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 286, height: 323, }} source={require('../../../assets/img/takssatu(6).png')} />
                </View>


                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: colors.primary }}  >Vitamin D3</Text>
                </View>






                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 221, height: 273, }} source={require('../../../assets/img/takssatu(7).png')} />
                </View>



                <View style={{ padding: 10, top: 10, left: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, }}  >About this item</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 286, height: 510, }} source={require('../../../assets/img/takssatu(8).png')} />
                </View>



                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }} onPress={() => Linking.openURL('https://www.amazon.com/dp/B0892V3MR7/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0892V3MR7&pd_rd_w=PCrr7&content-id=amzn1.sym.dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_p=dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_r=S407WKX4W0CEB23HPKRZ&pd_rd_wg=DA4fO&pd_rd_r=8aaa70be-15dc-45ec-b633-2f552547327a&s=hpc&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExU0FXN0ZRSklSUFlHJmVuY3J5cHRlZElkPUEwNDEwMDUwMVdZUVM5TjNMN1pJTyZlbmNyeXB0ZWRBZElkPUEwMDIyMzU4MzBZVTAxUjYxM0lETyZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: '#CDCDCD'
                    }}>Adopted from: https://www.amazon.com/dp/B0892V3MR7/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0892V3MR7&pd_rd_w=PCrr7&content-id=amzn1.sym.dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_p=dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_r=S407WKX4W0CEB23HPKRZ&pd_rd_wg=DA4fO&pd_rd_r=8aaa70be-15dc-45ec-b633-2f552547327a&s=hpc&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExU0FXN0ZRSklSUFlHJmVuY3J5cHRlZElkPUEwNDEwMDUwMVdZUVM5TjNMN1pJTyZlbmNyeXB0ZWRBZElkPUEwMDIyMzU4MzBZVTAxUjYxM0lETyZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=</Text>
                </TouchableOpacity>
                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: '#6CB731' }} >Instant Herbal Beverage
                        Raspberry</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: 319, height: 294, }} source={require('../../../assets/img/takssatu(9).png')} />
                </View>


                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}  >Product Overview</Text>
                </View>


                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >Enjoy our Instant Herbal Beverage Raspberry tea, a{'\n'}refreshing herbal drink that contains 85mg of{'\n'}caffeine* to serve as a pick-me-up whenever you{'\n'}need a boost.</Text>
                </View>



                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >It is a tasty, low-calorie drink infused with a unique{'\n'}blend of green tea and orange pekoe, with extracts{'\n'}of Malva flower, hibiscus flower, and cardamom{'\n'}seed. Our green tea is water extracted to give you the{'\n'}full spectrum of its compounds.</Text>
                </View>


                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >
                        Our Instant Herbal Beverage is also available in{'\n'}Original, Peach, and Lemon flavors.</Text>
                </View>


                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left', lineHeight: 17, }}  >
                        Key Features and Benefits:{'\n'}
                        * 85mg caffeine per serving{'\n'}
                        * Low calorie (6kcal per serving){'\n'}
                        * Enjoy hot or cold{'\n'}
                        * Contains orange pekoe - a traditional black tea{'\n'}
                        * A great way to reach the required daily fluid{'\n'}   intake</Text>


                </View>



                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, }}  >Directions for Use:</Text>
                </View>


                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >
                        Mix half a teaspoon (1.7g) with 250ml hot or cold{'\n'}water  and enjoy on its own or with a meal.</Text>
                </View>


                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >
                        *It is not recommended to exceed a daily intake of{'\n'}400mg of caffeine from all sources (200mg for{'\n'}pregnant or breastfeeding women).
                    </Text>
                </View>


                <TouchableOpacity style={{
                    marginTop: 10,
                    justifyContent: 'center',
                    alignContent: 'center'
                }} onPress={() => Linking.openURL('https://www.herbalifemalta.com/products/0256-instant-herbal-beverage-raspberry-50g/')}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: '#CDCDCD'
                    }}>
                        Source: https://www.herbalifemalta.com/products/0256-instant-herbal-beverage-raspberry-50g/</Text>
                </TouchableOpacity>

                <View style={{ padding: 10, top: 50 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: colors.primary }}  >Vaalia Low Fat Natural Yoghurt</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center', top: 30 }}   >
                    <Image style={{ width: 272, height: 272, }} source={require('../../../assets/img/takssatu(10).png')} />
                </View>


                <View style={{ padding: 10, alignItems: 'center', top: 30 }}   >
                    <Image style={{ width: 284, height: 162, }} source={require('../../../assets/img/takssatu(17).png')} />
                </View>


                <View style={{ padding: 10, top: 30, alignItems: 'flex-start', left: 20 }}   >
                    <Image style={{ width: 126, height: 60, }} source={require('../../../assets/img/takssatu(11).png')} />
                </View>



                <View style={{ padding: 10, top: 30, alignItems: 'flex-start', left: 20 }}   >
                    <Image style={{ width: 285, height: 226, }} source={require('../../../assets/img/takssatu(12).png')} />
                </View>


                <View style={{ padding: 10, top: 30, alignItems: 'flex-start', left: 20 }}   >
                    <Image style={{ width: 292, height: 165, }} source={require('../../../assets/img/takssatu(13).png')} />
                </View>



                <View style={{ padding: 10, top: 10, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left', }}  >Gut Happy + Planet Happy!{'\n'}
                        Our cups & resealable lids can be recycled so make{'\n'}sure you dispose of them in the recycling bin.{'\n'}Please dispose of the seal in the garbage bin.{'\n'}
                        For more information on recycling.</Text>
                </View>

                <TouchableOpacity style={{
                    marginTop: 10,
                    justifyContent: 'center',
                    alignContent: 'center'
                }} onPress={() => Linking.openURL('https://vaalia.com.au/products/vaalia-natural-yoghurt/')}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: '#CDCDCD'
                    }}>

                        Adopted from: https://vaalia.com.au/products/vaalia-natural-yoghurt/</Text>
                </TouchableOpacity>


                <View style={{ padding: 10, top: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', }}  >Brain Boost</Text>
                </View>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 150, height: 258, }} source={require('../../../assets/img/takssatu(14).png')} />
                </View>


                <View style={{ padding: 10, top: 20, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left', }}  >Product description</Text>
                </View>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 292, height: 374, }} source={require('../../../assets/img/takssatu(15).png')} />
                </View>



                <View style={{ padding: 10, top: 20, left: 25 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left', }}  >St. Johns Wort: Popular herb used for healthy mood{'\n'}while lowering low stress, anxiety and depression.{'\n'}
                        Ginkgo Biloba:Commonly ingested herb for brain{'\n'}health, mental alertness and cognition boost.{'\n'}
                        Phosphatidylserine: Vital for memory and cognitive{'\n'}capacity improvement.{'\n'}
                        N-Acetyl-L-Carnitine: Helps neurons maintain{'\n'}optimal energy levels and rejuvenate aging brains.{'\n'}
                        Huperzine A: Inhibits an enzyme that degrades the{'\n'}learning neurotransmitter, acetylcholine. It helps{'\n'}increase memory while also promoting alertness and{'\n'}energy.{'\n'}
                        Order Brain Boost Max Now! With the 100% money{'\n'}guarantee don’t wait to improve your overall health!
                    </Text>
                </View>

                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 323, height: 241, }} source={require('../../../assets/img/takssatu(16).png')} />
                </View>


                <View style={{ padding: 10, top: 20, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuEmpat')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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



        </View >
    );
}


export default KelompokTaksSatuTiga;