import React, { useState } from 'react';
import {
  Box,
  Input,
  Select,
  HStack,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaDollarSign, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  searchTerm: string;
  funding: string;
  headcount: string;
  location: string;
  industry: string;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    funding: '',
    headcount: '',
    location: '',
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
      location: '',
      industry: '',
    });
    onFilterChange({
      searchTerm: '',
      funding: '',
      headcount: '',
      location: '',
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
          width="680px"
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
            <option value="0-10M">$0 - $10M</option>
            <option value="10M-100M">$10M - $100M</option>
            <option value="100M+">$100M+</option>
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
            <option value="1-100">1 - 100</option>
            <option value="101-1000">101 - 1,000</option>
            <option value="1000+">1,000+</option>
          </Select>
        </HStack>
        <Select
          placeholder="Location"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          size="sm"
          width="120px"
          color={textColor}
          {...inputStyles}
        >
          <option value="US">United States</option>
          <option value="EU">Europe</option>
          <option value="APAC">Asia Pacific</option>
        </Select>
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
          <option value="AI">AI</option>
          <option value="Robotics">Robotics</option>
          <option value="Biotech">Biotech</option>
          <option value="Quantum">Quantum Computing</option>
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
