import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fourSeasonsArt } from "../../images";

export function FourSeasonsSection() {
  const images = fourSeasonsArt.map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt="four seasons art" />
    </SwiperSlide>
  ));

  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-5 justify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-2xl text-center">Four seasons</div>
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
