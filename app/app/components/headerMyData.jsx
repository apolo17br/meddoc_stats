import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { IoArrowBackCircleOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderMyData({ text, onPress }) {
    return (

        <SafeAreaView style={{backgroundColor:'#38b6ff', width:'100%', height:'90px'}}>
            <View  style={styles.header}>
                <TouchableOpacity onPress={onPress}>
                    <IoArrowBackCircleOutline style={{color:'#fff', width:'64px', height:'64px'}} />
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{backgroundColor:'#fff', borderRadius:'15px', height:'40px', alignSelf:'center', justifyContent:'center'}}>
                    <Text style={{paddingHorizontal:'16px', fontFamily:'Inter', color:'#38b6ff', alignSelf:'center', fontSize:20}}>Alterar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <IoPersonCircleOutline onPress={onPress} style={{color:'#fff', width:'64px', height:'64px'}}/>
                </TouchableOpacity>
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
        flexWrap:'wrap'
    }
})
