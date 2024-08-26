

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTigaTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaDua')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Read</Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>Let’s Read the Story!</Text>
                </View>


                <View style={{ padding: 20, }}>
                    <View style={{ padding: 10, }} >
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>Let’s Read the Story!</Text>
                    </View>
                </View>


                <View style={{ padding: 10, }}>
                    <View style={{ padding: 10, }} >
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>The Narrative text is a fictional story that aims to entertain the reader. Of course, what is called an imaginary story is not necessarily true because it could be just imagination, fictitious story made up by someone, or a story made up by a group whose truth has not been proven. Narrative examples are Cinderella, Sangkuriang, Snow White, Rabbit and Crocodile, etc.{'\n'}
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', }}>The Generic Structure of Narrative Text</Text>{'\n'}
                            <Text style={{ fontWeight: 'bold', }}>Orientation:</Text> It is about the opening paragraph where the characters of the story are introduced. (Contains the introduction of characters, where and when the story takes place (who, what, when, or where)){'\n'}
                            <Text style={{ fontWeight: 'bold', }}>Complication:</Text> Where the problems in the story developed.
                            <Text style={{ fontWeight: 'bold', }}> Resolution:</Text> Where the problems in the story are solved. Problem solved either{'\n'}"happy ending" or "sad/bad ending".{'\n'}
                            <Text style={{ fontWeight: 'bold', }}>Reorientation/Coda</Text> (optional): a lesson from the story. (The moral value of the Story){'\n'}
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', }}>The Purpose of Narrative Text</Text>{'\n'}
                            The Purpose of Narrative Text is to amuse or entertain the reader with a story.{'\n'}
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', }}>The Characteristics / Language Feature of Narrative Text</Text>{'\n'}
                            * Past tense{'\n'}
                            * Adverb of time (Once upon a time, one day, etc.){'\n'}
                            * Time conjunction (when, then, suddenly, etc.){'\n'}
                            *  Specific character. The character of the story is specific, not general. (Cinderella, Snow White, Alibaba, etc.){'\n'}
                            * Action verbs. A verb that shows an action. (flew, dug, walked, etc.){'\n'}
                            * Direct speech. It is to make the story lively. (Snow White said,”My name is Snow{'\n'}White). Direct speech uses the present tense.
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: http://britishcourse.com/narrative-text-definition-purposes-generic-structures-language-features.php
                    </Text>
                </TouchableOpacity>
                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center', color: colors.primary, }}>The Princess and the Pea</Text>
                </View>



                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center', color: '#6CB731' }}>For example:</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 167, height: 237 }} source={require('../../../assets/img/unittiga/unittiga(princess).png')} />
                </View>



                <View style={{ padding: 10, }}>
                    <View style={{ padding: 10, }} >
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>Once upon a time, in a kingdom far away, there lived a handsome prince who wanted to marry a real princess. If only he knew a way to tell which princesses were real. The prince traveled all over the world to find a real princess, but he did not find anyone he wanted. He found a lot of princesses, but it was difficult to find out if they were real ones. There was always something about them that seemed weird or absurd. Frustrated, the prince came home again and was sad, for he would have liked very much to have a real princess.
                            One evening a terrible storm came on; there was thunder and lightning, and the rain poured down in torrents. Everyone had to stay indoors so the wind won’t carry them away or worse, they could drown in the heavy flood caused by the rain! Suddenly, someone knocked at the city gate, and everyone wondered who that could be. The guards at the city gate were reluctant to open it. “Who goes there?” one of the guards asked. “I am a princess”, a girl replied, and the guards were surprised. They wondered if she were truly a princess. The guards sent word to the old king about the princess’s arrival, and he ordered them to open the city gates. It was indeed a princess standing out there in front of the gate. But, good gracious! The rain and the wind had made her look drenched and unpresentable. The water ran down from her hair and clothes; it ran down into the toes of her shoes and out again at the heels. And yet she said that she was a real princess. It was hard to believe she was a princess, but she was led by the guards to the palace still. The prince was doubtful, but he was stunned to see such a beautiful girl. “We will know if she is a real princess soon enough” thought the old queen when the princess entered the palace. But she said nothing. She ordered the maids to make a room for the princess and off they went into the bed-room, took all the bedding off the bedstead, and when the room was ready, the old queen laid a pea on the bottom. She took twenty mattresses and laid them on the pea, and then twenty eider-down beds on top of the mattresses. On this the princess had to lie all night.
                            At night, the princess could barely sleep. She was uncomfortable because of the pea. She rolled all over the bed and felt pain in her back. In the morning, at breakfast, the old queen asked how she had slept. “Oh, very badly!” said she. “I have scarcely closed my eyes all night. Heaven only knows what was in the bed, but I was lying on something hard, so that I am black and blue all over my body. It’s horrible!”
                            “Goodness! She was indeed a princess” the old queen thought. Now they knew that she was a real princess because she had felt the pea right through the twenty mattresses and the twenty eider-down beds.
                            Nobody but a real princess could be as sensitive as that. The prince was beaming with excitement. Now he had found himself a princess to marry. So the prince married her for now, he knew that he had a real princess. It was a grand wedding and everyone in the kingdom was invited. The prince and the princess lived happily ever after, and the pea was put in the museum, where it may still be seen if no one has stolen it.

                        </Text>
                        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10, }}>
                            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                                Adopted from: https://www.fairylando.com/the-princess-and-the-pea/
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>

                            Questions:{'\n'}
                            1. What kind of text is it?{'\n'}
                            {'    '}Answer: The type of text above is narrative text.{'\n'}
                            2. What is the purpose of the text above?{'\n'}
                            {'    '}Answer: The purpose of the text above is to entertain the readers with the story.{'\n'}
                            3. Why did the prince travel all over the world?{'\n'}
                            {'    '}Answer: The prince traveled worldwide to find a real princess but did not find anyone he wanted.{'\n'}
                            4. What is the generic structure of the text above?{'\n'}
                            {'    '}Answer: The generic structure of the text above is orientation, complication, and resolution.{'\n'}
                            5. What is the moral of the story above?{'\n'}
                            {'    '}Answer: The moral of the story of the princess and the pea above is “never judge a person by their momentary appearance”.
                        </Text>
                    </View>
                </View>



                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaEmpat')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTigaTiga;