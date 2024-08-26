// In App.js in a new project

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HalamanReflection({navigation}) {

    const [modal,setModal] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor:colors.white,  }}>

<Modal   style={{alignItems:'center'}} isVisible={modal}>
        <View style={{ backgroundColor:colors.white,borderRadius:20, width:300, height:200, }}>
        
        <View style={{flexDirection:'row', justifyContent:'flex-end', padding:10}}>
        <TouchableOpacity  style={{}}   onPress={() => setModal(false)}   ><Image   style={{width:15, height:15,}} source={require('../../assets/img/x.png')} /></TouchableOpacity>
        </View>
        <View style={{padding:10 ,bottom:20, justifyContent:'center', alignItems:'center'}}>
        <Image  style={{width:128, height:128, }} source={require('../../assets/img/ceklis.png')} />
          <Text  style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}}  >Completed!</Text>
          </View>
        </View>
      </Modal>



<View  style={{backgroundColor:colors.secondary, padding:10,borderBottomLeftRadius:20, borderBottomRightRadius:20, bottom:30 }}>
<View   style={{flexDirection:'row', padding:10, top:25  }} >
    <TouchableOpacity     onPress={()=>navigation.navigate('HalamanFinalTaks')}  >
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{padding:10, bottom:10 }}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white, textAlign:'center'}} >Reflection</Text>
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

<View style={{ padding:10, top:5, margin:20 }} >
    <TouchableOpacity   onPress={() => setModal(true)}  style={{padding:10, backgroundColor:colors.primary, borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Next</Text>
    </TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10, justifyContent:'space-around'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHistory')}  style={{}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')} style={{}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>





    </View>
  );
}


export default HalamanReflection;