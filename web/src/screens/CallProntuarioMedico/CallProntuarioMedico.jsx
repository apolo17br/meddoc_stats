import React from 'react';
import { Grid, GridItem, ScaleFade, SimpleGrid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import search from '../../assets/icons/search-icon.png'
import exit from '../../assets/icons/exit-icon.png'
import cam from '../../assets/icons/cam-icon.png'
import expand from '../../assets/icons/expand-video-icon.png'
import add from '../../assets/icons/add-icon.png'
import { useToast } from '@chakra-ui/react'
import { ModalContent, ModalHeader, ModalCloseButton, LinkOverlay, ModalBody, ModalFooter } from '@chakra-ui/react'
import { AuthenticatedLayout } from "../../components/Layout/AuthenticatedLayout";
/*import { HeaderComponent } from "../../components/HeaderComponent/Header.jsx";*/


import styles from './CallProntuarioMedico.module.css'

export function CallProntuarioMedico() {
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()

    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()

    const toast = useToast()

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
                onClose={onClose1}
                isOpen={isOpen1}
                motionPreset='slideInBottom'
                size='xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <HStack>
                        <ModalHeader>CID-10</ModalHeader>
                        <InputGroup>

                            <Input size='lg' className={`${styles.modalSearchBar}`} placeholder='Digite aqui o nome da CID-10' />
                            <InputRightElement className={`${styles.modalSearchBar}`}>
                                <IconButton className={`${styles.modalSearchBarIcon}`} colorScheme='white'>
                                    <Image boxSize='18px' src={search} alt='Botão pesquisar' />
                                </IconButton>
                            </InputRightElement>

                        </InputGroup>
                        <Box className={`${styles.modalExitBox}`}>
                            <IconButton colorScheme='white' onClick={onClose1} >
                                <Image boxSize='24px' src={exit} alt='Botão fechar' />
                            </IconButton>
                        </Box>

                    </HStack>

                    <ModalBody>
                        <VStack
                            spacing={4}
                            align='left'>
                            <SimpleGrid align='center' spacing={4} templateColumns='repeat(auto-fill, minmax(100px, 3fr))'>
                                <Box>
                                    <Text className={`${styles.selecionadoText}`}> Selecionado: </Text>
                                </Box>
                                <Box>
                                    <Card className={`${styles.cidCards}`} size='sm'>
                                        <CardBody>
                                            <Text>CID-10: 23</Text>
                                        </CardBody>
                                    </Card>
                                </Box>
                                <Box>
                                    <Card className={`${styles.cidCards}`} size='sm'>
                                        <CardBody>
                                            <Text>CID-10: 91</Text>
                                        </CardBody>
                                    </Card>
                                </Box>
                            </SimpleGrid>
                            <Text className={`${styles.modalLeftText}`}>
                                "[CID-10 LIST]"
                            </Text>
                            <Divider />

                        </VStack>
                    </ModalBody>
                    <ModalFooter isCentered>
                        <Button colorScheme='green' mr={3}>
                            SELECIONAR
                        </Button>
                        <Button onClick={onClose1}> CANCELAR </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <GridItem pl='2' bg='#000000' area={'menu'}>
                {/*<AuthenticatedLayout />*/}
            </GridItem>


            <GridItem pl='2' bg='#fff444' area={'header'}>
                {/*<HeaderComponent titulo="HOME"/>*/}
            </GridItem>


            <GridItem className={`${styles.contentBigBox}`} pl='0' area={'content'}>
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
                                        <IconButton onClick={onOpen1} className={`${styles.cidIcon}`} size='sm' isRound={true} bg="#38B6FF" variant='solid'>
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


                    <Modal
                        isCentered
                        onClose={onClose2}
                        isOpen={isOpen2}
                        motionPreset='slideInBottom'
                        size='full'
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader> Vídeo </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Center>
                                    <Image className={`${styles.camCardSize}`} boxSize='auto' src={cam} alt='Camera' />
                                </Center>
                            </ModalBody>
                            <ModalFooter>
                                <Button size="lg" onClick={onClose2}>Fechar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>


                    <GridItem pl='0' area={'coluna2'}>
                        <VStack
                            spacing={0}
                            align='left'>

                            <Box className={`${styles.camBoxAdjust}`}>
                                <Card size='sm' variant="outline">
                                    <CardBody >
                                        <Center>
                                            <Image className={`${styles.camCardSize}`} boxSize='auto' src={cam} alt='Camera' />
                                        </Center>
                                    </CardBody>
                                    <IconButton onClick={onOpen2} className={`${styles.expandIcon}`} colorScheme='white' variant='solid'>
                                        <Image boxSize='32px' src={expand} alt='Expandir' />
                                    </IconButton>
                                </Card>
                            </Box>

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
                        </VStack>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}