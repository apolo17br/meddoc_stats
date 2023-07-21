import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { IoArrowBackCircleOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderMenuDoctor({ text, onPress }) {
    return (

        <SafeAreaView style={{backgroundColor:'#38b6ff', width:'100%', height:'90px'}}>
            <View  style={styles.header}>
                <TouchableOpacity onPress={onPress}>
                    <IoArrowBackCircleOutline style={{color:'#fff', width:'64px', height:'64px'}} />
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={onPress} style={{backgroundColor:'#fff', borderRadius:'15px', height:'40px', alignSelf:'center', justifyContent:'center', marginRight:'8px'}}>
                    <Text style={{paddingHorizontal:'16px', fontFamily:'Inter', color:'#38b6ff', alignSelf:'center', fontSize:20}}>Sobre você</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress}>
                    <IoPersonCircleOutline style={{color:'#fff', width:'64px', height:'64px'}}/>
                </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.title}>Olá, Guilherme!</Text>
                    <Text style={styles.lembretes}>Próxima consulta: [data], às [hora]</Text>
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
    },
    title: {
        color:'#fff',
        fontSize:32,
        fontFamily:'Inter',
        fontWeight:900,
        marginLeft:'16px',
        marginTop:'16px',
      },
      lembretes: {
          fontFamily:'Inter',
          fontSize:'20px',
          color:'#fff',
          marginLeft:'16px'
      },
})
