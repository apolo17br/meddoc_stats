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
import { IconButton } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import styles from './UserLoginScreen.module.css'

export function UserLoginScreen() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const navigate = useNavigate()

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
                                <IconButton isRound={true} colorScheme='white' variant='outline'
                                    onClick={() => navigate("/")}>
                                    <Image boxSize='auto' src={voltar} alt='Botão voltar' />
                                </IconButton>
                            </Box>
                            <Box>
                                <Text className={`${styles.registerTitle}`}> Entrar </Text>
                            </Box>
                        </HStack>
                        <Text className={`${styles.registerSubtitle}`}> Informe suas credenciais de acesso para conectar ao sistema. </Text>
                        <div>
                            <Text className={`${styles.inputTitle}`}>Email</Text>
                            <Input focusBorderColor='#38B6FF' placeholder='Informe o email cadastrado' size='lg' />
                        </div>
                        <div>
                            <Text className={`${styles.inputTitle}`}>Senha</Text>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Informe a senha cadastrada'
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
                            <SimpleGrid columns={2} spacing={10}>
                                <Box className={`${styles.rememberMe}`}>
                                    <FormControl display='flex' alignItems='center'>
                                     <HStack spacing='12px'>
                                        <Switch id='remember-me' size='lg' colorScheme='green' />
                                        <FormLabel htmlFor='remember-me' mb='0'>
                                            Lembrar de mim
                                        </FormLabel>
                                        </HStack>
                                    </FormControl>
                                </Box>
                                <Box className={`${styles.forgotPass}`}>
                                    <Link color="#38B6FF" onClick={() => navigate("/recuperar-senha")}>Esqueci minha senha </Link>
                                </Box>
                            </SimpleGrid>
                        </div>


                        <div className={`${styles.buttonBox}`}>
                            <Button
                                size='lg'
                                height='80px'
                                width='100%'
                                bg='#38B6FF'
                                color='white'
                                variant='solid'
                                onClick={() => navigate("/home")}
                            >
                                ENTRAR
                            </Button>
                        </div>
                        <Container centerContent>
                            <VStack
                                spacing={4}
                                align='center'
                            >
                                <Box h='1vh'>
                                    <Text>
                                        Não possui uma conta? {' '}
                                        <Link color="#38B6FF" onClick={() => navigate("/cadastro-paciente")}>
                                            Cadastre-se
                                        </Link>
                                    </Text>
                                </Box>
                                <Box h='1vh'>
                                    <Text>
                                        É médico? {' '}
                                        <Link color="#38B6FF" onClick={() => navigate("/login-medico")}>
                                            Clique aqui
                                        </Link>
                                    </Text>
                                </Box>
                            </VStack>
                        </Container>
                    </VStack>
                </div>
            </GridItem>


            <GridItem pl='2' area={'footer'}>
                <Container centerContent className={`${styles.footer}`}>
                    <VStack
                        spacing={4}
                        align='center'
                    >
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
                        <Text className={`${styles.ilustrationSubtitle}`}> Que bom te ver de novo </Text>
                        <Text className={`${styles.ilustrationTitle}`}> BEM-VINDO(A) DE VOLTA! </Text>
                        <Image boxSize='90%' src={ilustracao} alt='Ilustração médico virtual' />
                    </VStack>
                </div>
            </GridItem>
        </Grid>
    )
}