import { useRef, useState } from "react"
// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules'
const BannerCard = () => {
  return (
    <div className="banner">
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404632064i/759945.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388211242i/69571.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386926572i/42547.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347426330i/2719662.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677836226i/41181739.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard

