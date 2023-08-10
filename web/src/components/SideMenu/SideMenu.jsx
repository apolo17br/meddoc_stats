/* eslint-disable react/prop-types */
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo/logo02.png'

const LinkItems = [
  {
    title: 'Visão geral',
    options: [
      { name: 'Home', icon: FiHome, navigation: '/home' }, 
    ]
  },
  {
    title: "Consulta",
    options: [
      { name: 'Prontuário', icon: FiTrendingUp, navigation: '/prontuario' },
      { name: 'Atestado', icon: FiCompass, navigation: '/atestado' },
      { name: 'Declaração', icon: FiStar, navigation: '/declaracao' },
      { name: 'Encaminhamento', icon: FiSettings, navigation: '/encaminhamento' },
      { name: 'Laudo', icon: FiSettings, navigation: '/laudo' },
      { name: 'Prescição', icon: FiSettings, navigation: '/prescricao' },
      { name: 'Exames Complementares', icon: FiSettings, navigation: '/exames-complementares' },
    ]
  }
]

export default function SimpleSidebar() {
  const {onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>    
      <Drawer
        isOpen={true}
        placement="left"
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

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg={useColorModeValue('azulCanonico.300')}
      borderRight="1px"
      borderRightColor={useColorModeValue('azulCanonico.300')}
      pos="fixed"
      h="full"
      {...rest}
      style={{paddingInline: 20, paddingTop: 15, paddingBottom: 40, overflow: 'scroll'}}
    >
      <Flex alignItems="center" justifyContent="space-between" style={{marginBottom: 24}}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <img src={Logo} height={90} />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map((section) => {
        return (
          <>
            <Text textTransform="uppercase" color="white">{section.title}</Text>
            {section.options.map(option => (
              <NavItem key={option.name} icon={option.icon} onClick={() => navigate(option.navigation)} style={{paddingLeft: 29, height: 68}}>
                <Text as="b" fontSize="lg" textTransform="uppercase" color="white"> {option.name}
                </Text>
              </NavItem>
            ))}
          </>
        )
      })}
        
      <Flex flexDirection='column' borderTopWidth={1} borderTopColor="white" pt={4}>
        <Text textTransform="uppercase" color="white">Perfil</Text>

        <Flex gap="16" alignItems='center' style={{marginTop: 16, marginBottom: 26}}>
          X
          <Flex flexDirection='column'>
            <Text as="b" color="white">Guilherme Hausen</Text>
            <Text as="p" color="white">hausen@meddoc.com.br</Text>
          </Flex>
        </Flex>

        <Flex style={{background: '#8AD4FF', paddingInline: 15, paddingBlock: 13, borderRadius: 16, gap: 16}} alignItems='center'>
          X
          <Text color="white" as="b">CONFIGURAÇÕES</Text>
        </Flex>
      </Flex>
    </Box>
  )
}


const NavItem = ({ icon, children, ...rest }) => {
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
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}
