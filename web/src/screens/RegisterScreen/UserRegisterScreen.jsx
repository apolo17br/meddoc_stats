import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import voltar from '../../assets/icons/botao-voltar-preto.png'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from './UserRegisterScreen.module.css'

export function UserRegisterScreen() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

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
                <VStack
                    spacing={4}
                    align='left'
                >
                    <SimpleGrid bg='red' columns={2} spacingX='2%' spacingY='5%'>
                        <Image boxSize='auto' src={voltar} alt='Botão voltar' />
                        <Text> Cadastre-se </Text>
                    </SimpleGrid>
                    <Text> Preencha os campos abaixo para cadastrar-se no sistema. </Text>
                    <div>
                        <Text>Nome</Text>
                        <Input focusBorderColor='#38B6FF' placeholder='Seu nome completo' />
                    </div>
                    <div>
                        <Text>CPF</Text>
                        <Input focusBorderColor='#38B6FF' placeholder='Seu CPF sem pontuações' />
                    </div>
                    <div>
                        <Text>CEP</Text>
                        <Input focusBorderColor='#38B6FF' placeholder='Seu CEP sem pontuações' />
                    </div>
                    <div>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Informe sua senha'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Mostrar' : 'Esconder'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
                </VStack>
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


            <GridItem pl='2' bg='pink.300' area={'ilustration'}>
                Ilustration
            </GridItem>
        </Grid>
    )
}