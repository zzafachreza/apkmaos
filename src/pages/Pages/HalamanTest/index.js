import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import colors from '../../../utils/colors/colors'

export default function HalamanTest() {

  const [skor,setSkor] = useState(0);
    const [skor2,setSkor2] = useState(0);

  return (
    <View style={{
        padding:10,
    }}>
      <Text>1. berapa hasil 1 + 1 ?</Text>

    <TouchableOpacity onPress={()=>{
      setSkor(0)
    }} style={styles.test}>
        <Text>A. 10</Text>
    </TouchableOpacity>

       <TouchableOpacity  onPress={()=>{
      setSkor(10)
    }} style={styles.test}>
        <Text>B. 2</Text>
    </TouchableOpacity>

   <TouchableOpacity  onPress={()=>{
      setSkor(0)
    }} style={styles.test}>
        <Text>C. 6</Text>
    </TouchableOpacity>
       <TouchableOpacity  onPress={()=>{
      setSkor(0)
    }} style={styles.test}>
        <Text>D. 200</Text>
    </TouchableOpacity>

    <Text style={{
      fontSize:20,
      textAlign:'center'
    }}>SKOR soal : {skor}</Text>


     <Text>1. berapa hasil 5 + 5 ?</Text>

    <TouchableOpacity onPress={()=>{
      setSkor2(10)
    }} style={styles.test}>
        <Text>A. 10</Text>
    </TouchableOpacity>

       <TouchableOpacity  onPress={()=>{
   setSkor2(0)
    }} style={styles.test}>
        <Text>B. 2</Text>
    </TouchableOpacity>

   <TouchableOpacity  onPress={()=>{
   setSkor2(0)
    }} style={styles.test}>
        <Text>C. 6</Text>
    </TouchableOpacity>
       <TouchableOpacity  onPress={()=>{
   setSkor2(0)
    }} style={styles.test}>
        <Text>D. 200</Text>
    </TouchableOpacity>

    <Text style={{
      fontSize:20,
      textAlign:'center'
    }}>SKOR soal : {skor2}</Text>

      <View style={{
        borderBottomWidth:1,
        marginVertical:20
      }} />
  <Text style={{
      fontSize:20,
      textAlign:'center'
    }}>Total SKOR : {skor + skor2}</Text>


    </View>

    
  )
}

const styles = StyleSheet.create({
  test:{
    marginVertical:5,
    backgroundColor:colors.border,padding:5
  }
})