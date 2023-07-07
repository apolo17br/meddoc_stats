import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({ navigation }) {
    return (

        <SafeAreaView style={{backgroundColor:'#38b6ff', width:'100%', height:'100px'}}>
            <View  style={styles.header}>
                <TouchableOpacity onPress={() => navigation.popToTop()}>
                    <IoArrowBackCircleOutline style={{color:'#fff', width:'64px', height:'64px'}} />
                </TouchableOpacity>

                <View style={{backgroundColor:'#fff', borderRadius:20, height:'100%', width:'20%'}}>
                    <Image source={require('../../assets/img/logo.png')} style={styles.logoHeader}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        margin:'16px',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    logoHeader: {
        height:'80%',
        width:'80%',
        resizeMode:'stretch',
        alignSelf:'center',
        marginVertical:'5%',
        position:'absolute'
    }
})
