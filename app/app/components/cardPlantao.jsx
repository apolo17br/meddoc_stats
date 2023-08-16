import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { ActionModalPlantao } from './actionModalPlantao';

const transparent = 'rgba(0,0,0,0.6)';

export function CardPlantao() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={ () => setVisibleModal(true)}>
        <Image 
          source={require('../../assets/img/plantaoMenu.png')} 
          style={{width:'80px', height:'80px'}}
        />
        <Text style={{fontFamily:'Inter', fontSize:16, textAlign:'center', fontWeight:'600'}}>PLANTÃO{'\n'}MÉDICO</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        animationType='fade'
        transparent={true}
        onRequestClose={ () => setVisibleModal(false) }
      >
        <View style={{flex:1, backgroundColor:transparent}}>
          <ActionModalPlantao 
            handleClose={ () => setVisibleModal(false) }/>
        </View>
      </Modal>
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
