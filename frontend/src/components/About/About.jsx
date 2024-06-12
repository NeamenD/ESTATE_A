import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./about.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import your image files (adjust paths as necessary)
import image1 from "/RealEstate/image1.jpg";
import image2 from "/RealEstate/image2.jpg";
import image3 from "/RealEstate/image3.jpg";
import image4 from "/RealEstate/image4.jpg";
import image5 from "/RealEstate/image5.jpg";
import image6 from "/RealEstate/image6.jpg";
import image7 from "/RealEstate/image7.jpg";
import image8 from "/RealEstate/image8.jpg";
import image9 from "/RealEstate/image9.jpg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to Denver Real Estate, your ultimate destination for finding
          the perfect property in the Mile-High City.
        </p>
        <p>
          Our mission is to provide comprehensive listings of homes and
          apartments across Denver's diverse neighborhoods, catering to every
          lifestyle and budget.
        </p>
        <p>
          Whether you're looking to buy, sell, or rent, our dedicated team of
          agents is here to guide you through every step of the process.
        </p>
        <p>
          Explore our user-friendly search tools, connect with experienced
          agents, and embark on your journey to finding your dream home in
          Denver today!
        </p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="Property 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Property 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Property 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="Property 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="Property 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} alt="Property 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="Property 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} alt="Property 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image9} alt="Property 5" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
