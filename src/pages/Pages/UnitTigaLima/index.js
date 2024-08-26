

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTigaLima({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksEmpatEmpat')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 2</Text>
                </View>
            </View>





            <ScrollView>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 325, height: 272, }} source={require('../../../assets/img/unittiga/unittiga(2).png')} />
                </View>

                <View style={{ padding: 10, top: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                            Source: https://youaremom.com/parenting/hansel-and-gretel/
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>                   Once upon a time, a brother and sister named Hansel and Gretel lived in a hut in the woods with their father who was a poor woodcutter and their mother. Their parents were very poor and had barely enough food to eat.
                        One day, their parents sent them off into the woods in search of greener pastures. Their mother cried as she sent them off but they could not take care of them any longer. Hansel and Gretel took a few pebbles and some bread crumbs with them. That night the two children had nowhere to sleep. They wandered in the forest for days, looking for food and a place to stay. The children slept under a tree that night and kept each other warm. The next morning when the sun rose, Hansel turned to his little sister. “Gretel,” he said, “we cannot stay here. We must go deeper into the woods! Surely we will find more to eat than what we get at home and we can bring some food for mother and father”. Gretel was worried. “But what if we get lost?” she asked. “We won’t!” said Hansel. “If we get lost, we will follow the pebbles back home.” As they went deeper and deeper into the forest, the children decided to drop pebbles on the path to help them find a way back home if they get lost. Soon, they had no more pebbles and all they had left were bread crumbs. Gretel was careful to drop one crumb and then after a bit, another.
                        There was no luck and the children had looked and looked for any sign of something to eat – an apple tree, pear tree, some nuts on the ground, or even dried-up berries. There was nothing to eat! They got hungrier and hungrier and the children were tired. They decided to go back home or they would starve. They turned back and all the bread crumbs were gone. Now they were lost! They did not know their way back home. “Oh, no!” cried Gretel “The birds ate up all the crumbs!” the children were sad. Gretel began to cry but Hansel assured her they will be safe. They walked on and suddenly, a wolf howled in the distance. They hurried away to avoid being eaten by the wolf. The sun was setting and the children were lost and hungry. Now they were scared, too. Soon, they saw a strange house made up of cookies, candies, and chocolates. The children were immediately happy and ran along the path to the house. They knocked at the yummy chocolate door but nobody answered. They knocked again and the door opened. The children were too hungry to wait for the owner of the house. They went in and started to eat the yummy door. When they both were eating the yummy door, a witch pounced on them. The strange house belonged to a witch! The children begged for their lives but the evil witch did not listen. She locked up Hansel in a cage and asked Gretel to help her heat the oven. She would cook them and eat them up. But just as the witch bent to check the oven’s temperature, Gretel pushed her from behind and locked the oven door. Gretel rescued Hansel, and they filled their pockets with the witch’s jewels and goodies.
                        They ran as fast as they could through the forest without stopping. They were too scared to stop, for the witch may catch up to them. Finally, they managed to find their way back home and gave jewels to their parents. Thanks to the clever children! The family was never poor and hungry. again.



                    </Text>
                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                            Adopted from: https://www.fairylando.com/hansel-and-gretel
                        </Text>
                    </TouchableOpacity>
                </View>



                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>Questions :</Text>
                </View>


                <View>

                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. What is the main point of the story above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. Why did Hansel and Gretel go to the forest?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. What happened to Hazel and Gretel when they were in the woods?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. Describe the character of the owner of a strange house in the forest!</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. What is the moral value of the story above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaEnam')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTigaLima;