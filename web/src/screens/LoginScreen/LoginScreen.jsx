import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo02.png'

import { useNavigate } from 'react-router-dom'

import styles from './LoginScreen.module.css'

export function LoginScreen() {
  const navigate = useNavigate()

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'10% 1fr 30px'}
      gridTemplateColumns={'100vw 1fr'}
      h='100vh'
      gap='0'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' area={'header'}>
        <div className={`${styles.logo}`}>
          <Image boxSize='20%' src={logo} alt='Logo MEDDOC' />
        </div>
      </GridItem>
      <GridItem>
        <Container centerContent>
          <h1 className={`${styles.title}`}> Olá! </h1>
          <h2 centerContent className={`${styles.subTitle}`}> Escolha uma das opções para prosseguir ao sistema. </h2>
          <Button
            size='md'
            height='80px'
            width='420px'
            fontSize='24px'
            bg='#38B6FF'
            color='white'
            marginBottom='3vh'
          >
            ENTRAR
          </Button>

          <Button
            size='md'
            height='80px'
            width='420px'
            fontSize='24px'
            bg='#3870FF'
            color='white'
            marginBottom='3vh'
            onClick={() => navigate('cadastro-usuario')}
          >
            CADASTRAR
          </Button>

          <Button
            size='md'
            height='80px'
            width='420px'
            fontSize='24px'
            bg='#043CCA'
            color='white'
          >
            SOU MÉDICO
          </Button>
        </Container>
      </GridItem>
    </Grid>
  )
}