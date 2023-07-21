import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HeaderMenu from '../components/headerMenu';
import { CardPlantao } from '../components/cardPlantao'
import { CardAgendar } from '../components/cardAgendar';
import { CardDocumentos } from '../components/cardDocumentos';
import { CardMeusMedicos } from '../components/cardMeusMedicos';
import { CardConfirmadas } from '../components/cardConfirmadas';
import { CardRetornos } from '../components/cardRetornos';

export default function Menu({ navigation }) {

    return (
        <View style={{flex:1, backgroundColor:'#38b6ff'}}>
        <HeaderMenu />

            <View style={styles.background}>
                <View style={styles.cards}>

                    <CardPlantao />

                    <TouchableOpacity onPress={() => navigation.navigate('Appointments')}>
                        <CardAgendar />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('FollowUp')}>
                        <CardRetornos />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Confirmed')}>
                        <CardConfirmadas />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('MyDoctors')}>
                        <CardMeusMedicos />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
                        <CardDocumentos />
                    </TouchableOpacity>

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
        gap:'8px',
        justifyContent:'center'
    },
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
        fontWeight:'700',
        textAlign:'center'
    }
  });