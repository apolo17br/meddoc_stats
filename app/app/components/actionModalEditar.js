import React, {useState} from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { ActionModalCancelar } from './actionModalCancelar';

const transparent = 'rgba(0,0,0,0.6)';

export function ActionModalEditar({ handleClose, onPress }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.infoText}>Especialidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.infoText}>Médico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.infoText}>Localidade do médico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.infoText}>Data</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.cancel} onPress={ () => setModalVisible(true)}>Desejo cancelar minha consulta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBuscar}>
                    <Text style={styles.buttonText}>BUSCAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancelar} onPress={handleClose}>
                    <Text style={styles.buttonText}>VOLTAR</Text>
                </TouchableOpacity>

                <Modal
                    visible={modalVisible}
                    animationType='fade'
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, backgroundColor: transparent }}>
                        <ActionModalCancelar
                            handleClose={() => setModalVisible(false)} />
                    </View>
                </Modal>

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
        height: '450px',
        width: '350px',
        backgroundColor: '#fff',
        padding: '42px',
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
    buttonCancelar: {
        zIndex: 99,
        borderRadius: 12,
        paddingHorizontal: '32px',
        paddingVertical: '8px',
        backgroundColor: '#A0AEC0',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        marginTop: '8px'
    },
    buttonBuscar: {
        zIndex: 99,
        borderRadius: 12,
        paddingHorizontal: '32px',
        paddingVertical: '8px',
        backgroundColor: '#38b6ff',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        marginTop: '8px'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    infoText: {
        color: '#a0aec0',
        fontFamily: 'Inter',
        fontSize: 16
    },
    cancel: {
        fontFamily: 'Inter',
        color: 'red',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: '32px',
        marginTop: '8px'
    }
})