import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Card({ onPress, text }) {
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#fff',
        maxHeight:'150px',
        maxWidth:'150px',
        height:'100%',
        width:'100%',
        borderRadius:'15px',
        padding:'8px',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color:'#000',
        fontFamily:'Inter',
        fontSize:'14px',
        fontWeight:'700'
    }
})