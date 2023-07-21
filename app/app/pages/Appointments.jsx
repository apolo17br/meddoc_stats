import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Header from '../components/header';
import Button from '../components/buttonAzul';
import { ActionModalPreco } from '../components/actionModalPreco';


const transparent = 'rgba(0,0,0,0.6)';

export default function Payments({ navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#38b6ff', height: '100%' }}>
      <Header />

      <View style={styles.subHeader}>
        <Text style={styles.title}>CONSULTAS</Text>
      </View>

      <View style={styles.background}>

        <View>
          <Text style={{ fontFamily: 'Inter', color: '#2d3748', fontSize: 24, marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Especialidade</Text>
          <TouchableOpacity style={styles.card} onPress={() => setVisibleModal(true)}>
            <Text style={styles.text}>Filtre as opções</Text>
          </TouchableOpacity>
        </View>
        <modalEspecialidade />
        

        <View>
          <Text style={{ fontFamily: 'Inter', color: '#2d3748', fontSize: 24, marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Médico</Text>
          <TouchableOpacity style={styles.card} onPress={() => setVisibleModal(true)}>
            <Text style={styles.text}>Filtre as opções</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ fontFamily: 'Inter', color: '#2d3748', fontSize: 24, marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Localidade</Text>
          <TouchableOpacity style={styles.card} onPress={() => setVisibleModal(true)}>
            <Text style={styles.text}>Filtre as opções</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ fontFamily: 'Inter', color: '#2d3748', fontSize: 24, marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Preço</Text>
          <TouchableOpacity style={styles.card} onPress={() => setVisibleModal(true)}>
            <Text style={styles.text}>Filtre as opções</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={visibleModal}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <View style={{ flex: 1, backgroundColor: transparent }}>
            <ActionModalPreco
              handleClose={() => setVisibleModal(false)} />
          </View>
        </Modal>

        <Button text='BUSCAR'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#38b6ff',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 900,
    marginLeft: '16px',
    marginBottom: '16px'
  },
  background: {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    backgroundColor: '#f9f9f9',
    height: 'auto',
    padding: '32px',
    flex: 1
  },
  presentation: {
    marginTop: '16px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    maxHeight: '256px',
    height: '100%',
    shadowOffset: '#000',
    shadowOpacity: 1,
  },
  placeholder: {
    fontFamily: 'Inter',
    color: '#A0AEC0',
    fontSize: '18px',
    padding: '16px',
  },
  payments: {
    backgroundColor: '#f0f0f0',
    borderRadius: '15px',
    marginTop: '16px',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    maxHeight: '50px',
    height: '100%',
    borderRadius: '15px',
    paddingVertical: '14px',
    paddingHorizontal: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    borderWidth: '1px',
    borderColor: '#E2E8F0'
  },
  text: {
    color: '#C0BBBB',
    fontFamily: 'Inter',
    fontSize: '20px',
  }
});