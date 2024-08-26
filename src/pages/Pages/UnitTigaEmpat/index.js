

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksTigaEmpat({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaTiga')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Task 1 </Text>
                </View>
            </View>





            <ScrollView>



                <View style={{ padding: 10, top: 30, alignItems: 'center', }}   >
                    <Image style={{ width: 321, height: 216, }} source={require('../../../assets/img/unittiga/unittiga(1).png')} />
                </View>

                <View style={{ padding: 10, top: 20 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       Once upon a time, there were three bears. The bears lived together in the woods. The Little Wee Bear was Baby Bear, the Middle-sized Bear was Mama Bear, and the Great Big Bear was Papa Bear. Their house had furniture and cutleries the size of each bear. Baby bear’s bowl, spoon, chair, and bed were very little. Mama bear‘s bowl, spoon, chair and bed were all medium-sized. Papa bear’s bowl, spoon, chair, and bed were very big.
                        One day, the three bears wanted to make porridge for breakfast. After they had made the porridge for their breakfast and poured it into their porridge bowls, it was too hot for them to eat. Baby bear cried because he had hurt his tongue, so Papa bear and Mama bear decided that they all go for a walk in the woods, and come back when the porridge is warmer, and perfect for eating. While they were away, a little girl called Goldilocks, who lived at the other side of the woods passed by their house. Goldilocks had been sent on an errand by her mother, so she passed by the house and looked in at the window. When she peeped in at the keyhole, she saw the porridge on the table. Goldilocks felt her tummy rumble and decided to knock. When she knocked, and no one answered, Goldilocks opened the door and went in. Goldilocks was an ill-mannered little girl, so instead of waiting for the three bears, she set about helping herself with the porridge. She tasted the porridge of Papa bear, but it was too hot for her. Next, she tasted the porridge of Mama bear, but that was too cold for her. Then she tasted Baby bear’s porridge, and it was neither too hot nor too cold. Baby bear’s porridge was just right, and she liked it so well that she ate it all up every bit! After eating, Goldilocks was tired and wanted to sleep. She sat down on Papa bear’s chair, but it was too hard for her. She sat down in Mama bear’s chair, but it was too soft for her. But when she sat down in baby bear’s chair, it was neither too hard nor too soft, but just right. So she sat in it, but it broke into tiny pieces. Next, Goldilocks went upstairs into the bed-chamber in which the Three Bears slept. And first, she lay down on Papa bear’s bed, but it was too high for her. She laid down on the baby bear’s bed, but it was too low for her. But when she laid down on Mama bear’s bed, it was neither too high at the head nor at the foot, but just right. Soon, Goldilocks fell fast asleep. While she was asleep, the three bears returned from their stroll and found their door open. They were frightened and carefully walked inside. Someone had eaten from their porridge, and eaten all of the baby bear’s porridge! They went to the living room, and someone had sat on all their chairs and broken baby bear’s chair! They were starting to become more frightened.
                        {'\n    '}Then they went to their rooms, and someone had slept on all their beds. Now, Papa bear was very angry. Baby bear saw a little girl sleeping on his bed. He screamed in fear, but his voice was so sharp and so shrill that it awakened Goldilocks at once. She tumbled out of the baby bear’s bed and ran to the window. So the naughty, frightened little Goldilocks jumped, and whether she broke her neck in the fall, or ran into the woods and was lost there, or found her way out of the wood and got whipped for being a bad girl and playing truant, no one could say. But the Three Bears never saw anything more of her.

                    </Text>
                </View>


                <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 20 }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://www.fairylando.com/goldilocks-and-the-three-bears/
                    </Text>
                </TouchableOpacity>
                <View style={{ padding: 10, top: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>Questions :</Text>
                </View>


                <View>

                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. Which part of the orientation of the text above?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. How many bears are in the story? Mention it!</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. What do you think about the character of Goldilocks? Describe it!</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. What did Goldilocks do in the Bear’s house?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />



                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. Why was Papa bear very angry?</Text>
                    </View>


                    <TextInput style={{ margin: 10, color: colors.black, fontFamily: 'Alata-Regular', borderWidth: 1, borderRadius: 10, borderColor: colors.secondary, height: 78, backgroundColor: '#f5f5f5', bottom: 20 }} />


                </View>




                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksTigaLima')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksTigaEmpat;