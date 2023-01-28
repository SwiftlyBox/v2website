import React from "react";
import spiderweb from "../public/assets/spiderweb.jpg";
import Image from "next/image";

const Us = () => {
  return (
    <>
      <section className="mb-40">
        <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12  items-center">
              <div className="mt-12 lg:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  About Us
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  Spider Web Design
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                  Spider Web Design is a leading printing and signage design
                  firm that specializes in visually stunning designs that help
                  businesses stand out. Our experienced designers collaborate
                  closely with clients to understand their specific requirements
                  and create custom designs that are tailored to their brand. We
                  provide a variety of services such as business cards,
                  brochures, posters, banners, and signs. We deliver
                  high-quality products that are sure to impress thanks to our
                  cutting-edge printing technology. You can count on us to
                  elevate your brand and leave a lasting impression.
                </p>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={spiderweb}
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="Spider Web Design"
                  width="500"
                  height="500"
                  loading="lazy"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Us;
