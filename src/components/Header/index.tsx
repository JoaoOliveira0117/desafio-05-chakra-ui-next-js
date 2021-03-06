import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <Flex as="header" w="100%" h="6.25rem" align="center" justify="center">
      <Link href="/">
        <Image src="/index/logo.svg" />
      </Link>
    </Flex>
  );
}
