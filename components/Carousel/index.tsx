import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem } from "./CarouselItem";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Box w="100%" maxWidth="1440px" h="28rem" m="auto">
      <Swiper navigation={true} pagination={true}>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
