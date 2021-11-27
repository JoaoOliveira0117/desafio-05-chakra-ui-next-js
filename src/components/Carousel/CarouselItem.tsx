import { Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export function CarouselItem() {
  return (
    <Flex
      w="100%"
      h="100%"
      backgroundImage="url(/index/Continents/Europa.png)"
      backgroundSize="cover"
      align="center"
      justifyContent="center"
    >
      <VStack spacing="1rem">
        <Heading
          color="text.light"
          fontSize={["2rem", "2.25rem", "2.75rem", "3rem"]}
        >
          Europa
        </Heading>
        <Heading
          color="info.dark"
          fontSize={["0.75rem", "1rem", "1.25rem", "1.5rem"]}
        >
          o continente mais antigo
        </Heading>
      </VStack>
    </Flex>
  );
}
