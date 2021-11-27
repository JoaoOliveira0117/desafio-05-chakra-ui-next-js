import { Flex, Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";

export function Banner() {
  return (
    <Flex
      w="100%"
      height="18.75rem"
      backgroundImage="url(/index/Background.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxWidth="1440px"
        align="center"
        justifyContent="space-between"
      >
        <Stack spacing="1.25rem">
          <Heading color="white" fontSize="2rem" fontWeight="500">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Heading
            color="info.dark"
            fontSize="1.25rem"
            fontWeight="400"
            maxWidth="600px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Heading>
        </Stack>
        <Box position="relative" minWidth="28rem">
          <Image
            src="/index/Airplane.png"
            position="absolute"
            right="0"
            top="-110px"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
