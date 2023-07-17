import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderMenuDoctor from '../components/headerMenuDoctor';

export default function MenuDoctor({ navigation }) {
    return (
        <View style={{flex:1, backgroundColor:'#38b6ff'}}>
        <HeaderMenuDoctor />

            <View style={styles.background}>
                <View style={styles.cards}>
                    <Text>"AGENDA"</Text>
                    <Text>"RETORNOS"</Text> 
                    <Text>"PAGAMENTOS"</Text>
                </View>
            </View>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
        color:'#fff',
        fontSize:32,
        fontFamily:'Inter',
        fontWeight:900,
        marginLeft:'16px',
        marginBottom:'16px'
    },
    background: {
        borderTopLeftRadius:'30px',
        borderTopRightRadius:'30px',
        backgroundColor:'#f9f9f9',
        padding:'32px',
        marginTop:'128px',
        flex:1,
    },
    cards: {
        flexDirection:'row',
        flexWrap:'wrap',
        gap:'8px'
    }
  });