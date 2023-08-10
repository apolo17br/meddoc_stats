import { Flex, Box } from "@chakra-ui/react";
import SideMenu from "../SideMenu/SideMenu";

// eslint-disable-next-line react/prop-types
export function AuthenticatedLayout({children}) {
  return (
    <Flex>
      <SideMenu />
       <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Flex>
  );
}