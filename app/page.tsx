"use client";

import { Box, VStack, Container, Text, Link, Flex, Icon } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CompanyCard from "./components/CompanyCard";
import { companyData } from "./data/companyData";
import Filter from "./components/Filter";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({
    location: "",
    industry: "",
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <Box bg="black" minHeight="100vh">
      <Navbar />
      <Container maxW="container.xl" py={12}>
        <VStack spacing={6} align="stretch">
          <Box textAlign="left" color="white">
            <Text fontSize="xl" mx="auto" lineHeight="tall">
              Explore a curated list of innovative deep tech companies that are shaping the future of technology.
            </Text>
          </Box>
          <Filter onFilterChange={handleFilterChange} />
          <VStack spacing={6} align="stretch">
            {companyData.map((company) => (
              <CompanyCard
                key={company.id}
                name={company.name}
                hqLocation={company.hqLocation}
                foundedYear={company.foundedYear}
                estFunding={company.estFunding}
                estHeadcount={company.estHeadcount}
                website={company.website}
                jobsLink={company.jobsLink}
                description={company.description}
                industry={company.industry}
              />
            ))}
          </VStack>
        </VStack>
      </Container>
      <Box as="footer" textAlign="center" py={4} bg="gray.800" color="white">
        <Text>
          Made in 🇨🇦 by{" "}
          <Link href="https://twitter.com/zaaisvanzyl" isExternal color="teal.200">
            @zaaisvanzyl
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
