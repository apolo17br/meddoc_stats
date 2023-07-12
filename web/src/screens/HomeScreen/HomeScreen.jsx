import { Button, Box, Flex,Heading  } from '@chakra-ui/react'

export function HomeScreen() {
  return (
    <Flex>
      <Box p="4">
        <Heading>Home Screen</Heading>

        <Button colorScheme='blue'>Button</Button>
      </Box>
    </Flex>
  );
}