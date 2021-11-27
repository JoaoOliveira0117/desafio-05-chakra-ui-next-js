import { Box, Icon, Heading, ListItem } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { VscCircleFilled } from "react-icons/vsc";

interface TravelTypeProps {
  icon: IconType;
  text: string;
  isWideVersion?: boolean;
}

export function TravelType({ icon, text, isWideVersion }: TravelTypeProps) {
  const iconSize = {
    base: "40px",
    lg: "65px",
    xl: "85px",
  };

  return (
    <Box
      display={isWideVersion ? "block" : "flex"}
      align="center"
      justify="center"
      mx={["0", "1rem", "2rem", "3rem", "4rem", "5rem"]}
      transition="all ease 0.2s"
      _hover={{ transform: "scale(2)" }}
    >
      <Icon
        as={isWideVersion ? icon : VscCircleFilled}
        w={iconSize}
        h={iconSize}
        color="highlight"
      />
      <Heading
        fontSize={{ base: "1rem", lg: "1.25rem", xl: "1.5rem" }}
        fontWeight="600"
        m="auto"
      >
        {text}
      </Heading>
    </Box>
  );
}
