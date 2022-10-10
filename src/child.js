import React from 'react'
import {Text, SafeAreaView, Button, StyleSheet} from 'react-native'



const Card=({item,onPressHandler})=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text>{item.index}</Text>
            <Button title='DELETE' onPress={()=>onPressHandler(item.id)}/>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"gray",
        height:100,
        borderRadius:10,
        width:"100%"
    }
})
export default Card;