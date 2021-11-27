import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface CityCardProps {
  name: string;
  country: string;
}

export function CityCard({ name, country }: CityCardProps) {
  return (
    <Box
      maxWidth="16rem"
      h="17.5rem"
      borderRadius=".5rem .5rem 0 0"
      transition="all ease .2s"
      _hover={{ transform: "scale(1.1)" }}
    >
      <Box
        w="100%"
        h="60%"
        backgroundImage={`url(/europa/cities/${name}.png)`}
      />
      <Box
        w="100%"
        h="40%"
        border="2px solid rgba(255, 186, 8, 0.5)"
        borderTop="none"
        borderRadius="0 0 .5rem .5rem"
      >
        <VStack h="100%" align="start" justifyContent="center" mx="1.5rem">
          <Text color="text.dark" fontSize="1.25rem" fontWeight="600">
            {name}
          </Text>
          <Text color="info.dark" fontSize="1rem" fontWeight="500">
            {country}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
