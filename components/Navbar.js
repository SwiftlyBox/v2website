import React from "react";
import Image from "next/image";
import jus from "../public/assets/jus.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 font-bold	">
        <Link href="/">
          <Image src={jus} alt="Spider Web Designers" width="200" height="20" />
        </Link>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 text-white	">
          <Link href="services">
            <p>Our Services</p>
          </Link>
          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>Our Values </p>
          </Link>

          <Link
            activeClass="active"
            to="3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>FAQ</p>
          </Link>
          <Link href="courses">
            <p>Courses</p>
          </Link>
          <Link href="contact">
            <p>Contact</p>
          </Link>
          <Link
            activeClass="active"
            to="4"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>Past Work </p>
          </Link>
        </div>

        <button className="btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full invisible lg:visible ">
          <a href=" https://wa.me/658808362">Get A Quote</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
