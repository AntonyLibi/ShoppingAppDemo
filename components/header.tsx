import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

interface HeaderInterface{
    title:string
}

export const Header=(props:HeaderInterface)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
      height:70,
      padding:20,
      backgroundColor:'darkslateblue'
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center'
    }
})