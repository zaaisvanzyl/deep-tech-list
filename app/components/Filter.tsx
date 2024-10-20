import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  Select,
  Button,
  useColorModeValue,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { Industry } from '../data/industries';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  searchTerm: string;
  funding: string;
  headcount: string;
  industry: string;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    funding: '',
    headcount: '',
    industry: '',
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      searchTerm: '',
      funding: '',
      headcount: '',
      industry: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const textColor = useColorModeValue('gray.200', 'gray.400');
  const borderColor = useColorModeValue('gray.700', 'gray.600');

  const inputStyles = {
    borderRadius: 'md',
    borderColor: borderColor,
    _focus: {
      borderColor: 'blue.500',
      boxShadow: '0 0 0 1px blue.500',
    },
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!isMounted) {
    return null; // Return null on the server-side and first client-side render
  }

  return (
    <Box
      p={2}
      borderRadius="md"
      borderWidth={1}
      borderColor="gray.600"
    >
      <Flex direction={isMobile ? "column" : "row"} gap={2} align="center">
        <Input
          placeholder="Search"
          name="searchTerm"
          value={filters.searchTerm}
          onChange={handleInputChange}
          size="sm"
          width={isMobile ? "100%" : "40%"}
          color={textColor}
          _placeholder={{ color: 'gray.500' }}
          {...inputStyles}
        />
        <Select
          placeholder="Funding"
          name="funding"
          value={filters.funding}
          onChange={handleInputChange}
          size="sm"
          width={isMobile ? "100%" : "15%"}
          color={textColor}
          {...inputStyles}
        >
          <option value="0">$0 - $10M</option>
          <option value="10000000">$10M - $100M</option>
          <option value="100000000">$100M - $1B</option>
          <option value="1000000000">$1B - $10B</option>
          <option value="10000000000">$10B+</option>
        </Select>
        <Select
          placeholder="Headcount"
          name="headcount"
          value={filters.headcount}
          onChange={handleInputChange}
          size="sm"
          width={isMobile ? "100%" : "15%"}
          color={textColor}
          {...inputStyles}
        >
          <option value="1">1 - 10</option>
          <option value="11">11 - 50</option>
          <option value="51">51 - 100</option>
          <option value="101">101 - 500</option>
          <option value="501">501 - 1,000</option>
          <option value="1001">1,001 - 5,000</option>
          <option value="5001">5,001 - 10,000</option>
          <option value="10001">10,000+</option>
        </Select>
        <Select
          placeholder="Industry"
          name="industry"
          value={filters.industry}
          onChange={handleInputChange}
          size="sm"
          width={isMobile ? "100%" : "15%"}
          color={textColor}
          {...inputStyles}
        >
          {Object.values(Industry).map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </Select>
        <Button
          variant="outline"
          colorScheme="white"
          onClick={handleApplyFilters}
          size="sm"
          color={textColor}
          borderColor={textColor}
          _hover={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
          width={isMobile ? "100%" : "auto"}
        >
          Apply
        </Button>
        <Button
          colorScheme="white"
          onClick={handleResetFilters}
          size="sm"
          color={textColor}
          borderColor={textColor}
          _hover={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
          }}
          width={isMobile ? "100%" : "auto"}
        >
          Reset
        </Button>
      </Flex>
    </Box>
  );
};

export default Filter;
