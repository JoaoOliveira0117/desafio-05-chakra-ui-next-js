import { Box, VStack, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes/Index";
import { api } from "../services/api";

export default function HomePage() {
  return (
    <>
      <Header />
      <VStack spacing="5rem" mb="2.5rem">
        <Banner
          height="18.75rem"
          title={
            <>
              5 Continentes, <br />
              infinitas possibilidades.
            </>
          }
          description="Chegou a hora de tirar do papel a viagem que você sempre sonhou. "
          backgroundImage="/index/Background.png"
          overlayImage="/index/Airplane.png"
        />
        <TravelTypes />
        <Box w="4rem" border="1px solid" borderColor="text.dark" />
        <Heading
          textAlign="center"
          fontSize={["0", "1.25rem", "1.5rem", "2rem", "2.25rem"]}
          fontWeight="500"
          lineHeight="3rem"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
        <Carousel />
      </VStack>
    </>
  );
}
