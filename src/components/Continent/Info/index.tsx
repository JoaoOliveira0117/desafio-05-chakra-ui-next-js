import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
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

  const isWideViewport = useBreakpointValue({
    base: false,
    lg: true,
  });

  const displayBlock = !isWideViewport && {
    display: "block",
  };

  return (
    <Flex
      maxWidth={{
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px",
      }}
      {...displayBlock}
      align="center"
      justifyContent="space-between"
      m="auto"
    >
      <Text
        fontWeight="400"
        fontSize={["1rem", "1.25rem", "1.5rem"]}
        textAlign="justify"
        color="text.dark"
        maxWidth={isWideViewport ? "50%" : "100%"}
        m="1rem"
      >
        {description}
      </Text>
      <HStack
        w={isWideViewport ? "50%" : "100%"}
        spacing={["1rem", "2rem", "3rem", "4rem"]}
        align={["start", "start", "center"]}
        justifyContent="center"
        m="1rem"
      >
        <Box
          fontWeight={["400", "500", "600"]}
          lineHeight="2rem"
          textAlign={["start", "start", "center"]}
        >
          <Heading fontSize={["1.5rem", "2rem", "3rem"]} color="highlight">
            {countries}
          </Heading>
          <Text fontSize={["1rem", "1.25rem", "1.5rem"]}>países</Text>
        </Box>
        <Box
          fontWeight={["400", "500", "600"]}
          lineHeight="2rem"
          textAlign={["start", "start", "center"]}
        >
          <Heading fontSize={["1.5rem", "2rem", "3rem"]} color="highlight">
            {languages}
          </Heading>
          <Text fontSize={["1rem", "1.25rem", "1.5rem"]}>línguas</Text>
        </Box>
        <Box
          fontWeight={["400", "500", "600"]}
          lineHeight="2rem"
          textAlign={["start", "start", "center"]}
        >
          <Heading fontSize={["1.5rem", "2rem", "3rem"]} color="highlight">
            {city_count}
          </Heading>
          <Text fontSize={["1rem", "1.25rem", "1.5rem"]}>cidades +100</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
