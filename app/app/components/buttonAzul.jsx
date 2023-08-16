import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ onPress, text }) {
    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#38b6ff',
        height:'50px',
        borderRadius:'12px',
        marginTop:'64px',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color:'#fff',
        fontFamily:'Inter',
        fontSize:'20',
        fontWeight:'700',
    }
})