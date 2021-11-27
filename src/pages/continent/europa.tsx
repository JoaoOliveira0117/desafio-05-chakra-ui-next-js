import { Box, Flex, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { CitiesGrid } from "../../components/Continent/Cities";
import { ContinentInfo } from "../../components/Continent/Info";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type City = {
  name: string;
  country: string;
};

interface Continent {
  slug: string;
  name: string;
  description: string;
  countries: number;
  languages: number;
  city_count: number;
  cities: City[];
}

export default function Europa() {
  const [continent, setContinent] = useState<Continent>({} as Continent);

  useEffect(() => {
    api
      .get("/continent/1")
      .then((res: any) => setContinent(res.data.continent));
  }, []);

  return (
    <>
      <Header />
      <VStack spacing="5rem" mb="2.5rem">
        <Banner
          height="31.25rem"
          title={"Europa"}
          fontSize="3rem"
          backgroundImage="/europa/Banner.png"
        />
        <ContinentInfo continent={continent} />
        <CitiesGrid cities={continent.cities} />
      </VStack>
    </>
  );
}
