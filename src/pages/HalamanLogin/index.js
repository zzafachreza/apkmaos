// In App.js in a new project

import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Keyboard, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { apiURL, api_token, MYAPP, storeData } from "../../utils/localStorage";
import axios from "axios";
function HalamanLogin({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    email: '',
    password: '',
  });

  const sendServer = () => {


    if (kirim.email.length == 0 || kirim.password.length == 0) {
      Alert.alert(MYAPP, 'username or password is not empty !')
    } else {
      console.log(kirim);
      axios.post(apiURL + 'login', kirim).then(res => {
        console.log(res.data);
        if (res.data.status == 404) {
          Alert.alert(MYAPP, res.data.message)
        } else {
          storeData('user', res.data.data);
          navigation.navigate('HalamanHome')
        }
      })
    }


  }



  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>

      <ScrollView>

        <View style={{ padding: 12, marginTop: 40, alignItems: 'center' }} >
          <Image style={{ width: 134, height: 244, }} source={require('../../assets/img/logomaos.png')} />
        </View>

        <TextInput onChangeText={x => setKirim({
          ...kirim,
          email: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Email' placeholderTextColor='gray' />
        <TextInput onChangeText={x => setKirim({
          ...kirim,
          password: x
        })} style={{ margin: 10, backgroundColor: colors.white, borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: colors.secondary, fontFamily: 'Alata-Regular', color: colors.black }} placeholder='Password' placeholderTextColor='gray' secureTextEntry={true} />

        <View style={{ padding: 10, alignItems: 'center' }} >
          <TouchableOpacity onPress={sendServer} style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, paddingHorizontal: 130, borderWidth: 1, borderColor: colors.white }} >
            <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', }}    >Login</Text>
          </TouchableOpacity>

        </View>

        <View style={{ padding: 10, }} >
          <TouchableOpacity onPress={() => navigation.navigate('HalamanRegister')} style={{ padding: 10, borderRadius: 10, paddingHorizontal: 130 }} >
            <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', textAlign: 'center' }}    >Register</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>

  );
}


export default HalamanLogin;

