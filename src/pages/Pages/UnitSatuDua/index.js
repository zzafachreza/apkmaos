// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';

function KelompokTaksSatuDua({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatu')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Pay Attention</Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10, bottom: 20 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: '#0DBEDF' }}  >Collaborative Friendship</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: '80%', height: 200, marginBottom: 10, }} source={require('../../../assets/img/1b.png')} />
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.inc.com/rohini-venkatraman/why-zappos-tony-hsieh-wants-everyone-to-be-friends.html')}>
                        <Text style={{
                            fontSize: 10,
                            marginBottom: 10,
                            maxWidth: '90%',
                            color: '#CDCDCD'
                        }}>Source : https://www.inc.com/rohini-venkatraman/why-zappos-tony-hsieh-wants-everyone-to-be-friends.html</Text>
                    </TouchableOpacity>
                    <Image style={{ width: 286, height: 187, }} source={require('../../../assets/img/takssatu(4).png')} />
                </View>


                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: '#0DBEDF' }}  >Avoiding Hoaxes</Text>
                </View>




                <View style={{ padding: 10, bottom: 0 }}>
                    <Text style={{ color: colors.black, fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center', }}>Hoax news is false information that is widely publicized and presented as factual. Spreading and believing in hoax news is dangerous. How to know whether this news is fake or not? The characteristics of hoax news are:</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }}   >
                    <Image style={{ width: '80%', height: 200, marginBottom: 0, }} source={require('../../../assets/img/1b2.png')} />
                    <TouchableOpacity onPress={() => Linking.openURL('https://pasjabar.com/2021/03/30/bandung-diserbu-berita-hoax-vaksin-terbanyak-twitter/')}>
                        <Text style={{
                            fontSize: 10,
                            marginBottom: 10,
                            color: '#CDCDCD',
                            maxWidth: '90%',
                        }}>Source : https://pasjabar.com/2021/03/30/bandung-diserbu-berita-hoax-vaksin-terbanyak-twitter/</Text>
                    </TouchableOpacity>
                    <Image style={{ width: 264, height: 284, }} source={require('../../../assets/img/takssatu(5).png')} />
                </View>



                <View style={{ padding: 10, top: 5, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuTiga')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksSatuDua;