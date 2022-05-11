import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface HeaderInterface{
    title:string
}

export const AddItem=(props:any)=>{

    const [text, setText]=useState('');

    const onChange=(textValue:string)=>setText(textValue)

    return(
       <View>
           <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange}/>
           <TouchableOpacity style={styles.btn} onPress={()=>{props.addItem(text)}}>
              <Text style={styles.btnText}>
                  <Ionicons name="add" size={24} color="black" />
                  </Text>
           </TouchableOpacity>
       </View>
    )
}

const styles=StyleSheet.create({
   input:{
       height:60,
       padding:8,
       fontSize:16
   },
   btn:{
       backgroundColor:'#c2bad8',
       padding:9,
       margin:5
   },
   btnText:{
       color:'darkslateblue',
       fontSize:20,
       textAlign:'center'
   }
})