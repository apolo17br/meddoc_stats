import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import voltar from '../../assets/icons/botao-voltar-preto.png'
import ilustracao from '../../assets/ilustrations/login-registration.png'
import { HStack, VStack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import { Navigate } from 'react-router-dom';
import styles from './UserRegisterScreen.module.css'

export function UserRegisterScreen() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    return (
        <Grid
            templateAreas={`"header ilustration"
                  "main ilustration"
                  "footer ilustration"`}
            gridTemplateRows={'12vh 1fr 10vh'}
            gridTemplateColumns={'40% 60%'}
            h='100vh'
            gap='0'
            color='blackAlpha.700'
        >
            <GridItem pl='2' area={'header'}>
                <div className={`${styles.logo}`}>
                    <Image boxSize='auto' src={logo} alt='Logo MEDDOC' />
                </div>
            </GridItem>


            <GridItem pl='2' area={'main'}>
                <div className={`${styles.mainContent}`}>
                    <VStack
                        spacing={4}
                        align='left'
                    >
                        <HStack spacing='24px'>
                            <Box>
                                <Navigate to='/' replace={true}>
                                    <Image  boxSize='auto' src={voltar} alt='Botão voltar' />
                                </Navigate>
                            </Box>
                            <Box>
                                <Text className={`${styles.registerTitle}`}> Cadastre-se </Text>
                            </Box>
                        </HStack>
                        <Text className={`${styles.registerSubtitle}`}> Preencha os campos abaixo para cadastrar-se no sistema. </Text>
                        <div>
                            <Text className={`${styles.inputTitle}`}>Nome</Text>
                            <Input focusBorderColor='#38B6FF' placeholder='Seu nome completo' size='lg' />
                        </div>
                        <div>
                            <Text className={`${styles.inputTitle}`}>CPF</Text>
                            <Input focusBorderColor='#38B6FF' placeholder='Seu CPF sem pontuações' size='lg' />
                        </div>
                        <div>
                            <Text className={`${styles.inputTitle}`}>CEP</Text>
                            <Input focusBorderColor='#38B6FF' placeholder='Seu CEP sem pontuações' size='lg' />
                        </div>
                        <div>
                            <Text className={`${styles.inputTitle}`}>Senha</Text>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Informe sua senha'
                                    size='lg'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' size='sm' onClick={handleClick}>
                                        {show ? 'Esconder' : 'Mostrar'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>
                        <div>
                            <Text className={`${styles.inputTitle}`}>Confirme sua senha</Text>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show2 ? 'text' : 'password'}
                                    placeholder='Repita sua senha'
                                    size='lg'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' size='sm' onClick={handleClick2}>
                                        {show2 ? 'Esconder' : 'Mostrar'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>

                        <div className={`${styles.buttonBox}`}>
                            <Button
                                size='lg'
                                height='80px'
                                width='100%'
                                bg='#4FD1C5'
                                color='white'
                                variant='solid'
                            >
                                CADASTRAR
                            </Button>
                        </div>
                    </VStack>
                </div>
            </GridItem>


            <GridItem pl='2' area={'footer'}>
                <Container centerContent>
                    <VStack
                        spacing={4}
                        align='center'
                    >
                        <Box h='1vh'>
                            <Text>
                                Já possui uma conta? {' '}
                                <Link color="#38B6FF" href='#'>
                                    Conecte-se
                                </Link>
                            </Text>
                        </Box>
                        <Box h='1vh'>
                            <Text>
                                É médico? {' '}
                                <Link color="#38B6FF" href='#'>
                                    Clique aqui
                                </Link>
                            </Text>
                        </Box>
                        <Box h='1vh'>
                            <Text>
                                Todos os direitos reservados
                            </Text>
                        </Box>
                    </VStack>
                </Container>
            </GridItem>


            <GridItem pl='2' bgGradient='linear(to-b, #38B6FF, #ffffff)' area={'ilustration'}>
                <div className={`${styles.ilustrationMargin}`}>
                    <VStack
                        spacing={4}
                        align='center'
                    >
                        <Text className={`${styles.ilustrationSubtitle}`}> Primeira vez por aqui? </Text>
                        <Text className={`${styles.ilustrationTitle}`}> BEM-VINDO(A)! </Text>
                        <Image boxSize='90%' src={ilustracao} alt='Ilustração médico virtual' />
                    </VStack>
                </div>
            </GridItem>
        </Grid>
    )
}