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


import { useNavigate } from 'react-router-dom'
import styles from './HomeDashboardScreen.module.css'

export function HomeDashboardScreen() {
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
            <GridItem pl='2' bg='#000000' area={'menu'}>
                
            </GridItem>


            <GridItem pl='2' bg='#fff444' area={'header'}>
                
            </GridItem>


            <GridItem pl='2' bg='#ff5f2f' area={'content'}>
                <Grid
                templateAreas={`"coluna1 coluna2"`}
                gridTemplateRows={'88vh 0fr 0vh'}
                gridTemplateColumns={'50% 50%'}
                h='0vh'
                gap='0'
                color='blackAlpha.700'
                >
                    <GridItem pl='0' bg='#38B6FF' area={'coluna1'}>
                    </GridItem>

                    <GridItem pl='0' bg='#4FD1C5' area={'coluna2'}>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}