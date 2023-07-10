import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function ButtonEntrar({ navigation }) {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.text}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
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