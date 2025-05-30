// src/components/BannerSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const BannerSlider = () => {
  const images = [
    'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',
    'https://www.queensheadwestbergholt.co.uk/wp-content/uploads/2020/09/QH_50.jpg',
    'https://cdn.grabon.in/gograbon/images/web-images/uploads/1742546225431/eatsure-coupons.jpg',
  ];

  return (
    <div className="w-full px-4 py-2">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imgUrl}
              alt={`banner-${index}`}
              className="w-full h-[110px] md:h-[220px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
