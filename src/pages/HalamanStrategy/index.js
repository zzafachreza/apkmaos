// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanStrategy({navigation}) {


  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>

<View  style={{backgroundColor:colors.secondary, padding:10,borderBottomLeftRadius:20, borderBottomRightRadius:20, bottom:30 }}>
<View   style={{flexDirection:'row', padding:10, top:25}} >
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanContent')} >
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{padding:10, bottom:10}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white, textAlign:'center'}} >Guidance Strategy</Text>
  </View>
</View>
<ScrollView>
 
 <View   style={{padding:10, }}>
    <Text   style={{fontSize:15, fontFamily:'Alata-Regular'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan.
</Text>
 </View>

  
 <View   style={{padding:10,}}>
    <Text   style={{fontSize:15, fontFamily:'Alata-Regular'}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan.
</Text>
 </View>

<View style={{padding:10,  top:5, margin:20 }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanTaks1')} style={{padding:10, backgroundColor:colors.primary,  borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Next</Text>
    </TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10, justifyContent:'space-around'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHistory')}  style={{}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('HalamanAkun')}  style={{}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default HalamanStrategy;