/* eslint-disable react/prop-types */
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import Home from '../../assets/icons/home.png'
import Prontuario from '../../assets/icons/prontuario.png'
import Atestado from '../../assets/icons/atestado.png'
import Declaracao from '../../assets/icons/declaracao.png'
import Encaminhamento from '../../assets/icons/encaminhamento.png'
import Laudo from '../../assets/icons/laudo.png'
import Prescricao from '../../assets/icons/prescricao.png'
import Complementares from '../../assets/icons/complementares.png'
import Hamburguer from '../../assets/icons/hamburguer.png'
import UserWhite from '../../assets/icons/user-white.png'
import Engrenagem from '../../assets/icons/engrenagem.png'

import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo/logo02.png'
import { useState } from 'react'

const LinkItems = [
  {
    title: 'Visão geral',
    options: [
      { name: 'Home', icon: Home, navigation: '/home' }, 
    ]
  },
  {
    title: "Consulta",
    options: [
      { name: 'Prontuário', icon: Prontuario, navigation: '/prontuario' },
      { name: 'Atestado', icon: Atestado, navigation: '/atestado' },
      { name: 'Declaração', icon: Declaracao, navigation: '/declaracao' },
      { name: 'Encaminhamento', icon: Encaminhamento, navigation: '/encaminhamento' },
      { name: 'Laudo', icon: Laudo, navigation: '/laudo' },
      { name: 'Prescição', icon: Prescricao, navigation: '/prescricao' },
      { name: 'Exames Complementares', icon: Complementares, navigation: '/exames-complementares' },
    ]
  }
]

export function SimpleSidebar() {
  const {onClose} = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>    
      <Drawer
        isOpen={false}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const SidebarContent = ({ isOpen, onToggleMenu, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg={useColorModeValue('azulCanonico.500')}
      borderRight="1px"
      borderRightColor={useColorModeValue('azulCanonico.500')}
      pos="fixed"
      h="full"
      width={isOpen ? 'fit-content' : 'min-content'}
      transition=".5s ease"
      {...rest}
      style={{paddingInline: 20, paddingTop: 15, paddingBottom: 40, overflow: 'scroll'}}
    >
      <Flex alignItems="center" justifyContent={isOpen ? 'space-between' : "center"} style={{gap: 42, paddingLeft: 32}} marginBottom="20px">
        <img src={Hamburguer} alt="Hamburguer" onClick={onToggleMenu} />
        <img src={Logo} height={90} width={isOpen ? 'auto' : 0}
          style={{opacity: isOpen ? 1 : 0, transition: '.5s ease'}} />
      </Flex>

      {LinkItems.map((section) => {
        return (
          <>
            <Text textTransform="uppercase" key={section.title} color="white" fontSize="22px" lineHeight="46px" textAlign={isOpen ? 'start' : 'center'} whiteSpace='nowrap'>{section.title}</Text>

            {section.options.map(option => (
              <NavItem
                key={option.name} 
                icon={option.icon} 
                onClick={() => navigate(option.navigation)}
                style={{
                  paddingLeft: isOpen ? 29 : 0,
                  height: 88,
                  justifyContent: isOpen ? 'start' : 'center'
                }}
              >
                <img src={option.icon} height={50} width={50} />

                <Text as="b" fontSize="30px" textTransform="uppercase" color="white" style={{
                  opacity: isOpen ? 1 : 0,
                  width: isOpen ? 'auto' : 0,
                  marginLeft: isOpen ? '16px' : 0,
                }}>
                  {option.name}
                </Text>
              </NavItem>
            ))}
          </>
        )
      })}
        
      <Flex flexDirection='column' borderTopWidth={1} borderTopColor="white" pt={4}>
        <Text textTransform="uppercase" color="white" fontSize="22px" textAlign={isOpen ? 'start' : 'center'}>Perfil</Text>

        <Flex flexDirection='column' gap="26" style={{marginTop: 16, marginBottom: 26}}>
          <Flex alignItems='center' justifyContent={isOpen ? 'start' : 'center'} style={{
            transition: '.5s ease'
          }}>
              <img src={UserWhite} alt="Perfil"/>
            
              <Flex flexDirection='column' style={{
                opacity: isOpen ? 1 : 0,
                width: isOpen ? 'auto' : 0,
                height: isOpen ? 'auto' : 0,
                marginLeft: isOpen ? '16px' : 0,
              }}>
                <Text as="b" color="white" fontSize="24px">Guilherme Hausen</Text>
                <Text as="p" color="white"  fontSize="24px">hausen@meddoc.com.br</Text>
              </Flex>
          </Flex>
          
          <Flex height='72px' style={{background: '#8AD4FF', paddingInline: 15, paddingBlock: 13, borderRadius: 16}} alignItems='center' justifyContent={isOpen ? 'start' : 'center'}>
            <img src={Engrenagem} alt="Engranagem"/>
            <Text color="white" as="b" fontSize="32px" style={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? 'auto' : 0,
              marginLeft: isOpen ? '16px' : 0,
          }}>CONFIGURAÇÕES</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}


const NavItem = ({children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        role="group"
        cursor="pointer"
        {...rest}>
        {children}
      </Flex>
    </Box>
  )
}

const Header = ({ isOpen, ...rest }) => {
  return (
    <Flex
      style={{marginLeft: isOpen ? 60 : 0}}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        variant="outline"
        aria-label="open menu"
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.5s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.5.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Configurações</MenuItem>
              <MenuDivider />
              <MenuItem>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = (
) => {
  const [isOpen, setIsOpen] = useState(true)

  function handleToggle() {
    return setIsOpen(prevState => !prevState)
  }

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent isOpen={isOpen} onToggleMenu={handleToggle} />
      <Header isOpen={isOpen} />
    </Box>
  )
}

export default SidebarWithHeader

