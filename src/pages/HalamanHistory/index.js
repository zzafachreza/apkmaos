// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { apiURL, getData } from '../../utils/localStorage';
function HalamanHistory({ navigation }) {

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            getTransaction();
        }
    }, [isFocused]);


    const getTransaction = () => {

        getData('user').then(u => {

            axios.post(apiURL + 'riwayat', {
                fid_user: u.id
            }).then(res => {
                console.log(res.data);
                setData(res.data);
            })

        })

    }

    const [data, setData] = React.useState([]);




    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >History</Text>
                </View>




            </View>
            <ScrollView>

                {data.map(item => {
                    return (

                        <View key={item.id_nilai} style={{ padding: 10, }} >
                            <TouchableOpacity style={{ padding: 10, backgroundColor: '#F5F5F5', paddingHorizontal: 48, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, }} >
                                <Text style={{ color: '#B0B0B0', marginLeft: 0, fontFamily: 'Alata-Regular', fontSize: 15, right: 40 }} >{new Date(item.tanggal).toDateString()}</Text>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ marginLeft: 0, fontFamily: 'Alata-Regular', fontSize: 15, flex: 1, }} >Unit {item.unit}</Text>
                                    <Text style={{ marginLeft: 0, fontFamily: 'Alata-Regular', fontSize: 25, right: 40 }} >Skor {item.nilai}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}


            </ScrollView>


            <View style={{ padding: 1, backgroundColor: colors.secondary, }}></View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}  >
                    <Image style={{ width: 38, height: 33, }} source={require('../../assets/img/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{}}  >
                    <Image style={{ width: 28, height: 33, }} source={require('../../assets/img/history.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanAkun')} style={{}}  >
                    <Image style={{ width: 33, height: 33, }} source={require('../../assets/img/profle.png')} />
                </TouchableOpacity>
            </View>



        </View>
    );
}


export default HalamanHistory;