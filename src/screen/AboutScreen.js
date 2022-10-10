import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import Header from '../components/Header';
import Footer from '../components/Footer'

const AboutScreen = () =>{
    return (
        
        <SafeAreaView style = {styles.container}>
            <Header/>
            <Text>AboutScreen</Text>
            <Footer/>
            </SafeAreaView>
    )
}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default AboutScreen
