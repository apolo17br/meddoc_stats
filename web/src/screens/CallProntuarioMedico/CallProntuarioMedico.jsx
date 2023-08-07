import React from 'react';
import { Grid, GridItem, ScaleFade } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import calendar from '../../assets/icons/calendar-icon.png'
import clock from '../../assets/icons/clock-icon.png'
import user from '../../assets/icons/user-icon.png'
import alert from '../../assets/icons/alert-icon.png'
import add from '../../assets/icons/add-icon.png'
import { ModalContent, ModalHeader, ModalCloseButton, LinkOverlay, ModalBody, ModalFooter } from '@chakra-ui/react'


import styles from './CallProntuarioMedico.module.css'
import { right } from '@popperjs/core';

export function CallProntuarioMedico() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const data = [
        {
            name: 'Fulano de Tal',
            data: '10 de abril, terça-feira',
            hour: '15h30'
        },
        {
            name: 'Fulano de Tal',
            data: '14 de abril, sexta-feira',
            hour: '9h'
        },
        {
            name: 'Fulano de Tal',
            data: '18 de abril, terça-feira',
            hour: '15h30'
        },
    ]

    return (
        <Grid
            templateAreas={`"menu header"
                            "menu content"`}
            gridTemplateRows={'12vh 1fr 0vh'}
            gridTemplateColumns={'5% 95%'}
            h='100vh'
            gap='0'
            color='blackAlpha.700'
        >
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size='xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Consulta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack
                            spacing={4}
                            align='center'>

                            <Box>
                                <Image boxSize='auto' src={user} alt='Foto usuário' />
                            </Box>
                            <Text className={`${styles.modalTitle}`}> Paciente Fulano de Tal </Text>
                            <HStack className={`${styles.modalClockAndText}`} spacing='1%'>
                                <Box>
                                    <Image boxSize='auto' src={clock} alt='Horário' />
                                </Box>
                                <Box>
                                    <Text> Agora (faltam 0 min) </Text>
                                </Box>
                            </HStack>
                            <Text className={`${styles.modalCenterText}`}>
                                Antes de iniciar o seu atendimento, certifique-se
                                de que sua câmera e seu microfone estejam devidamente
                                conectados ao seu dispositivo.
                            </Text>
                            <Divider />
                            <Select placeholder='Selecione sua câmera'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Select placeholder='Selecione seu microfone'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            Iniciar consulta
                        </Button>
                        <Button onClick={onClose}> Cancelar </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <GridItem pl='2' bg='#000000' area={'menu'}>

            </GridItem>


            <GridItem pl='2' bg='#fff444' area={'header'}>
                {/*<HeaderComponent titulo="HOME"/>*/}
            </GridItem>


            <GridItem pl='0' area={'content'}>
                <Grid
                    templateAreas={`"coluna1 coluna2"`}
                    gridTemplateRows={'88vh 0fr 0vh'}
                    gridTemplateColumns={'60% 40%'}
                    h='0vh'
                    gap='0'
                    color='blackAlpha.700'
                >
                    <VStack
                        spacing={0}
                        align='left'
                    >
                        <Box className={`${styles.boxAdjust}`}>
                            <Card className={`${styles.cardSize}`} size='sm' variant="filled">
                                <CardHeader className={`${styles.cardHeader}`}>
                                    <Text isRequired='true' className={`${styles.dataTextList}`} size='md'> Anamnese </Text>
                                </CardHeader>
                                <CardBody>
                                    <Textarea resize='none' fontSize='24px' variant='unstyled' placeholder='Descrição das queixas, sinais e sintomas do paciente.' />
                                </CardBody>
                            </Card>
                        </Box>
                        <Box className={`${styles.boxAdjust}`}>
                            <Card className={`${styles.cardSize}`} size='sm' variant="filled">
                                <CardHeader className={`${styles.cardHeader}`}>
                                    <Text className={`${styles.dataTextList}`} size='md'> Avaliação Clínica </Text>
                                </CardHeader>
                                <CardBody>
                                    <Textarea resize='none' fontSize='24px' variant='unstyled' placeholder='Direcionamento do raciocínio clínico do médico com base nos elementos disponíveis para análise.' />
                                </CardBody>
                            </Card>
                        </Box>
                        <Box className={`${styles.boxAdjust}`}>
                            <Card className={`${styles.cardSize}`} size='sm' variant="filled">
                                <CardHeader className={`${styles.cardHeader}`}>
                                    <Text className={`${styles.dataTextList}`} size='md'> Hipótese Diagnóstica </Text>
                                </CardHeader>
                                <CardBody>
                                    <Textarea resize='none' fontSize='24px' variant='unstyled' placeholder='Diagnóstico diferencial.' />
                                </CardBody>
                            </Card>
                        </Box>
                        <Box className={`${styles.cidBox}`}>
                            <Card className={`${styles.cardCidSize}`} size='sm' variant="filled">
                                <CardHeader className={`${styles.cardHeader}`}>
                                    <HStack>
                                        <Text className={`${styles.dataTextList}`} size='md'> CID 10 </Text>
                                        <IconButton className={`${styles.cidIcon}`} size='sm' isRound={true} bg="#38B6FF" variant='solid'>
                                            <Image boxSize='15px' src={add} alt='Botão de adicionar CID' />
                                        </IconButton>
                                    </HStack>
                                </CardHeader>
                            </Card>
                        </Box>
                        <Box className={`${styles.boxAdjust}`}>
                            <Card className={`${styles.cardSize}`} size='sm' variant="filled">
                                <CardHeader className={`${styles.cardHeader}`}>
                                    <Text className={`${styles.dataTextList}`} size='md'> Conduta </Text>
                                </CardHeader>
                                <CardBody>
                                    <Textarea resize='none' fontSize='24px' variant='unstyled' placeholder='Descrição da prescrição (solicitação de exames, prescrição de medicamentos e procedimentos, encaminhamentos, atestados, etc).' />
                                </CardBody>
                            </Card>
                        </Box>
                    </VStack>

                    <GridItem pl='0' area={'coluna2'}>
                        <VStack
                            spacing={4}
                            align='left'>
                            assssssss
                        </VStack>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}