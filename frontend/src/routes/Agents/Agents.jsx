// src/pages/Agents.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./agents.scss"; // Create this file for Agents-specific styles if needed
import { Pagination } from "swiper/modules";
// import "./style.css";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/Agents/path_to_Sarah_Johnson.jpg",
    description: "Experienced in residential real estate.",
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "/Agents/Michael_Smith.jpg",
    description: "Expert in commercial properties.",
  },
  {
    id: 3,
    name: "Victoria Heath",
    image: "/Agents/victoria-heath.jpg",
    description: "Specializes in luxury homes.",
  },
  // Add more agents as needed
];

const Agents = () => {
  return (
    <div className="agentsPage">
      <h1>Our Agents</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {agents.map((agent) => (
          <SwiperSlide key={agent.id}>
            <div className="agentCard">
              <img src={agent.image} alt={agent.name} />
              <h3>{agent.name}</h3>
              <p>{agent.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Agents;
