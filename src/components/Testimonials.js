"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/virtual';
const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} swiper-pagination-line"></div>`;
    },
  };

  return (
    <div className="width testimonials">
      <h6>WHAT THEY SAY ABOUT US</h6>
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-card-container">
        <Swiper
          pagination={pagination}
          // pagination={{
          //   clickable: true,
          // }}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          modules={[Pagination, Virtual]}
          virtual = {true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              // width: 1070,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1640: {
              // width: 1640,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <Image
                  width={143}
                  height={26}
                  src="/images/stars.png"
                  alt="stars"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  nec euismod arcu, sodales vulputate dolor. Donec elementum
                  metus eu vehicula malesuada. Cras consectetur congue
                  pellentesque.
                </p>
                <div className="line"></div>
                <h4>STEVE B</h4>
                <h5>THE CHOCOLATE DIPPY DONUT</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <Image
                  width={143}
                  height={26}
                  src="/images/stars.png"
                  alt="stars"
                />
                <p>
                  Ut faucibus pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Sodales neque sodales ut etiam. Enim nunc faucibus
                  a pellentesque sit amet porttitor integer eget dolor.
                </p>
                <div className="line"></div>
                <h4>JANE DOE</h4>
                <h5>THE CHOCOLATE DIPPY DONUT</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <Image
                  width={143}
                  height={26}
                  src="/images/stars.png"
                  alt="stars"
                />
                <p>
                  Orci eu lobortis elementum nibh tellus molestie nunc. Non enim
                  praesent elementum facilisis leo vel fringilla. Ipsum
                  consequat nisl vel pretium lectus quam id leo in sed velit.
                </p>
                <div className="line"></div>
                <h4>ALEC JOE</h4>
                <h5>THE CHOCOLATE DIPPY DONUT</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <Image
                  width={143}
                  height={26}
                  src="/images/stars.png"
                  alt="stars"
                />
                <p>
                  Ut faucibus pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Sodales neque sodales ut etiam. Enim nunc faucibus
                  a pellentesque sit amet porttitor integer eget dolor.
                </p>
                <div className="line"></div>
                <h4>JHON JOE</h4>
                <h5>THE CHOCOLATE DIPPY DONUT</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <Image
                  width={143}
                  height={26}
                  src="/images/stars.png"
                  alt="stars"
                />
                <p>
                  Ut faucibus pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Sodales neque sodales ut etiam. Enim nunc faucibus
                  a pellentesque sit amet porttitor integer eget dolor.
                </p>
                <div className="line"></div>
                <h4>JANE DOE</h4>
                <h5>THE CHOCOLATE DIPPY DONUT</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="testimonials-nav">

      </div> */}
    </div>
  );
};

export default Testimonials;
