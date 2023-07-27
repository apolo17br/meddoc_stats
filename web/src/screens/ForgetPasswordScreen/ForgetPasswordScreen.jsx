import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'
import voltar from '../../assets/icons/botao-voltar-preto.png'
import { Input } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import styles from './ForgetPasswordScreen.module.css'

export function ForgetPasswordScreen() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

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
              <Container centerContent>
                <HStack spacing='24px'>
                  <Box>
                    <IconButton isRound={true} colorScheme='white' variant='outline'
                      onClick={() => navigate("/")}>
                      <Image boxSize='auto' src={voltar} alt='Botão voltar' />
                    </IconButton>
                  </Box>
                  <Box>
                    <Text className={`${styles.registerTitle}`}> Esqueceu sua senha? </Text>
                  </Box>
                </HStack>
                <Text className={`${styles.registerSubtitle}`}> Não tem problema! A gente te ajuda a recuperá-la. Basta preencher os campos abaixo. </Text>
              </Container>

              <div>
                <Text className={`${styles.inputTitle}`}> Email </Text>
                <Input focusBorderColor='#38B6FF' placeholder='Informe o email cadastrado' size='lg' />
              </div>

              <div className={`${styles.buttonBox}`}>
                <Button
                  size='lg'
                  height='80px'
                  width='100%'
                  bg='#38B6FF'
                  color='white'
                  variant='solid'
                  onClick={() => navigate("/recuperar-senha-confirmacao")}
                >
                  ENVIAR
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