"use client";

import { Box, VStack, Container, Text, Link, Flex, Icon } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CompanyCard from "./components/CompanyCard";
import { companyData } from "./data/companyData";
import Filter from "./components/Filter";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    funding: "",
    headcount: "",
    industry: "",
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const formatFunding = (funding: number): string => {
    if (funding >= 1000000000) {
      return `$${Math.floor(funding / 1000000000)}B`;
    } else if (funding >= 1000000) {
      return `$${Math.floor(funding / 1000000)}M`;
    } else {
      return `$${Math.floor(funding / 1000)}K`;
    }
  };

  const formatHeadcount = (headcount: number): string => {
    if (headcount >= 100000) {
      return "100,000+";
    } else if (headcount >= 10000) {
      return `${Math.floor(headcount / 1000)},${(headcount % 1000).toString().padStart(3, '0')}+`;
    } else if (headcount >= 1000) {
      return `${headcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}+`;
    } else {
      return `${headcount}+`;
    }
  };

  const getHeadcountRange = (headcount: string): [number, number] => {
    const ranges: { [key: string]: [number, number] } = {
      "1": [1, 10],
      "11": [11, 50],
      "51": [51, 100],
      "101": [101, 500],
      "501": [501, 1000],
      "1001": [1001, 5000],
      "5001": [5001, 10000],
      "10001": [10001, Infinity]
    };
    return ranges[headcount] || [0, Infinity];
  };

  const filteredCompanies = companyData.filter((company) => {
    const matchesSearch = filters.searchTerm
      ? company.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      : true;
    const matchesFunding = filters.funding
      ? company.estFunding >= parseInt(filters.funding) &&
        (parseInt(filters.funding) === 10000000000 || company.estFunding < parseInt(filters.funding) * 10)
      : true;
    const matchesHeadcount = filters.headcount
      ? (() => {
          const [min, max] = getHeadcountRange(filters.headcount);
          return company.estHeadcount >= min && company.estHeadcount <= max;
        })()
      : true;
    const matchesIndustry = filters.industry
      ? company.industry === filters.industry
      : true;
    return matchesSearch && matchesFunding && matchesHeadcount && matchesIndustry;
  });

  return (
    <Box bg="black" minHeight="100vh">
      <Navbar />
      <Container maxW="container.xl" py={12}>
        <VStack spacing={6} align="stretch">
          <Filter onFilterChange={handleFilterChange} />
          <VStack spacing={6} align="stretch">
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                name={company.name}
                hqLocation={company.hqLocation}
                foundedYear={company.foundedYear}
                estFunding={formatFunding(company.estFunding)}
                estHeadcount={formatHeadcount(company.estHeadcount)}
                website={company.website}
                jobsLink={company.jobsLink}
                description={company.description}
                industry={company.industry}
              />
            ))}
          </VStack>
        </VStack>
      </Container>
      <Box as="footer" textAlign="center" py={4} color="white">
        <Text>
          Made in 🇨🇦 by{" "}
          <Link href="https://x.com/zaaisvanzyl" target="_blank" isExternal>
            @zaaisvanzyl
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
