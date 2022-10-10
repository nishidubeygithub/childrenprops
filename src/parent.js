import React, { useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'

import Card from './child'
import {useDispatch} from "react-redux";

const Parent=()=> {
    const [item, setItem]= useEffect([
        {title:"Hello", id:'20'},
        {title:"World", id:'21'},
        {title:"How", id:'22'},
        {title:"Are", id:'23'},
        {title:"You", id:'24'},
    ]);

const dispatch= useDispatch();

const onPressHandler= id=>{
    console.log(id)
}
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <FlatList
      data={item}
      renderItem={(item,index)=>{
      return(
        <Card item={item} onPressHandler={onPressHandler}/>
      )}}
       />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:200
    },
})

export default Parent