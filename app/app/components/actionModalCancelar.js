import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { IoCloseCircleOutline } from 'react-icons/io5';

export function ActionModalCancelar({ handleClose, onPress }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <IoCloseCircleOutline style={{color:'#F56868', width:'128px', height:'128px'}}/>

                <Text style={{fontFamily:'Inter', color:'#000', fontSize:20, marginVertical:'16px'}}>TEM CERTEZA?</Text>
                <Text style={{fontFamily:'Inter', color:'#000', fontSize:16, textAlign:'center', marginBottom:'16px'}}>Você realmente deseja cancelar sua consulta?</Text>

                <View style={{ flexDirection: 'row', justifyContent:'space-evenly', width:'100%' }}>
                    <TouchableOpacity style={styles.buttonFechar} onPress={handleClose}>
                        <Text style={styles.buttonText}>FECHAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancelar}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginVertical: '16px',
        marginHorizontal: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
        width: '350px',
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '15px'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        maxHeight: '45px',
        height: '100%',
        width: '100%',
        borderRadius: '15px',
        paddingVertical: '14px',
        paddingHorizontal: '16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
    },
    buttonFechar: {
        zIndex: 99,
        borderRadius: 12,
        paddingVertical: '8px',
        backgroundColor: '#A0AEC0',
        alignItems: 'center',
        width: '128px',
        height: '50px',
        justifyContent: 'center',
    },
    buttonCancelar: {
        zIndex: 99,
        borderRadius: 12,
        paddingVertical: '8px',
        backgroundColor: '#F56868',
        alignItems: 'center',
        width: '128px',
        height: '50px',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
})