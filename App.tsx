import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch, Button, FlatList } from 'react-native';
import { Header } from './components/header';
import { v4 as uuid } from 'uuid'
import {ListItem} from './components/ListItems'
import { AddItem } from './components/AddItem';

const App=()=>{

  const [items,setItems]=useState([
    {id:uuid(),text:'Milk'},
    {id:uuid(),text:'Eggs'},
    {id:uuid(),text:'Bread'},
    {id:uuid(),text:'Juice'},
  ])

  const deleteItem=(id:any)=>{
      setItems(prevItems=>{
        return prevItems.filter(item=>item.id!=id)
      })
  }

  const addItem=(item:any)=>{
    if(item==="")
    {
       alert('Cannot add empty item')
    }
    else{
      setItems(prevItems=>{
        return[
          {id:uuid(),text:item},
         ...prevItems
        ]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item})=>(<ListItem item={item}
      deleteItem={deleteItem}/>)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30
  },
});

export default App

// interface AppInt{
//   name:string
//   age:number
// }

// const App2=(props:AppInt)=>{
//   const [isHungry, setIsHungry]=useState(true);

//   return (
//     <ScrollView>
//       <Switch/>
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <Text>First name- {props.name}</Text>
//       <Text>Age- {props.age}</Text>
//       <Image
//         source={{
//           uri:'https://reactnative.dev/docs/assets/p_cat2.png'
//         }}
//         style={{width:200,height:200}}>
//         </Image>
//     </View>
//     <TextInput style={{height:40,borderColor:'gray',borderWidth:1}}
//         defaultValue="You can type here" />
//     <Button onPress={()=>{
//       setIsHungry(false)
//     }}
//     disabled={!isHungry}
//     title={isHungry?"Eat":"Sleep"}>
//     </Button>
//   </ScrollView>
//   )
// }

// const App3=()=>{
//     const [text,setText]=useState('')
//     return(
//       <View style={{padding:10}}>
//         <TextInput
//           style={{height:40}}
//           placeholder="Type here"
//           onChangeText={newText=>setText(newText)}
//           defaultValue={text}
//          />
//          <Text style={{padding:10,fontSize:42}}>
//            {text.split(' ').map((value)=>value && '🍕').join(' ')}
//          </Text>
//       </View>
//     )
// }


