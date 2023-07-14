import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { IoCreateOutline } from 'react-icons/io5';

export default function ButtonsPagamentos({ onPress, text }) {
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
            <IoCreateOutline style={{height:'24px', width:'24px'}}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        backgroundColor:'#f0f0f0',
        maxHeight:'50px',
        height:'100%',
        borderRadius:'15px',
        paddingVertical:'14px',
        paddingHorizontal:'16px',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'8px',
        borderWidth:'1px',
        borderColor:'#E2E8F0'
    },
    text: {
        color:'#A0AEC0',
        fontFamily:'Inter',
        fontSize:'14px',
    }
})