// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Banner from '@/assets/banner1.png'

export default function BannerRotativo() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{
        zIndex: '1',
      }}
    >
      <SwiperSlide>
        <img src={Banner} alt="banner1" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={Banner} alt="banner1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="banner1" />
      </SwiperSlide> */}
    </Swiper>
  )
}
