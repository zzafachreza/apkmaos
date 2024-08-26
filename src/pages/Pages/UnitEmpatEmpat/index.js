

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksEmpatEmpat({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatTiga')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 1 </Text>
                </View>
            </View>





            <ScrollView>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 310, height: 216, }} source={require('../../../assets/img/unitempat/unitempat(1).png')} />
                </View>

                <View style={{ padding: 10, top: 20 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>The Octopus is an ocean creature with eight effective feet, which it utilizes as hands. These are called tentacles or limbs. “Octopus” originates from two words that mean “eight feet.”
                        The octopus, the squid, and the cuttlefish fit in with the same family that has no outside shells. Their bodies are secured totally with skin. Along these lines, the assortment of an octopus is delicate. It would appear that a huge blow-up. A completely developed octopus can be as huge as 8,5 meters from the tip of one arm to the tip of another. It can weigh as much as 45 kilograms.
                        Other than utilizing its tentacles or limbs to catch little fish, ocean plants, crabs, and lobsters, the octopus additionally utilizes them against its adversaries. The octopus wraps its appendages around the exploited person and crushes it before eating it.
                        The octopus escapes from its adversaries by giving out a thick, dull liquid to obscure the water. It can likewise change the color of its body to match its surroundings. It escapes its enemies by doing this.

                    </Text>
                </View>



                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>Questions :</Text>
                </View>


                <View>

                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. What is the purpose of the text above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. Which group of sea creatures belongs to the same family as an octopus?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. How much can a fully-grown octopus can weigh?!</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. How does the octopus look for food?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. What does the octopus do to run away or escape from its enemy?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatLima')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksEmpatEmpat;