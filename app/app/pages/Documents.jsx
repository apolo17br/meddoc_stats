import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Header from '../components/header';
import { IoChevronDownOutline, IoFolderOpen } from 'react-icons/io5';

export default function Documents({ navigation }) {

  return (
    <View style={{ flex: 1, backgroundColor: '#38b6ff', height: '100%' }}>
      <Header />

      <View style={styles.subHeader}>
        <Text style={styles.title}>DOCUMENTOS</Text>
      </View>

      <View style={styles.background}>

        <View>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>Recentes</Text>
            <IoChevronDownOutline style={{paddingLeft:'16px', height:'40px', width:'40px'}}/>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.files}>
            <IoFolderOpen style={{height:'50px', width:'50px', color:'#38b6ff'}}/>
            <Text style={styles.types}>Atestados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.files}>
            <IoFolderOpen style={{height:'50px', width:'50px', color:'#38b6ff'}}/>
            <Text style={styles.types}>Exames de imagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.files}>
            <IoFolderOpen style={{height:'50px', width:'50px', color:'#38b6ff'}}/>
            <Text style={styles.types}>Exames laboratoriais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.files}>
            <IoFolderOpen style={{height:'50px', width:'50px', color:'#38b6ff'}}/>
            <Text style={styles.types}>Laudos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.files}>
            <IoFolderOpen style={{height:'50px', width:'50px', color:'#38b6ff'}}/>
            <Text style={styles.types}>Prescrições</Text>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingLeft:'16px',
    flexDirection: 'row',
    paddingVertical:'8px',
    marginBottom:'16px'
  },
  text: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight:'600'
  },
  files: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'flex-start',
    marginVertical:'16px',
  },
  types: {
    fontFamily:'Inter',
    fontSize:20,
    color:'#000',
    paddingLeft:'16px'
  }
});