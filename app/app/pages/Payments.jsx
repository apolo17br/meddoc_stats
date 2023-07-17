import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/header';
import ButtonsPagamentos from '../components/buttonsPagamentos';
import { IoDocumentTextOutline, IoTicketOutline } from 'react-icons/io5';

export default function Payments({ navigation }) {

    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>PAGAMENTOS</Text>
          </View>

          <View style={styles.background}>

            <View>
                <Text style={{fontFamily:'Inter', color:'#2d3748', fontSize:24, marginBottom:'8px', marginTop:'16px', fontWeight:'600'}}>Métodos de pagamento</Text>
                <ButtonsPagamentos text="PIX" />
                <ButtonsPagamentos text="Cartão de crédito" />
                <ButtonsPagamentos text="Boleto bancário" />
            </View>

            <View>
                <Text style={{fontFamily:'Inter', color:'#2d3748', fontSize:24, marginBottom:'8px', marginTop:'16px', fontWeight:'600'}}>Vouchers</Text>     
                <TouchableOpacity style={styles.card}>
                    <TextInput style={styles.text} placeholder='Adicionar código voucher'/>
                    <IoTicketOutline style={{height:'24px', width:'24px'}}/>
                </TouchableOpacity>       
            </View>

            <View>
                <Text style={{fontFamily:'Inter', color:'#2d3748', fontSize:24, marginBottom:'8px', marginTop:'16px', fontWeight:'600'}}>Histórico de pagamentos</Text>     
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.text}>Visualizar extrato</Text>
                    <IoDocumentTextOutline style={{height:'24px', width:'24px'}}/>
                </TouchableOpacity>       
            </View>

          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    subHeader: {
      backgroundColor: '#38b6ff',
    },
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
      height:'auto',
      padding:'32px',
      flex:1
    },
    presentation: {
        marginTop:'16px', 
        backgroundColor:'#fff', 
        borderRadius:'15px',
        maxHeight:'256px',
        height:'100%',
        shadowOffset:'#000',
        shadowOpacity:1,
    },
    placeholder: {
        fontFamily:'Inter',
        color:'#A0AEC0',
        fontSize:'18px',
        padding:'16px',
    },
    payments: {
      backgroundColor:'#f0f0f0',
      borderRadius:'15px',
      marginTop:'16px',
      flexDirection:'row',
      justifyContent:'space-between'
    },
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
  });