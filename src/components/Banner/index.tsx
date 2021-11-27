import { Flex, Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";

interface BannerProps {
  height: string;
  title: React.ReactNode;
  fontSize?: string;
  description?: string;
  backgroundImage: string;
  overlayImage?: string;
}

export function Banner({
  height,
  title,
  fontSize,
  description,
  backgroundImage,
  overlayImage,
}: BannerProps) {
  return (
    <Flex
      w="100%"
      height={height}
      backgroundImage={`url(${backgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align={description ? "center" : "end"}
      pb={description ? "" : "4rem"}
      justifyContent="center"
    >
      <Flex
        w="100%"
        maxWidth="1440px"
        align="center"
        justifyContent="space-between"
      >
        <Stack spacing="1.25rem">
          <Heading
            color="white"
            fontSize={fontSize ? fontSize : "2rem"}
            fontWeight="500"
          >
            {title}
          </Heading>
          {description && (
            <Heading
              color="info.dark"
              fontSize="1.25rem"
              fontWeight="400"
              maxWidth="600px"
            >
              {description}
            </Heading>
          )}
        </Stack>
        <Box position="relative" minWidth="28rem">
          {overlayImage && (
            <Image
              src={overlayImage}
              position="absolute"
              right="0"
              top="-110px"
            />
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
