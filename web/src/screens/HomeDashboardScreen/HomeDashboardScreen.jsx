import React from 'react';
import { Grid, GridItem, ScaleFade } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import calendar from '../../assets/icons/calendar-icon.png'
import clock from '../../assets/icons/clock-icon.png'
import user from '../../assets/icons/user-icon.png'
import { ModalContent, ModalHeader, ModalCloseButton, LinkOverlay, ModalBody, ModalFooter } from '@chakra-ui/react'
import * as V from 'victory';
import { VictoryPie } from 'victory';


import styles from './HomeDashboardScreen.module.css'

export function HomeDashboardScreen() {
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
                                <option value='cam1'>Câmera 1</option>
                                <option value='cam2'>Câmera 2</option>
                                <option value='cam3'>Câmera 3</option>
                            </Select>
                            <Select placeholder='Selecione seu microfone'>
                                <option value='mic1'>Microfone 1</option>
                                <option value='mic2'>Microfone 2</option>
                                <option value='mic3'>Microfone 3</option>
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
                    gridTemplateColumns={'50% 50%'}
                    h='0vh'
                    gap='0'
                    color='blackAlpha.700'
                >
                    <VStack
                        spacing={4}
                        align='left'
                    >
                        <Box>
                            <GridItem className={`${styles.boxes}`} pl='0' area={'coluna1'}>
                                <SimpleGrid columns={3} spacing={5} templateColumns='repeat(auto-fill, minmax(30%, auto))'>
                                    <Card>
                                        <CardHeader>
                                            <Text size='md' className={`${styles.dataTitle}`}> Retornos pendentes</Text>
                                        </CardHeader>
                                        <CardBody>
                                            <Text className={`${styles.dataNumber}`}> 3 </Text>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <Text size='md' className={`${styles.dataTitle}`}> Atendimentos realizados </Text>
                                        </CardHeader>
                                        <CardBody>
                                            <Text className={`${styles.dataNumber}`}> 251 </Text>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <Text size='md' className={`${styles.dataTitle}`}> Valor disponível para retirada </Text>
                                        </CardHeader>
                                        <CardBody>
                                            <Text className={`${styles.dataNumber}`}> R$ 2.456,10 </Text>
                                        </CardBody>
                                    </Card>
                                </SimpleGrid>
                            </GridItem>
                        </Box>
                        <Box h='40px' bg='#ffffff'>
                            <Card className={`${styles.usersList}`}>
                                <CardHeader>
                                    <Text className={`${styles.dataTitleList}`} size='md'> Próximas consultas</Text>
                                </CardHeader>
                                <CardBody>
                                    <Stack spacing='4'>
                                        {data.map((data, id) => (
                                            <Card size='sm' key={id} variant="filled">
                                                <LinkOverlay onClick={onOpen} href="#">
                                                    <CardHeader>
                                                        <Text className={`${styles.dataTextList}`} size='md'> {data.name} {id} </Text>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <VStack align='left' >
                                                            <HStack spacing='1%'>
                                                                <Box>
                                                                    <Image boxSize='auto' src={calendar} alt='Calendário' />
                                                                </Box>
                                                                <Box>
                                                                    <Text className={`${styles.registerTitle}`}> {data.data} </Text>
                                                                </Box>
                                                            </HStack>
                                                            <HStack spacing='1%'>
                                                                <Box>
                                                                    <Image boxSize='auto' src={clock} alt='Horário' />
                                                                </Box>
                                                                <Box>
                                                                    <Text className={`${styles.registerTitle}`}> {data.hour} </Text>
                                                                </Box>
                                                            </HStack>
                                                        </VStack>
                                                    </CardBody>
                                                </LinkOverlay>
                                            </Card>
                                        ))}
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                    </VStack>

                    <GridItem pl='0' area={'coluna2'}>
                        <VStack
                            spacing={4}
                            align='left'>
                            <Card className={`${styles.boxDireita}`} align='center'>
                                <CardHeader>
                                    <Text className={`${styles.dataTextList}`} > Calendário </Text>
                                </CardHeader>
                                <CardBody>
                                    <Text className={`${styles.textoCalendario}`}> Em construção. Por enquanto, verifique os agendamentos dos seus pacientes clicando no botão abaixo. </Text>
                                    <Button className={`${styles.botaoCalendario}`} fontSize='1vw' colorScheme='blue'> Minhas consultas </Button>
                                </CardBody>
                            </Card>
                            <Box className={`${styles.chartBox}`}>
                                <svg className={`${styles.chartBox}`} width={'100%'} height={'100%'}>
                                    <VictoryPie
                                        standalone={false}
                                        innerRadius={100}
                                        colorScale={["#6DE0FF", "#2C43F4"]}
                                        tickFormat={() => ""}
                                        animate={{
                                            duration: 2000
                                        }}
                                        categories={{ x: ["dogs", "cats"] }}
                                        data={[
                                            { x: "62", y: 62 },
                                            { x: "189", y: 189 },
                                        ]}

                                    />
                                </svg>
                            </Box>
                        </VStack>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}