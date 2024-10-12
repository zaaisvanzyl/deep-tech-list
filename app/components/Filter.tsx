import React, { useState } from 'react';
import {
  Box,
  Input,
  Select,
  HStack,
  Button,
  useColorModeValue,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      searchTerm: '',
      funding: '',
      headcount: '',
      industry: '',
    });
    onFilterChange({
      searchTerm: '',
      funding: '',
      headcount: '',
      industry: '',
    });
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

  return (
    <Box
      p={2}
      borderRadius="md"
      borderWidth={1}
      borderColor="gray.600"
    >
      <HStack spacing={2} align="center">
        <Input
          placeholder="Search"
          name="searchTerm"
          value={filters.searchTerm}
          onChange={handleInputChange}
          size="sm"
          width="800px"
          color={textColor}
          _placeholder={{ color: 'gray.500' }}
          {...inputStyles}
        />
        <HStack spacing={1}>
          <Select
            placeholder="Funding"
            name="funding"
            value={filters.funding}
            onChange={handleInputChange}
            size="sm"
            width="120px"
            color={textColor}
            {...inputStyles}
          >
            <option value="0">$0 - $10M</option>
            <option value="10000000">$10M - $100M</option>
            <option value="100000000">$100M - $1B</option>
            <option value="1000000000">$1B - $10B</option>
            <option value="10000000000">$10B+</option>
          </Select>
        </HStack>
        <HStack spacing={1}>
          <Select
            placeholder="Headcount"
            name="headcount"
            value={filters.headcount}
            onChange={handleInputChange}
            size="sm"
            width="120px"
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
        </HStack>
        <Select
          placeholder="Industry"
          name="industry"
          value={filters.industry}
          onChange={handleInputChange}
          size="sm"
          width="120px"
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
        >
          Reset
        </Button>
      </HStack>
    </Box>
  );
};

export default Filter;
