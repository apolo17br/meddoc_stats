import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IoPersonOutline, IoPersonAddOutline } from "react-icons/io5";

export default function Home({ navigation }) {

  return(

    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:'#fff'}}>
        <LinearGradient 
            colors={['#38b6ff', '#fff']} 
            style={{height:'97%', width:'100%'}}
        >
          <View style={{margin:'5%', alignItems:'center'}}>
            <Image
              source={require('../../assets/img/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.slogan}>A MEDICINA EM SUAS MÃOS</Text>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.client} onPress={() => navigation.navigate('SignIn')}>
            <IoPersonOutline style={styles.buttons} />
            <Text style={styles.cli}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.client} onPress={() => navigation.navigate('SignUp')}>
              <IoPersonAddOutline style={styles.buttons} />
              <Text style={styles.cli}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.doctor} onPress={() => navigation.navigate('SignUpDoctor')}>
              <Text style={styles.doc}>SOU MÉDICO</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <Text>MEDDOC &copy; 2023</Text>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode:'stretch',
    height:168,
    width:176
  },
  slogan: {
    color:'#e0aa3e',
    fontSize:20,
    fontFamily:'Raleway',
    fontWeight:'800',
    marginBottom:'64px'
  },
  buttons: {
    color:"#38b6ff",
    height:'35px',
    width:'35px',
    marginRight:'16px',
    marginLeft:'32px'
  },
  client: {
    backgroundColor:'#fff',
    borderRadius:12,
    alignItems:'center',
    height:'35%',
    width:'75%',
    marginBottom:'20px',
    flexDirection:'row',
  },
  cli:{
    fontSize:20,
    color:'#38b6ff',
    fontFamily:'Inter',
    fontWeight:'600'
  },
  doctor: {
    backgroundColor:'#38b6ff',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    height:'35%',
    width:'75%',
    marginBottom:'20px'
  },
  doc: {
    fontSize:20,
    color:'#fff',
    fontFamily:'Inter',
    fontWeight:'600'
  }
})
  