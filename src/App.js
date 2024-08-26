// In App.js in a new project
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanSplash from './pages/HalamanSplash';
import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';
import HalamanHome from './pages/HalamanHome';
import HalamanUnitSatu from './pages/HalamanUnitSatu';
import HalamanUnitDua from './pages/HalamanUnitDua';
import HalamanUnitTiga from './pages/HalamanUnitTiga';
import HalamanUnitEmpat from './pages/HalamanUnitEmpat';
import HalamanUnitLima from './pages/HalamanUnitLima';
import HalamanStudent from './pages/HalamanStudent';
import HalamanTeacher from './pages/HalamanTeacher';
import HalamanReception from './pages/HalamanReception';
import HalamanContent from './pages/HalamanContent';
import HalamanStrategy from './pages/HalamanStrategy';
import HalamanTaks1 from './pages/HalamanTaksSatu';
import HalamanResultTaks1 from './pages/HalamanResultTaksSatu';
import HalamanTaks2 from './pages/HalamanTaksDua';
import HalamanResultTaks2 from './pages/HalamanResultTaksDua';
import HalamanTaks3 from './pages/HalamanTaksTiga';
import HalamanResultTaks3 from './pages/HalamanResultTaksTiga';
import HalamanTaks4 from './pages/HalamanTaksEmpat';
import HalamanResultTaks4 from './pages/HalamanResultTaksEmpat';
import HalamanFinalTaks from './pages/HalamanFinalTaks';
import HalamanReflection from './pages/HalamanReflection';
import HalamanAkun from './pages/HalamanAkun';
import HalamanHistory from './pages/HalamanHistory';
import KelompokTaksSatu from './pages/Pages/UnitSatu';
import KelompokTaksSatuDua from './pages/Pages/UnitSatuDua';
import KelompokTaksSatuTiga from './pages/Pages/UnitSatuTiga';
import KelompokTaksSatuEmpat from './pages/Pages/TaksSatuEmpat';
import KelompokTaksSatuLima from './pages/Pages/UnitSatuLima';
import KelompokTaksSatuEnam from './pages/Pages/UnitSatuEnam';
import KelompokTaksSatuTujuh from './pages/Pages/UnitSatuTujuh';
import KelompokTaksSatuDelapan from './pages/Pages/UnitSatuDelapan';
import KelompokTaksDua from './pages/Pages/UnitDuaSatu';
import KelompokTaksDuaDua from './pages/Pages/UnitDuaDua';
import KelompokTaksDuaTiga from './pages/Pages/UnitDuaTiga';
import KelompokTaksDuaEmpat from './pages/Pages/UnitDuaEmpat';
import KelompokTaksDuaLima from './pages/Pages/UnitDuaLima';
import KelompokTaksDuaEnam from './pages/Pages/UnitDuaEnam';
import KelompokTaksDuaTujuh from './pages/Pages/UnitDuaTujuh';
import KelompokTaksDuaDelapan from './pages/Pages/UnitDuaDelapan';
import KelompokTaksTiga from './pages/Pages/UnitTigaSatu';
import KelompokTaksTigaDua from './pages/Pages/UnitTigaDua';
import KelompokTaksTigaTiga from './pages/Pages/UnitTigaTiga';
import KelompokTaksTigaEmpat from './pages/Pages/UnitTigaEmpat';
import KelompokTaksTigaLima from './pages/Pages/UnitTigaLima';
import KelompokTaksTigaEnam from './pages/Pages/UnitTigaEnam';
import KelompokTaksTigaTujuh from './pages/Pages/UnitTigaTujuh';
import KelompokTaksTigaDelapan from './pages/Pages/UnitTigaDelapan';
import KelompokTaksEmpatSatu from './pages/Pages/UnitEmpatSatu';
import KelompokTaksEmpatDua from './pages/Pages/UnitEmpatDua';
import KelompokTaksEmpatTiga from './pages/Pages/UnitEmpatTiga';
import KelompokTaksEmpatEmpat from './pages/Pages/UnitEmpatEmpat';
import KelompokTaksEmpatima from './pages/Pages/UnitEmpatLima';
import KelompokTaksEmpatEnam from './pages/Pages/UnitEmpatEnam';
import KelompokTaksEmpatTujuh from './pages/Pages/UnitEmpatTujuh';
import KelompokTaksEmpatDelapan from './pages/Pages/UnitEmpatDelapan';
import KelompokTaksLimaSatu from './pages/Pages/UnitLimaSatu';
import KelompokTaksLimaDua from './pages/Pages/UnitLimaDua';
import KelompokTaksLimaTiga from './pages/Pages/UnitLimaTiga';
import KelompokTaksLimaEmpat from './pages/Pages/UnitLimaEmpat';
import KelompokTaksLimaLima from './pages/Pages/UnitLimaLima';
import KelompokTaksLimaEnam from './pages/Pages/UnitLimaEnam';
import KelompokTaksLimaTujuh from './pages/Pages/UnitLimaTujuh';
import KelompokTaksLimaDelapan from './pages/Pages/UnitLimaDelapan';
import HalamanTest from './pages/Pages/HalamanTest';
import HalamanStudent0 from './pages/HalamanStudent0';
import HalamanTeacher0 from './pages/HalamanTeacher0';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanLogin" component={HalamanLogin} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanRegister" component={HalamanRegister} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanUnitSatu" component={HalamanUnitSatu} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanUnitDua" component={HalamanUnitDua} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanUnitTiga" component={HalamanUnitTiga} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanUnitEmpat" component={HalamanUnitEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanUnitLima" component={HalamanUnitLima} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanStudent" component={HalamanStudent} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTeacher" component={HalamanTeacher} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanReception" component={HalamanReception} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanContent" component={HalamanContent} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanStrategy" component={HalamanStrategy} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTaks1" component={HalamanTaks1} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanResultTaks1" component={HalamanResultTaks1} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTaks2" component={HalamanTaks2} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanResultTaks2" component={HalamanResultTaks2} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTaks3" component={HalamanTaks3} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanResultTaks3" component={HalamanResultTaks3} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTaks4" component={HalamanTaks4} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanResultTaks4" component={HalamanResultTaks4} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanFinalTaks" component={HalamanFinalTaks} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanReflection" component={HalamanReflection} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanAkun" component={HalamanAkun} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanHistory" component={HalamanHistory} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatu" component={KelompokTaksSatu} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuDua" component={KelompokTaksSatuDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuTiga" component={KelompokTaksSatuTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuEmpat" component={KelompokTaksSatuEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuLima" component={KelompokTaksSatuLima} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuEnam" component={KelompokTaksSatuEnam} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuTujuh" component={KelompokTaksSatuTujuh} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksSatuDelapan" component={KelompokTaksSatuDelapan} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaSatu" component={KelompokTaksDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaTiga" component={KelompokTaksDuaTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaDua" component={KelompokTaksDuaDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaEmpat" component={KelompokTaksDuaEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaLima" component={KelompokTaksDuaLima} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaEnam" component={KelompokTaksDuaEnam} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaTujuh" component={KelompokTaksDuaTujuh} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksDuaDelapan" component={KelompokTaksDuaDelapan} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaSatu" component={KelompokTaksTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaDua" component={KelompokTaksTigaDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaTiga" component={KelompokTaksTigaTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaEmpat" component={KelompokTaksTigaEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaLima" component={KelompokTaksTigaLima} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaEnam" component={KelompokTaksTigaEnam} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaTujuh" component={KelompokTaksTigaTujuh} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksTigaDelapan" component={KelompokTaksTigaDelapan} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatSatu" component={KelompokTaksEmpatSatu} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatDua" component={KelompokTaksEmpatDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatTiga" component={KelompokTaksEmpatTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatEmpat" component={KelompokTaksEmpatEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatLima" component={KelompokTaksEmpatima} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatEnam" component={KelompokTaksEmpatEnam} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatTujuh" component={KelompokTaksEmpatTujuh} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksEmpatDelapan" component={KelompokTaksEmpatDelapan} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaSatu" component={KelompokTaksLimaSatu} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaDua" component={KelompokTaksLimaDua} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaTiga" component={KelompokTaksLimaTiga} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaEmpat" component={KelompokTaksLimaEmpat} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaLima" component={KelompokTaksLimaLima} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaEnam" component={KelompokTaksLimaEnam} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaTujuh" component={KelompokTaksLimaTujuh} options={{ headerShown: false }} />
        <Stack.Screen name="KelompokTaksLimaDelapan" component={KelompokTaksLimaDelapan} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanStudent0" component={HalamanStudent0} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanTeacher0" component={HalamanTeacher0} options={{ headerShown: false }} />












      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;