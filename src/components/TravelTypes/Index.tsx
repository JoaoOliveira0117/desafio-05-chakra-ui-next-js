import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import {
  FaCocktail,
  FaUmbrellaBeach,
  FaCity,
  FaTheaterMasks,
} from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import React from "react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      m="auto"
      maxWidth="1440px"
      styleType="none"
      wrap="wrap"
      align="center"
      justifyContent="space-around"
    >
      <TravelType
        icon={FaCocktail}
        text="vida noturna"
        isWideVersion={isWideVersion}
      />
      <TravelType
        icon={FaUmbrellaBeach}
        text="praia"
        isWideVersion={isWideVersion}
      />
      <TravelType icon={FaCity} text="moderno" isWideVersion={isWideVersion} />
      <TravelType
        icon={FaTheaterMasks}
        text="clássico"
        isWideVersion={isWideVersion}
      />
      <TravelType
        icon={TiWorld}
        text="e mais..."
        isWideVersion={isWideVersion}
      />
    </Flex>
  );
}
