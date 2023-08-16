import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function CardDocumentos() {

  return (
    <View style={styles.card}>
        <Image 
          source={require('../../assets/img/docsMenu.png')} 
          style={{width:'80px', height:'80px'}}
        />
        <Text style={{fontFamily:'Inter', fontSize:16, textAlign:'center', fontWeight:'600'}}>DOCUMENTOS</Text>
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