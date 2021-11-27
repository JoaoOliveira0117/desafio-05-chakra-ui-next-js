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
        <Heading color="text.light" fontSize="3rem">
          Europa
        </Heading>
        <Heading color="info.dark" fontSize="1.5rem">
          o continente mais antigo
        </Heading>
      </VStack>
    </Flex>
  );
}
