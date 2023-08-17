import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { twcArt } from "../../images";

export function TwcSection() {
  const images = twcArt.map((img) => (
    <SwiperSlide>
      <img className={img.scaleDownOptions} src={img.image} alt="art" />
    </SwiperSlide>
  ));

  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-5 jusify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-3xl">
        My artworks for TWC 2023 matches
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoHeight={true}
        >
          {images}
        </Swiper>
      </>
    </div>
  );
}
