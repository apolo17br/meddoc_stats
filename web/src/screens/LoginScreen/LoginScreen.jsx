import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

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
      <GridItem bg='green.300'>
        <Container centerContent>
          <Button
            size='md'
            height='48px'
            width='420px'
            fontSize='px'
            bg='#f5f6f7'
            color='#000000'
          >
            ENTRAR
          </Button>

          <Grid
            h='10%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={0} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip'> </GridItem>
          </Grid>
        </Container>
      </GridItem>
    </Grid>
  )
}