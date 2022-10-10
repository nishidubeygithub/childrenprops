import React from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({children}) => {
    return (
        <View style ={styles.container}>
            <Header/>
            {children}
            <Footer/>
            </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Layout;