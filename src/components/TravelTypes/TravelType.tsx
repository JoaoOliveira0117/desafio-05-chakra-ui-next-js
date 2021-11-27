import { Box, Icon, Heading } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface TravelTypeProps {
  icon: IconType;
  text: string;
}

export function TravelType({ icon, text }: TravelTypeProps) {
  return (
    <Box display="block" align="center" justify="center">
      <Icon as={icon} w="85px" h="85px" color="highlight" />
      <Heading fontSize="24px" fontWeight="600">
        {text}
      </Heading>
    </Box>
  );
}
