import { Box, HStack, VStack, Heading, Text, Link, Button, Flex, Badge } from "@chakra-ui/react";

interface CompanyCardProps {
  name: string;
  hqLocation: string;
  foundedYear: number;
  estFunding: string;
  estHeadcount: string;
  website: string;
  jobsLink: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  hqLocation,
  foundedYear,
  estFunding,
  estHeadcount,
  website,
  jobsLink,
  description,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="gray.800"
      color="white"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color="teal.300">
          {name}
        </Heading>
        <Flex wrap="wrap" gap={2}>
          <Badge colorScheme="blue">{hqLocation}</Badge>
          <Badge colorScheme="green">Founded {foundedYear}</Badge>
        </Flex>
        <Text fontSize="sm">{description}</Text>
        <HStack spacing={4} fontSize="sm">
          <Text><strong>Funding:</strong> {estFunding}</Text>
          <Text><strong>Headcount:</strong> {estHeadcount}</Text>
        </HStack>
        <HStack spacing={4}>
          <Link href={website} isExternal color="teal.200" fontWeight="semibold" fontSize="sm">
            Visit Website
          </Link>
          <Button
            as="a"
            href={jobsLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            size="xs"
          >
            View Jobs
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CompanyCard;
