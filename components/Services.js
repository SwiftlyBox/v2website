import React from "react";
import shop from "../public/assets/shop.jpg";
import socials from "../public/assets/socials.jpg";
import client from "../public/assets/client.jpg";
import shitprinting from "../public/assets/shitprinting.png";

import photoshoot from "../public/assets/photoshoot.jpg";
import photoshopuse from "../public/assets/photoshopuse.png";
import website from "../public/assets/website.jpg";
import flyers from "../public/assets/flyers.jpg";
import Image from "next/image";

const ServicesFor = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl pt-10">
        <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium  text-black text-center	pb-8		">
          Our Services
        </p>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={photoshoot}
              alt="Photo Shoot"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Photo Shoot
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={shop}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Shop Branding
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={client}
              alt="Get The App"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Our Professional Vehicle Wrapping Services
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>

          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={shitprinting}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              T-shirt printing and personalised school uniform and sportswear
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={flyers}
              alt="Flyers and business card"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Flyers and business card
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={socials}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Social Media Management
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>

          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={website}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Web Development
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={photoshopuse}
              alt="Get The App"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Graphic Design
            </h1>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFor;
