import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <Box as="nav" bg="gray.800" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center" px={4}>
        <Link fontSize="xl" fontWeight="bold" color="white">
          Deep Tech List
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Button colorScheme="teal" size="sm">
            Submit Company
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
