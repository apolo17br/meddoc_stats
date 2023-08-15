import React from 'react';
import '../../styles/global.css';
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Stack, IconButton, Heading,  VStack, SimpleGrid, Input, Button, Square, Center, Box } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import notificacoes from '../../assets/icons/notifications-icon.png'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import styles from './HeaderDashboard.module.css'


export default function HeaderDashboard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (<>
    <div className={`${styles.back}`}>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="sm"
        finalFocusRef={btnRef}
        className={`${styles.back}`}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Notificações </DrawerHeader>

          <DrawerBody>
            <Card>
              <CardBody>
                <Text> Confira as novidades do Meddoc!</Text>
              </CardBody>
              <CardFooter>
                <Button> Saiba mais </Button>
              </CardFooter>
            </Card>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <SimpleGrid columns={3} spacing={0}>
        <Box className={`${styles.leftBox}`}>
          <Image className={`${styles.leftBox}`} boxSize='auto' src={logo} alt='Logo MEDDOC' />
        </Box>
        <Box>
          <VStack align='center' spacing='0.1vw'>
            <Text className={`${styles.centerBox}`}> Olá, Dr(a). {props.nome}! </Text>
            <Text className={`${styles.centerBox2}`}> Atualmente existem {props.quantidade} pacientes esperando por você. </Text>
          </VStack>
        </Box>
        <Box className={`${styles.rightBox}`}>
          <Box className={`${styles.rightIcon}`}>
            <IconButton className={`${styles.notifyIcon}`} onClick={onOpen} isRound={true} colorScheme='white' variant='ghost'>
              <Image className={`${styles.notifyIcon}`} width='4vw' height='auto' src={notificacoes} alt='Botão Notificações' />
            </IconButton>
          </Box>
        </Box>
      </SimpleGrid>
    </div>

  </>);
}