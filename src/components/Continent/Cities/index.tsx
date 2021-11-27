import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { CityCard } from "./CityCard";

type City = {
  name: string;
  country: string;
};

interface CitiesGridProps {
  cities: City[];
}

export function CitiesGrid({ cities }: CitiesGridProps) {
  return (
    <VStack w="100%" maxWidth="1440px" m="auto" spacing="5rem" align="start">
      <Heading fontWeight="500" fontSize="2rem">
        Cidades +100
      </Heading>
      <Grid w="100%" templateColumns="repeat(5,1fr)" gap={6}>
        {cities?.map(({ name, country }) => (
          <Box key={name}>
            <CityCard name={name} country={country} />
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}
