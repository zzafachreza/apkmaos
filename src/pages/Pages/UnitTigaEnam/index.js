

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTigaEnam({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaLima')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 3</Text>
                </View>
            </View>





            <ScrollView>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 311, height: 435, }} source={require('../../../assets/img/unittiga/unittiga(3).png')} />
                </View>


                <View style={{ padding: 10, top: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                            Source: https://www.getepic.com/in/book/73475987/the-gingerbread-man
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>                   Once upon a time, a brother and sister named Hansel and Gretel lived in a hut in the woods with their father who was a poor woodcutter and their mother. Their parents were very poor and had barely enough food to eat.
                        Once, there lived a little boy and his grandparents. One day, his grandmother decided to make a gingerbread man for the little boy. She mixed some eggs and some flour and made it into dough. Next, she rolled the dough flat and cut it into the shape of a gingerbread man. She made it two eyes with some grapes and gave it feet. She made it two hands and the little boy cheered. She took some grapes and made them as buttons on his shirt. She added a collar and used up the rest of the dough to give a nose and a mouth.
                        She then places the gingerbread man in the oven and leaves it to bake. The little boy sits in the kitchen to watch over the gingerbread man while his grandmother joins his grandfather in the garden. Soon, the little boy grew impatient and tired of waiting. He went out to join his grandparents in the garden. They were plucking out weed and trimming the plants. Just then, the little remembered the gingerbread man in the oven. He hurried back to the kitchen and saw that the gingerbread man was ready. He opened the oven and the gingerbread man jumped out. The little boy was amazed to see the gingerbread man alive. He tried to catch him but the gingerbread man was too fast. It leaped from the table and ran into the garden. As he ran, the Gingerbread Man cried “Run! Run! As fast as you can! But you cannot catch me. I am the Gingerbread Man!” The little boy ran after the gingerbread man and called for help. His grandparents saw him run after the creature and joined him in the chase so all three began to chase the gingerbread man.
                        The gingerbread man ran into the woods and past a spotted dog. The spotted dog barks and runs after the gingerbread man too. Now, the little boy, his grandparents and the spotted dog ran after the gingerbread man. The gingerbread man cried out again “Run! Run! As fast as you can! But you cannot catch me. I am the Gingerbread Man!” He ran past a hungry crow and it chases after the gingerbread man. Now, the little boy, his grandparents, the spotted dog and the hungry crow ran after the gingerbread man. The gingerbread man cried out again “Run! Run! As fast as you can! But you cannot catch me. I am the Gingerbread Man!” He ran past three mowers who were busy cutting grass. When they saw the Gingerbread Man, they stopped working, and wanted to eat him. They ran after the Gingerbread Man also. Now, the little boy, his grandparents, the spotted dog, the hungry crow and the three mowers ran after the gingerbread man. The gingerbread man cried out again “Run! Run! As fast as you can! But you cannot catch me. I am the Gingerbread Man!” The gingerbread man continued to run until it reached a river bank. He could not swim so he needed help to cross the river.
                        Suddenly, a cunning fox came out of the woods and asked the gingerbread man to climb onto his back. The gingerbread man did not know that the fox wanted to eat him. The fox started to swim. The fox told the gingerbread man that the water is too deep and asked him to hop onto his nose. The gingerbread man hopped onto the fox’s nose and the fox grinned. Now, the gingerbread man was close to his mouth. Immediately, the fox tossed him up into the air, opened his mouth and gobbled up the Gingerbread Man. That was the end of the Gingerbread Man. Everyone was sad and disappointed that they could not eat the gingerbread man but grandmother told them she will make another one. Everyone was looking forward to the next Gingerbread Man that the old lady was planning to bake.



                    </Text>
                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                            Adopted from: https://www.fairylando.com/the-gingerbread-man/
                        </Text>
                    </TouchableOpacity>
                </View>



                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>Questions :</Text>
                </View>


                <View>

                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. What does the text tell about?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. What is the writer’s intention in writing the text?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. Who did bake the Gingerbread Man?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. Why did a little boy run?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. What is the moral value of the text above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaTujuh')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTigaEnam;