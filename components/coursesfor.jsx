import React from "react";
import photo from "../public/assets/photo.jpg";
import course from "../public/assets/course.jpg";
import photoshopuse from "../public/assets/photoshopuse.png";
import computer from "../public/assets/computer.jpg";
import corelcourse from "../public/assets/corelcourse.png";
import Image from "next/image";

function IRLcourses() {
  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl pt-10">
          <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium  text-black text-center	pb-8		">
            Our Courses
          </p>
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={course}
                alt="Photo Shoot"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                T-shirt Printing Course
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
                alt="Become A Partner"
                loading="lazy"
                layout="responsive"
                height="300"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Basic Photoshop Course
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
                src={corelcourse}
                alt="Get The App"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Basic CorelDraw Course
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
                src={computer}
                alt="Get The App"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Computer Course
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
                src={photo}
                alt="Get The App"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Photography Course
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
    </>
  );
}

export default IRLcourses;
