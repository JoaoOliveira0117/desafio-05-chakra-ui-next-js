import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

type ContinentInfoProps = {
  description: string;
  countries: number;
  languages: number;
  city_count: number;
};

interface ContinentProps {
  continent: ContinentInfoProps;
}

export function ContinentInfo({ continent }: ContinentProps) {
  const { description, countries, languages, city_count } = continent;

  return (
    <Flex
      maxWidth="1440px"
      align="center"
      justifyContent="space-between"
      m="auto"
    >
      <Text
        fontWeight="400"
        fontSize="1.5rem"
        textAlign="justify"
        color="text.dark"
        maxWidth="50%"
        m="1rem"
      >
        {description}
      </Text>
      <HStack
        w="50%"
        spacing="4rem"
        align="center"
        justifyContent="center"
        m="1rem"
      >
        <Box fontWeight="600" lineHeight="2rem" textAlign="center">
          <Heading fontSize="3rem" color="highlight">
            {countries}
          </Heading>
          <Text fontSize="1.5rem">países</Text>
        </Box>
        <Box fontWeight="600" lineHeight="2rem" textAlign="center">
          <Heading fontSize="3rem" color="highlight">
            {languages}
          </Heading>
          <Text fontSize="1.5rem">línguas</Text>
        </Box>
        <Box fontWeight="600" lineHeight="2rem" textAlign="center">
          <Heading fontSize="3rem" color="highlight">
            {city_count}
          </Heading>
          <Text fontSize="1.5rem">cidades +100</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
