import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function CardAgendar() {

  return (
    <View style={styles.card}>
        <Image 
          source={require('../../assets/img/agendarMenu.png')} 
          style={{width:'80px', height:'80px'}}
        />
        <Text style={{fontFamily:'Inter', fontSize:16, textAlign:'center', fontWeight:'600'}}>AGENDAR{'\n'}CONSULTA</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  card: {
    backgroundColor: '#fff',
    height:'150px',
    width:'150px',
    shadowColor: '#000',
    shadowOffset: {
      width:0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    gap:'8px',
  }
})