
import React, { useState, Component, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";
import { apiURL, api_token, MYAPP } from "../../utils/localStorage";
import axios from "axios";


function HalamanRegister({ navigation }) {

  const [modal, setModal] = useState(false);
  const [cek, setCek] = useState(false);
  const [kirim, setKirim] = useState({
    api_token: api_token,
    nama_lengkap: '',
    email: '',
    password: '',
    alamat: '',
    telepon: ''
  });

  const sendServer = () => {

    console.log(kirim);

    if (!cek) {
      alert('You must checking the box !')
    } else {
      axios.post(apiURL + 'register', kirim).then(res => {
        console.log(res.data);
        if (res.data.status === 404) {
          Alert.alert(MYAPP, res.data.message);
        } else {
          Alert.alert(MYAPP, res.data.message);
          navigation.goBack();
        }
      })
    }


  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>



      <Modal style={{ alignItems: 'center' }} isVisible={modal}    >
        <View style={{ backgroundColor: colors.white, borderRadius: 20, padding: 10, width: 300, height: 200 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }} >
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('HalamanLogin')} ><Image style={{ width: 15, height: 15, }} source={require('../../assets/img/x.png')} /></TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', bottom: 20 }}>
            <Image style={{ width: 128, height: 128, }} source={require('../../assets/img/ceklis.png')} />
            <Text style={{ color: colors.secondary, fontFamily: 'Alata-Regular', fontSize: 20, textAlign: 'center' }} >Register Successful!</Text>
          </View>
        </View>
      </Modal>



      <ScrollView>

        <View style={{ flexDirection: 'row', padding: 10, marginTop: 110 }} >

        </View>


        <TextInput style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Name' onChangeText={x => setKirim({
          ...kirim,
          nama_lengkap: x
        })} placeholderTextColor='gray' />
        <TextInput onChangeText={x => setKirim({
          ...kirim,
          email: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Email' placeholderTextColor='gray' />
        <TextInput keyboardType="phone-pad" onChangeText={x => setKirim({
          ...kirim,
          telepon: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Phone Number' placeholderTextColor='gray' />
        <TextInput multiline onChangeText={x => setKirim({
          ...kirim,
          alamat: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Address' placeholderTextColor='gray' />
        <TextInput onChangeText={x => setKirim({
          ...kirim,
          password: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Password' placeholderTextColor='gray' secureTextEntry={true} />

        <TouchableOpacity onPress={() => {
          cek ? setCek(false) : setCek(true);
        }} style={{
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 5,
          marginVertical: 5,
          alignItems: 'center'
        }}>
          <View style={{
            marginRight: 5,
            width: 20,
            height: 20,
            backgroundColor: colors.white,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: cek ? colors.black : colors.white
            }}>v</Text>
          </View>
          <Text style={{

            color: colors.white,
          }}>By checking this box, you are agreeing to  <Text style={{

            color: colors.white,
            fontWeight: 'bold'
          }}>our terms of service</Text></Text>
        </TouchableOpacity>



        <View style={{ padding: 10, alignItems: 'center' }} >
          <TouchableOpacity onPress={sendServer} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, paddingHorizontal: 125, borderWidth: 1, borderColor: colors.white }} >
            <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', textAlign: 'center' }} >Register</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

    </View>

  );
}


export default HalamanRegister;