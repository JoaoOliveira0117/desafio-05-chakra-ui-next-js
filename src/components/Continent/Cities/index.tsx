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
    <VStack
      w="100%"
      maxWidth={{
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px",
      }}
      m="auto"
      spacing="5rem"
      align="start"
    >
      <Heading fontWeight="500" fontSize="2rem">
        Cidades +100
      </Heading>
      <Grid
        w="100%"
        templateColumns={{
          md: "repeat(1,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(5,1fr)",
        }}
        gap={6}
      >
        {cities?.map(({ name, country }) => (
          <Box key={name} m="auto">
            <CityCard name={name} country={country} />
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}
