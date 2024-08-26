// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanUnitTiga')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let's Start </Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>Let’s Read the Story!</Text>
                </View>



                <View style={{ padding: 10, }} >
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>In this unit, you will learn the following:{'\n'}
                            Reading the fairytales{'\n'}
                            To identify the generic structure of the narrative text{'\n'}
                            To get a moral lesson from a fairytale</Text>
                    </View>
                </View>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center', color: colors.primary, }}>A. Let’s Start – What is a fairy tale?</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 321, height: 106 }} source={require('../../../assets/img/unittiga/unittiga(letstart1).png')} />
                </View>



                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 307, height: 159 }} source={require('../../../assets/img/unittiga/unittiga(letstart).png')} />
                </View>


                <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://www.kumon.co.uk/blog/if-you-want-your-children-to-be-intelligent-read-them-fairy-tales-if-you-want-them-to-be-more-intelligent-read-them-more-fairy-tales-albert-einstein/
                    </Text>
                </TouchableOpacity>
                <View style={{ padding: 10, }} >
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'center' }}>A fairy tale is a story that features fanciful and wondrous characters such as elves, goblins, wizards, and even, but not necessarily, fairies. The term “fairy tale” seems to refer more to the fantastic and magical setting or magical influences within a story rather than the presence of the character of a fairy within that story. Fairy tales are often traditional; many were passed down from story-teller to story-teller before being recorded in books. Fairy tales, in the literary sense, are easy to find. Look at your bookshelf or your DVD collection. You may see titles like these:</Text>
                    </View>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 331, height: 106 }} source={require('../../../assets/img/unittiga/unittiga(letstart2).png')} />
                </View>



                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaDua')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTiga;