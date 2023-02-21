import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import a from "../public/assets/a.jpg";
import b from "../public/assets/b.jpg";
import c from "../public/assets/c.jpg";
import e from "../public/assets/e.jpg";
import g from "../public/assets/g.jpg";
import h from "../public/assets/h.jpg";
import i from "../public/assets/i.jpg";
import j from "../public/assets/j.jpg";
import k from "../public/assets/k.jpg";
import lm from "../public/assets/lm.jpg";
import m from "../public/assets/m.jpg";
import mn from "../public/assets/mn.jpg";
import o from "../public/assets/o.jpg";
import p from "../public/assets/p.jpg";
import r from "../public/assets/r.jpg";
import s from "../public/assets/s.jpg";




const Gallery = () => {
  return (
    <>
      <style>
        {` 
      .slider-container {
              width: 100%;
              height: 100%;
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
                src={a}
                alt="Past Work"
                width="500"
                height="100"
                style={{ borderRadius: 20, height: "10" }}
              />
            </div>
            <div>
              <Image
                src={b}
                alt="Past Work"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>

            <div>
              <Image
                src={e}
                alt="Past Work"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>

            <div>
              <Image
                src={g}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={h}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={i}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={j}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={k}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={lm}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={m}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={mn}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={m}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={o}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={p}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={r}
                alt="image1"
                width="500"
                height="100"
                style={{ borderRadius: 20 }}
              />
            </div>
            <div>
              <Image
                src={s}
                alt="image1"
                width="500"
                height="100"
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
