
import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ClearIcon from '@mui/icons-material/Clear';
import { MaterialIcons } from '@expo/vector-icons';

interface itemInterface{
    id: string;
    text: string;
}

export const ListItem=(props:any)=>{
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{props.item.text}</Text>
              {/* <ClearIcon/> */}
              <MaterialIcons name="delete" size={24} color="black" onPress={()=>props.deleteItem(props.item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
      paddingTop:15,
      backgroundColor:'#f8f8f8',
      borderBottomWidth:1,
      borderColor:'#eee'
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listItemText:{
        fontSize:18,
    }
  });