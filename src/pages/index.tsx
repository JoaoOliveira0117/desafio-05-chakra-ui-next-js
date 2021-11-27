import { Box, VStack, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes/Index";
import { api } from "../services/api";

export default function HomePage() {
  useEffect(() => {
    api.get("/continents");
  }, []);
  return (
    <>
      <Header />
      <VStack spacing="5rem" mb="2.5rem">
        <Banner />
        <TravelTypes />
        <Box w="4rem" border="1px solid" borderColor="text.dark" />
        <Heading textAlign="center" fontWeight="500" lineHeight="3rem">
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
        <Carousel />
      </VStack>
    </>
  );
}