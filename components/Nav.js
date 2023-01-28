import React from 'react'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Nav() {
  return (
    <>
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
      <Link
        activeClass="active"
        to="5"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <p>About Us</p>
      </Link>
    </>
  );
}

export default Nav;
