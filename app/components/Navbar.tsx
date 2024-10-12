import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box as="nav" bg="black" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center" px={4}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="white"
          _hover={{ color: "gray.300" }}
          cursor="pointer"
          transition="color 0.2s"
          onClick={() => router.push('/')}
        >
          Deep Tech List
        </Text>
        <Spacer />
        <Flex gap={4}>
          <Button
            bg="transparent"
            color="white"
            borderColor="white"
            borderWidth="1px"
            _hover={{
              bg: "whiteAlpha.200",
              borderColor: "gray.300",
              color: "gray.300",
            }}
            _active={{
              bg: "whiteAlpha.300",
              transform: "translateY(0)"
            }}
            transition="all 0.2s"
            size="sm"
          >
            Submit Company
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
