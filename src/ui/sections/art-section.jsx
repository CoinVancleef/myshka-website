import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { regularArt } from "../../images";

export function ArtSection({ noLabel }) {
  const images = regularArt.map((image) => (
    <SwiperSlide>
      <img src={image} alt="art" />
    </SwiperSlide>
  ));
  const imagesShuffled = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-5 jusify-center items-center max-sm:px-2">
      {!noLabel && (
        <div className="text-5xl max-sm:text-3xl">Some of my artworks</div>
      )}
      <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
          autoHeight={true}
        >
          {imagesShuffled}
        </Swiper>
      </>
    </div>
  );
}
