// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksDuaTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksDuaDua')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Read</Text>
                </View>
            </View>





            <ScrollView>

                <View style={{ padding: 10, alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 20 }}>Procedure</Text>
                </View>


                <View style={{ padding: 10, }}>
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 12 }}>What is the procedure text?{'\n'}
                        {'\n'}
                        A Procedure text is a text that explains or helps us how to make or use something. Its social function is to describe how something is completely done through a sequence of steps. The communicative purpose of this text is to explain how something is made through a sequence of actions or steps. There are three generic structures in the procedure text. The first is goals or purposes. The second is the materials or tools. The third and the last are steps or methods. Knowing whether or not the text that we read is a procedure is so simple. You can read the title if the title is started with ‘how to make…’ or ‘how to use…’ It can be certainly defined that the text is procedure text.{'\n'}
                        {'\n'}
                        Definition of Procedure Text
                        There are three definitions of procedure text:</Text>
                </View>


                <View style={{ padding: 10 }} >
                    <Image style={{ width: 316, height: 487 }} source={require('../../../assets/img/unitdua/unitdua(3backup).png')} />
                </View>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 12 }}>For example :</Text>
                </View>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 20 }}>Padang Beef Rendang</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 298, height: 319 }} source={require('../../../assets/img/unitdua/unitdua(rendang).png')} />
                </View>



                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 15, color: colors.primary }}>How to Wear a Mask</Text>
                </View>




                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 298, height: 227 }} source={require('../../../assets/img/unitdua/unitdua(masker).png')} />
                </View>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'left', fontSize: 12, }}>Wearing well-fitting face masks helps prevent the spread of the virus. For masks to work, they have to be worn properly. Choose a mask with two or more layers that completely cover your mouth and nose and fit snugly against the sides of your face, leaving no gaps. Do not wear a mask that is too loose on the sides. Do not pull the mask low on your nose, below your nose, mouth, or chin. Do not leave your chin or mouth exposed or dangle the mask from one ear. Do not wear the mask in any other way that does not entirely cover your mouth and nose. Please wash your hands before and after wearing the mask and use only the loops of the mask to put it on and take it off. Please do not touch the front of the mask while wearing it. If you use a cloth mask, wash it, dry it daily, and keep it in a clean, dry place.</Text>
                </View>



                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', textAlign: 'center', fontSize: 20, color: colors.secondary }}>“Brownies”</Text>
                </View>



                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 318, height: 550 }} source={require('../../../assets/img/unitdua/unitdua(3).png')} />
                </View>


                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksDuaEmpat')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksDuaTiga;