import { Link } from "@chakra-ui/react";
import React from "react";
import { CarouselItem } from "./CarouselItem";

interface CarouselLinkProps {
  href: string;
}

export function CarouselLink({ href }: CarouselLinkProps) {
  return (
    <Link
      w="100%"
      h="100%"
      href={href}
      _hover={{
        textDecoration: "none",
        filter: "brightness(1.2)",
        transition: "all ease 0.2s",
      }}
    >
      <CarouselItem />
    </Link>
  );
}
