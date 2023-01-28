import Head from "next/head";
import React from "react";
import Coursesfor from "../components/coursesfor";
import WhatsAppButton from "../components/whatsapp";

function courses() {
  return (
    <>
      <Head>
        <title>Spider Web Designs-Courses</title>
        <meta name="description" content="The professionals here to help" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Coursesfor />
      <WhatsAppButton />
    </>
  );
}

export default courses;
