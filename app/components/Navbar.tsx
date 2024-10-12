import { Box, Flex, Spacer, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (breakpoint !== undefined) {
      setIsMobile(breakpoint);
    }
  }, [breakpoint]);

  if (breakpoint === undefined) {
    return null; // or a loading state
  }

  return (
    <Box as="nav" bg="black" py={4}>
      <Flex 
        maxW="container.xl" 
        mx="auto" 
        alignItems="center" 
        px={4} 
        flexDirection={isMobile ? "column" : "row"}
        gap={isMobile ? 4 : 0}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="white"
          cursor="pointer"
          transition="all 0.3s"
          onClick={() => router.push('/')}
        >
          Deep Tech List
        </Text>
        {!isMobile && <Spacer />}
        <Flex 
          gap={4} 
          alignItems="center" 
          flexDirection={isMobile ? "column" : "row"}
          width={isMobile ? "100%" : "auto"}
        >
          <Text 
            color="gray.400" 
            fontSize="sm" 
            textAlign={isMobile ? "center" : "left"}
          >
            Updated: October 12, 2024
          </Text>
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
            onClick={() => window.open('https://forms.gle/cqxuaKWFHrLWEoMF7', '_blank')}
            width={isMobile ? "100%" : "auto"}
          >
            Submit Company
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
