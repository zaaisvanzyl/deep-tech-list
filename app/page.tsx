"use client";

import { Box, VStack, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CompanyCard from "./components/CompanyCard";
import { companyData } from "./data/companyData";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={8}>
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
            />
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
