import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import hot1 from "../public/assets/hot1 .jpg";
import hot2 from "../public/assets/hot2.jpg";
import hot3 from "../public/assets/hot3.jpg";
import hot4 from "../public/assets/hot4.jpg";
import hot5 from "../public/assets/hot5.jpg";
import hot6 from "../public/assets/hot6.jpg";
import hot7 from "../public/assets/hot7.jpg";

const Gallery = () => {
  return (
    <>
      <style>
        {` 
      .slider-container {
              width: 100%;
              height: 0%;
          `}
      </style>
      <section id="4">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl pt-10">
          <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl text-center	 ">
            Spider Web Design Past Work
          </h2>
          <Carousel className="slider-container" showArrows={true} width="100">
            <div>
              <Image
                src={hot1}
                alt="Past Work"
                width="500"
                height="10"
                style={{ borderRadius: 20,height:'10' }}
              />
            </div>
            <div>
              <Image
                src={hot2}
                alt="Past Work"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={hot3}
                alt="Past Work"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={hot4}
                alt="Past Work"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={hot5}
                alt="image1"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={hot6}
                alt="image1"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={hot7}
                alt="image1"
                width="500"
                height="20"
                style={{ borderRadius: 20 }}
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Gallery;
