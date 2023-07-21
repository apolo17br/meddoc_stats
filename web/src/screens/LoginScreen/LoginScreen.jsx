import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import styles from './LoginScreen.module.css'

export function LoginScreen() {
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
      <GridItem pl='2' bg='orange.300' area={'header'}>
        LOGO
      </GridItem>
      <GridItem>
        <Container centerContent>
            <h1 style={{marginTop: "5vh", fontSize: "32px", color: "black"}}> Olá! </h1>
            <h2 className={`${styles.subtitle}`}> Escolha uma das opções para prosseguir ao sistema. </h2>
            <Button
              size='md'
              height='65px'
              width='420px'
              fontSize='px'
              bg='#38B6FF'
              color='white'
              marginBottom='3vh'
            >
              ENTRAR
            </Button>

            <Button
              size='md'
              height='65px'
              width='420px'
              fontSize='px'
              bg='#3870FF'
              color='white'
              marginBottom='3vh'
            >
              CADASTRAR
            </Button>

            <Button
              size='md'
              height='65px'
              width='420px'
              fontSize='px'
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