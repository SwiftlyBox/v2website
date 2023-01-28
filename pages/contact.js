import React from "react"; 
import Script from "next/script"
import WhatsAppButton from "../components/whatsapp";
import Head from "next/head";


function contact() {
  return (
    <>
      <Head>
        <title>Spider Web Designs-Contact</title>
        <meta name="description" content="The professionals here to help" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="container mx-auto py-20">
          <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Contact
          </h1>
          <div class="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.4960510256906!2d18.630439014923688!3d-33.90263052824622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc51a0c6ee76b7%3A0xa055ea83df471a53!2sSPIDER%20WEB%20UNLIMITED!5e0!3m2!1sen!2sza!4v1674856612855!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className=" py-10">
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Business Hours
              </h1>
              <ul>Mon: 8:00 AM – 5:00 PM </ul>
              <ul>Tue: 8:00 AM – 5:00 PM </ul>
              <ul>Wed: 8:00 AM – 5:00 PM</ul>
              <ul>Thu: 8:00 AM – 5:00 PM</ul>
              <ul>Fri: 8:00 AM – 5:00 PM</ul>
              <ul>Sat: 8:00 AM – 2:00 PM</ul>
              <ul>Sun: Closed</ul>
            </div>
            <div className=" py-9">
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                You can contact us
              </h1>
              <Script src="https://tally.so/widgets/embed.js"></Script>
              <iframe
                data-tally-src="https://tally.so/embed/mVp6M6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="200"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Contact form"
              ></iframe>
            </div>

            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
