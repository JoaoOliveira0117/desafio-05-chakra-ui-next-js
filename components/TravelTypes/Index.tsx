import { Grid, Icon } from "@chakra-ui/react";
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
  return (
    <Grid
      templateColumns="repeat(5,1fr)"
      gap="8.125rem"
      m="auto"
      maxWidth="1440px"
    >
      <TravelType icon={FaCocktail} text="vida noturna" />
      <TravelType icon={FaUmbrellaBeach} text="praia" />
      <TravelType icon={FaCity} text="moderno" />
      <TravelType icon={FaTheaterMasks} text="clássico" />
      <TravelType icon={TiWorld} text="e mais..." />
    </Grid>
  );
}
