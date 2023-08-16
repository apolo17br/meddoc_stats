import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Header from '../components/header';
import { IoAlertCircle, IoWarningOutline } from 'react-icons/io5';

const transparent = 'rgba(0,0,0,0.6)';

export default function Confirmed({ navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (

    <View style={{ flex: 1, backgroundColor: '#38b6ff', height: '100%' }}>
      <Header />

      <View style={styles.subHeader}>
        <Text style={styles.title}>RETORNOS</Text>
      </View>

      <View style={styles.background}>

        <Text style={styles.text}>Você possui um retorno pendente com</Text>

        <View style={styles.card}>
          <Text style={styles.text}>Dr. Fulano de Tal</Text>

          <View style={{ alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
            <Text style={{ fontFamily: 'Inter', fontSize: '18px' }}>Tipo de atendimento</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IoWarningOutline style={{ height: '25px', width: '25px' }} />
              <Text style={{ fontFamily: 'Inter', fontSize: '18px', marginLeft: '8px' }}>Expira em X dias</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar documentos</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{flexDirection:'row', marginTop:'16px'}}>
          <View>
          <IoAlertCircle style={{ height: '25px', width: '25px' }} />
          </View>
            <Text style={{paddingLeft:'8px', textAlign:'justify', fontFamily:'Inter', fontSize:18}}>Os retornos podem ser realizados até 20 dias após a primeira consulta.{'\n'}Após esse período, a consulta é cobrada de acordo com o valor estipulado pelo médico.</Text>
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
    fontWeight: '600',
    marginBottom: '16px'
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