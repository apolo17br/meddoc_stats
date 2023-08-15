import React from 'react';
import '../../styles/global.css';
import { useToast } from '@chakra-ui/react'
import { HStack, Button, Box, Toast, Center } from '@chakra-ui/react'
import styles from './CallButtonsStack.module.css'


export default function CallButtonsStack(props) {
  const toast = useToast()

  return (<>
    <Box className={`${styles.buttonsBox}`}>
      <Center>
        <HStack spacing={8}>
          <Button className={`${styles.buttonStyle}`} size='lg' bg='#A0AEC0' color='#FFFFFF'> Cancelar </Button>
          <Button className={`${styles.buttonStyle}`} size='lg' bg='#38B6FF' color='#FFFFFF' onClick={() =>
            toast({
              position: 'top-center',
              title: 'Salvo',
              description: "Você salvou o progresso de preenchimento dos dados do paciente.",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
          }> Salvar </Button>
          <Button className={`${styles.buttonStyle}`} size='lg' bg='#4FD1C5' color='#FFFFFF'> Próximo </Button>
        </HStack>
      </Center>
    </Box>

  </>);
}