

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';



function KelompokTaksLimaTiga({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksLimaDua')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Let’s Read</Text>
                </View>
            </View>





            <ScrollView>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }}>Advertisement</Text>
                </View>


                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       An advertisement is a commercial{'\n'}notification that aims to encourage or{'\n'}persuade general society to buy oruse the item or service offered in the advertisement. Advertisements are usually put in mass{'\n'}media, such as printed and electronic mass{'\n'}media (magazines, newspapers, internet, television, and radio.){'\n'}
                        Advertising objectives should always be in line with promotional and marketing goals, as well as the business strategy or mission of the organization. Group advertising objectives fall into three categories:{'\n'}
                        1. To Inform{'\n'}
                        2. To Persuade{'\n'}
                        3. To Remind{'\n'}
                        {'\n'}
                        Functions/purposes:{'\n'}
                        – To advertise…….{'\n'}
                        – To offer…….{'\n'}
                        – To promote…….{'\n'}
                        – To attract people to…….{'\n'}
                        – To persuade people to…….{'\n'}
                        – To make people interested in…….{'\n'}</Text>
                </View>



                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>There are three types of advertisements as follows:{'\n'}
                        A. Informative Advertising{'\n'}
                        Informative advertising is often used when launching a new product or for an updated or relaunched product. The objective is to{'\n'}develop initial demand for a good, service, organization, or cause. It is used when a new product is put on the market on when an old product has been re-launched or updated.{'\n'}
                        {'\n'}
                        B. Persuasive Advertisement{'\n'}
                        Marketers use persuasive advertising to{'\n'}increase the demand for an existing good,{'\n'}service, or organization. The idea is to{'\n'}persuade a target audience to change{'\n'}brands, buy their product, and develop{'\n'}customer loyalty. After the purchase, the{'\n'}quality of the product will dictate whether or{'\n'}not the customer will remain loyal or return to{'\n'}the previous brand.{'\n'}
                        {'\n'}
                        C. Reminder Advertisement{'\n'}
                        Reminder advertising reinforces previous{'\n'}promotional information. The name of the{'\n'}product, testimonials of past customers,{'\n'}public response, and sales techniques are{'\n'}repeated in the hopes of reminding past customers and garnering new ones. It is used{'\n'}to keep the public interested in and aware of{'\n'}a well-established product that is most {'\n'}at the end of the product life cycle.
                    </Text>
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: http://it-teachingmedia.blogspot.com/2017/07/advertisement-material-for-junior-high.html
                    </Text>
                </TouchableOpacity>


                <View style={{ padding: 10 }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>For example:</Text>
                </View>


                <View style={{ padding: 10, alignItems: 'center' }} >
                    <Image style={{ width: 312, height: 468 }} source={require('../../../assets/img/unitlima/unitlima(letsread1).png')} />
                </View>




                <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
                        Adopted from: https://nekopencil.com/pendidikan/bahasa-inggris/35-contoh-soal-advertisement-bahasa-inggris-dan-kunci-jawaban/
                    </Text>
                </TouchableOpacity>
                <View style={{ padding: 10, }} >
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 12, textAlign: 'left' }}>Questions:{'\n'}
                        1. What is the writer’s intention writing the text?{'\n'}
                        Answer: The writer’s intention writing the text is to {'\n'}
                        promote a good hotel.{'\n'}
                        2. What kind of cuisine is provided at the hotel?{'\n'}
                        Answer: The restaurants at the hotel serve Indonesian {'\n'}
                        and Western cuisine.{'\n'}
                        3. What should people do to reserve a hotel with good
                        benefits?{'\n'}
                        Answer: People should visit the website to reserve a
                        hotel
                    </Text>
                </View>

                <View style={{ padding: 10, margin: 20, }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksLimaEmpat')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
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


export default KelompokTaksLimaTiga;