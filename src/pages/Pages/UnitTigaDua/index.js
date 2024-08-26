// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTigaDua({ navigation }) {


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



                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>List of Acts of Kindness Ideas for Friends</Text>
                </View>



                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 331, height: 132 }} source={require('../../../assets/img/unittiga/unittiga(payattention).png')} />
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Source: https://www.123rf.com/photo_46725612_cartoon-happy-friendship-day-background-with-cute-little-boys-and-girls-illustration-inscription-fri.html
                    </Text>
                </TouchableOpacity>

                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 331, height: 408 }} source={require('../../../assets/img/unittiga/unittiga(payattention2).png')} />
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 233, height: 233 }} source={require('../../../assets/img/unittiga/unittiga(payattention1).png')} />
                </View>


                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, }}>Google’s Fact Check Explorer is designed to facilitate the work of fact-checkers, journalists, and researchers in discovering what has and hasn’t been debunked all over the globe. Think of it as a search engine for fact checks that can help you determine fact from fiction.</Text>
                    </View>


                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 18, fontWeight: 'bold' }}>STEP 1</Text>
                    </View>


                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, }}>To find existing fact checks about topics or people, go to toolbox.google.com/factcheck/explorer.</Text>
                    </View>


                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 18, fontWeight: 'bold' }}>STEP 2</Text>
                    </View>


                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, }}>
                            Type in a keyword to see the latest fact checks tagged with that word.</Text>
                    </View>



                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 18, fontWeight: 'bold' }}>STEP 3</Text>
                    </View>



                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, }}>
                            Search results are listed by recency and include the name of the organization that conducted the fact check and how they rated the claim (for example: “false” or “incorrect”). To read the entire fact check, click the link provided.
                        </Text>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 18, fontWeight: 'bold' }}>STEP 4</Text>
                    </View>




                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, }}>

To see the most recent fact checks across all topics, click -> Recent fact checks. To search by publisher, use the search modifier site: and enter their URL and your keyword.

                        </Text>
                    </View>

                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                            Adopted from: https://newsinitiative.withgoogle.com/resources/lessons/google-fact-check-tools/
                        </Text>
                    </TouchableOpacity>

                </View>





                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaTiga')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTigaDua;