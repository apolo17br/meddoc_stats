import React from 'react';
import '../../styles/global.css';
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Stack, VStack, SimpleGrid, Square, Center, Box } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import paciente from '../../assets/icons/pacient-icon.png'
import styles from './Header.module.css'


export default function Header(props) {
  return (<>

    <SimpleGrid columns={3} spacing={0}>
      <Box className={`${styles.leftBox}`}>
        <Image className={`${styles.leftBox}`} boxSize='auto' src={logo} alt='Logo MEDDOC' />
      </Box>
      <Box>
        <Text className={`${styles.centerBox}`}> {props.titulo} </Text>
      </Box>
      <Box className={`${styles.rightBox}`}>
        <SimpleGrid columns={2} spacing={'0.3vw'}>
          <Box className={`${styles.rightBox2}`}>
            <VStack align='right' spacing='0.1vw'>
              <Text className={`${styles.text1}`}> Você está atendendo </Text>
              <Text> Fulano de Tal </Text>
            </VStack>
          </Box>
          <Box className={`${styles.rightIcon}`}>
            <Image boxSize='3vw' src={paciente} alt='Icon Paciete' />
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>


  </>);
}