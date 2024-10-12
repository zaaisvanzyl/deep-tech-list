import { Box, HStack, VStack, Heading, Text, Link, Button, Flex, Badge } from "@chakra-ui/react";
import { Industry } from "../data/industries";
import { FaBriefcase, FaExternalLinkAlt, FaLink, FaMoneyBill, FaUser } from "react-icons/fa";

interface CompanyCardProps {
  name: string;
  hqLocation: string;
  foundedYear: number;
  estFunding: string;
  estHeadcount: string;
  website: string;
  jobsLink: string;
  description: string;
  industry: Industry;
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
  industry,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="transparent"
      color="white"
      borderColor="gray.600"
      transition="all 0.3s"
      _hover={{
        boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1), 0 6px 6px rgba(255, 255, 255, 0.05)",
        borderColor: "white",
      }}
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color="white">
          {name}
        </Heading>
        <Flex wrap="wrap" gap={2}>
          <Badge variant="outline" color="white" borderColor="white">{industry}</Badge>
          <Badge variant="outline" color="white" borderColor="white">{hqLocation}</Badge>
          <Badge variant="outline" color="white" borderColor="white">Founded {foundedYear}</Badge>
          <Badge variant="outline" color="white" borderColor="white">
            <Flex align="center">
              <FaMoneyBill style={{ marginRight: '0.5rem' }} />
              {estFunding}
            </Flex>
          </Badge>
          <Badge variant="outline" color="white" borderColor="white">
            <Flex align="center">
              <FaUser style={{ marginRight: '0.5rem' }} />
              {estHeadcount}
            </Flex>
          </Badge>
        </Flex>
        <Text fontSize="sm">{description}</Text>
        <HStack spacing={4}>
          <Button
            as="a"
            href={jobsLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="gray"
            size="sm"
            leftIcon={<FaBriefcase />}
          >
            View Jobs
          </Button>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            color="gray.400"
            fontSize="sm"
            display="inline-flex"
            alignItems="center"
            _hover={{ color: "white", textDecoration: "underline" }}
          >
            Visit Website
            <FaExternalLinkAlt style={{ marginLeft: '0.5rem' }} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CompanyCard;
