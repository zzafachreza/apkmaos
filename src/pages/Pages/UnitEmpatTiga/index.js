

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksEmpatTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatDua')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Read</Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}  >Report Text</Text>
                </View>


                <View style={{ padding: 10, margin: 20 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}  >1) Definition of Report Text{'\n'}
                        Report Text is a type of text in English that {'\n'}
                        describes the details of an object. Details in {'\n'}
                        this text are scientific details which include {'\n'}
                        the description of objects, both physical {'\n'}
                        and non-physical, from scientific facts {'\n'}
                        about the object.{'\n'}
                        {'\n'}
                        Report Text is included in the Descriptive {'\n'}
                        Text, which has the purpose of providing {'\n'}
                        information to readers about the object of {'\n'}
                        this text itself. Although Report Text and {'\n'}
                        Description Text are almost the same, they {'\n'}
                        are actually two different texts. Report Text {'\n'}
                        tends to lead to scientific factual text and is {'\n'}
                        more general than Description Text, so {'\n'}
                        there is no subjective opinion from the {'\n'}
                        author.{'\n'}
                        {'\n'}
                        2) Characteristics of Report Text{'\n'}
                        Contains scientific facts{'\n'}
                        The title text looks more general{'\n'}
                        Using the Simple Present Tense{'\n'}
                        General Classification{'\n'}
                        {'\n'}

                        3) Generic Structure of Report Text{'\n'}
                        §   General Classification{'\n'}
                        This section contains general statements {'\n'}
                        that describe the object description of this {'\n'}
                        Report Text.{'\n'}
                        §    Description{'\n'}
                        This section usually provides a description {'\n'}
                        of the phenomenon or situation that {'\n'}
                        occurs, both its parts, nature, habits, or {'\n'}
                        behavior. In essence, this section describes {'\n'}
                        the classification presented scientifically.   {'\n'}
                        However, the thing to remember is that {'\n'}
                        Report Text is not a news text but scientific {'\n'}
                        factual text. {'\n'}

                    </Text>
                </View>


                <View style={{ padding: 20 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 15 }} >For example:</Text>
                </View>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 20 }} >Wingo Island</Text>
                </View>


                <View style={{ padding: 10, margin: 20 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 15 }} >       The Island of Wingo is by the island of Singa. In the water around Wingo Island, there are hundreds of sharks. They are so many that the water bubbles like a whirlpool. People can only get to Wingo Island by boat. The boat has a rocket on it. The rocket takes people over the sharks and onto the island.
                        Wingo Island has no sand, but it has green moss. At night the moss sparkles like stars. Tall stars called Fruji grow everywhere. The Fruji trees have purple leaves at the top and yellow fruit all over them. When a fruit falls off, another tree grows in a minute.
                        The Weather on Wingo Island is very hot, but at twelve o’clock everyday, it rains. Sometimes, there are windstorms. They happen when too many animals fly around at the same time.
                        People who stay on Wingo Island sleep in a big-gloo. It is like an igloo, but it is on long poles. It has a ladder to get up and a slide to come down. The big-gloo has a moss bed, chairs, and tables that are made of Fruji trees.
                        There is no television on Wingo Island. So are the telephone and computer. It is a place to listen to the leaves whispering. It is a place to lie on soft green moss and look at the clouds. It is really a place to dream.

                    </Text>
                </View>


                <View style={{ padding: 10, margin: 20, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 12 }} >Questions:{'\n'}
                        1. What is Fruji?{'\n'}
                        Answer: Fruji is the name of a tree in Wingo Island.{'\n'}
                        2. What are the chairs and tables in that island made{'\n'}
                        of?{'\n'}
                        Answer: The chairs and tables in that island are made {'\n'}
                        of fruji trees.{'\n'}
                        3. Where do the people of the island live in?{'\n'}
                        Answer: The people of the island live in the big-gloos{'\n'}
                        4. What causes windstorms at Wingo?{'\n'}
                        Answer: The windstorms at Wingo are caused by the{'\n'}
                        animals{'\n'}
                        5. “It is a place to listen to the leaves whispering.”{'\n'}
                        The underlined word refers to …{'\n'}
                        Answer: The underlined word refers to Wingo island.</Text>
                </View>



                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatEmpat')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksEmpatTiga;