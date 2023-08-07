import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import voltar from '../../assets/icons/botao-voltar-preto.png'
import { HStack, VStack } from '@chakra-ui/react'
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
import styles from './CreateNewPasswordScreenConfirmation.module.css'

export function CreateNewPasswordScreenConfirmation() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    const navigate = useNavigate()

    return (
        <Grid
            templateAreas={`"header"
                  "main"
                  "footer"`}
            gridTemplateRows={'12vh 1fr 10vh'}
            gridTemplateColumns={'100% 0%'}
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
                <Container centerContent>
                <div className={`${styles.mainContent}`}>
                    <VStack
                        spacing={4}
                        align='left'
                    >
                        <HStack spacing='10%'>
                            <Box>
                                <IconButton isRound={true} colorScheme='white' variant='outline'
                                    onClick={() => navigate("/recuperar-senha")}>
                                    <Image boxSize='auto' src={voltar} alt='Botão voltar' />
                                </IconButton>
                            </Box>
                            <Box>
                                <Text className={`${styles.registerTitle}`}> Criar nova senha </Text>
                            </Box>
                        </HStack>
                        <Text className={`${styles.registerSubtitle}`}> Sua senha foi redefinda. Agora você pode acessar o sistema. </Text>


                        <div className={`${styles.buttonBox}`}>
                            <Button
                                size='lg'
                                height='80px'
                                width='100%'
                                bg='#38B6FF'
                                color='white'
                                variant='solid'
                                onClick={() => navigate("/")}
                            >
                                ENTRAR
                            </Button>
                        </div>
                    </VStack>
                </div>
                </Container>
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
        </Grid>
    )
}