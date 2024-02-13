import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { manga } from "../../images";

export function MangaSection() {
  const images = manga.map((image) => (
    <SwiperSlide>
      <img src={image} alt="art" />
    </SwiperSlide>
  ));

  return (
    <div className="w-full max-w-[849px] flex flex-col gap-5 jusify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-2xl">My manga</div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          autoHeight={true}
        >
          {images}
        </Swiper>
      </>
    </div>
  );
}
