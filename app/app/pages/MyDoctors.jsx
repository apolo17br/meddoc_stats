import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Header from '../components/header';
import { IoCalendarClearOutline, IoTimeOutline } from 'react-icons/io5';
import { ActionModalDetalhar } from '../components/actionModalDetalhar';

const transparent = 'rgba(0,0,0,0.6)';

export default function Confirmed({ navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (

    <View style={{ flex: 1, backgroundColor: '#38b6ff', height: '100%' }}>
      <Header />

      <View style={styles.subHeader}>
        <Text style={styles.title}>MEUS MÉDICOS</Text>
      </View>

      <View style={styles.background}>

        <View style={styles.card}>
          <Text style={styles.text}>Dr. Fulano de Tal</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
            <IoCalendarClearOutline style={{ height: '20px', width: '20px' }} />
            <Text style={{ fontFamily: 'Inter', fontSize: '18px', paddingLeft: '8px' }}>XX/XX/XXXX</Text>
            <IoTimeOutline style={{ marginLeft: '16px', height: '20px', width: '20px' }} />
            <Text style={{ fontFamily: 'Inter', fontSize: '18px', paddingLeft: '8px' }}>XXhXX</Text>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={styles.button} onPress={ () => setVisibleModal(true)}>
              <Text style={styles.buttonText}>Detalhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={visibleModal}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <View style={{ flex: 1, backgroundColor: transparent }}>
            <ActionModalDetalhar
              handleClose={() => setVisibleModal(false)} />
          </View>
        </Modal>

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
  card: {
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: 'rgba(56, 182, 255, 0.4)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: '16px',
    paddingVertical: '16px',
    marginBottom: '16px',
    maxWidth: '512px',
    alignSelf: 'center'
  },
  text: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '22px',
    fontWeight: '600'
  },
  button: {
    backgroundColor: '#38b6ff',
    borderRadius: '15px',
    paddingHorizontal: '20px',
    paddingVertical: '10px'
  },
  buttonText: {
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: 20
  }
});