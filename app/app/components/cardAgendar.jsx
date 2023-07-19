import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { ActionModalAgendar } from './actionModalAgendar';

const transparent = 'rgba(0,0,0,0.6)';

export function CardAgendar() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={ () => setVisibleModal(true)}>
        <Image 
          source={require('../../assets/img/agendarMenu.png')} 
          style={{width:'80px', height:'80px'}}
        />
        <Text style={{fontFamily:'Inter', fontSize:16, textAlign:'center', fontWeight:'600'}}>AGENDAR{'\n'}CONSULTA</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        animationType='fade'
        transparent={true}
        onRequestClose={ () => setVisibleModal(false) }
      >
        <View style={{flex:1, backgroundColor:transparent}}>
          <ActionModalAgendar 
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




// import React, {useState} from 'react';
// import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
// import { FaUserDoctor } from "react-icons/fa6";

// const ModalPlantao = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>

//             <View>
//               <FaUserDoctor style={{height:'64px', width:'64px'}}/>
//             </View>

//             <Pressable style={styles.plantao} onPress={onPress}>
//               <Text style={styles.text}>PLANTÃO ADULTO</Text>
//             </Pressable>
//             <Text style={{fontFamily:'Inter', color:'#A0AEC0', fontSize:14, alignSelf:'flex-start', fontStyle:'italic', marginBottom:'8px'}}>Acima de 14 anos</Text>

//             <Pressable style={styles.plantao} onPress={() => navigation.navigate('OnDutyChild')}>
//               <Text style={styles.text}>PLANTÃO PEDIÁTRICO</Text>
//             </Pressable>
//             <Text style={{fontFamily:'Inter', color:'#A0AEC0', fontSize:14, alignSelf:'flex-start', fontStyle:'italic', marginBottom:'8px'}}>Até 13 anos e 11 meses</Text>

//             <Pressable style={styles.cancel} onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.text}>CANCELAR</Text>
//             </Pressable>

//           </View>
//         </View>
//       </Modal>
//       <TouchableOpacity
//         style={styles.buttonOpen}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.title}>PLANTÃO MÉDICO</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000b3',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     height:'356px',
//     width:'356px',
//     alignItems: 'center',
//     justifyContent:'center',
//     paddingHorizontal:'32px',
//   },
//   plantao: {
//     borderRadius:12,
//     paddingHorizontal:'32px',
//     paddingVertical:'8px',
//     backgroundColor:'#38b6ff',
//     alignItems:'center',
//     width:'100%',
//     height:'60px',
//     justifyContent:'center',
//     marginTop:'8px'
//   },
//   cancel: {
//     borderRadius:12,
//     paddingHorizontal:'32px',
//     paddingVertical:'8px',
//     backgroundColor:'#A0AEC0',
//     alignItems:'center',
//     width:'100%',
//     height:'60px',
//     justifyContent:'center',
//     marginTop:'8px'
//   },
//   buttonOpen: {
//     backgroundColor: '#fff',
//     height:'150px',
//     width:'150px',
//     shadowColor: '#000',
//     shadowOffset: {
//       width:0,
//       height: 4,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius:15,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   buttonClose: {
//     backgroundColor: '#A0AEC0',
//   },
//   text: {
//     color: '#fff',
//     fontFamily:'Inter',
//     textAlign: 'center',
//     fontSize:16,
//     fontWeight:'600'
//   },
//   title: {
//     color: '#000',
//     fontFamily:'Inter',
//     textAlign: 'center',
//     fontSize:16
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default ModalPlantao;

// import React, {useState} from 'react';
// import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
// import { FaUserDoctor } from "react-icons/fa6";

// const ModalAgendar = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>

//             <View>
//               <FaUserDoctor style={{height:'64px', width:'64px'}}/>
//             </View>

//             <Pressable style={styles.plantao} onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.text}>PLANTÃO ADULTO</Text>
//             </Pressable>
//             <Text style={{fontFamily:'Inter', color:'#A0AEC0', fontSize:14, alignSelf:'flex-start', fontStyle:'italic', marginBottom:'8px'}}>Acima de 14 anos</Text>

//             <Pressable style={styles.plantao} onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.text}>PLANTÃO PEDIÁTRICO</Text>
//             </Pressable>
//             <Text style={{fontFamily:'Inter', color:'#A0AEC0', fontSize:14, alignSelf:'flex-start', fontStyle:'italic', marginBottom:'8px'}}>Até 13 anos e 11 meses</Text>

//             <Pressable style={styles.cancel} onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.text}>CANCELAR</Text>
//             </Pressable>

//           </View>
//         </View>
//       </Modal>
//       <TouchableOpacity
//         style={styles.buttonOpen}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.title}>AGENDAR CONSULTA</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000b3',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     height:'356px',
//     width:'356px',
//     alignItems: 'center',
//     justifyContent:'center',
//     paddingHorizontal:'32px',
//   },
//   plantao: {
//     borderRadius:12,
//     paddingHorizontal:'32px',
//     paddingVertical:'8px',
//     backgroundColor:'#38b6ff',
//     alignItems:'center',
//     width:'100%',
//     height:'60px',
//     justifyContent:'center',
//     marginTop:'8px'
//   },
//   cancel: {
//     borderRadius:12,
//     paddingHorizontal:'32px',
//     paddingVertical:'8px',
//     backgroundColor:'#A0AEC0',
//     alignItems:'center',
//     width:'100%',
//     height:'60px',
//     justifyContent:'center',
//     marginTop:'8px'
//   },
//   buttonOpen: {
//     backgroundColor: '#fff',
//     height:'150px',
//     width:'150px',
//     shadowColor: '#000',
//     shadowOffset: {
//       width:0,
//       height: 4,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     borderRadius:15,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   buttonClose: {
//     backgroundColor: '#A0AEC0',
//   },
//   text: {
//     color: '#fff',
//     fontFamily:'Inter',
//     textAlign: 'center',
//     fontSize:16,
//     fontWeight:'600'
//   },
//   title: {
//     color: '#000',
//     fontFamily:'Inter',
//     textAlign: 'center',
//     fontSize:16
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default ModalAgendar;