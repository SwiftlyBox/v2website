import React from "react";
import Head from "next/head";

function Privacy() {
  return (
    <>
      <Head>
        <style>
          {`
            
            p {
              text-align: justify;
              font-size: 1.2em;
              line-height: 1.5em;
            }
            ul {
              text-align: left;
              font-size: 1.2em;
              line-height: 1.5em;
            }
          `}
        </style>

        <title>Spider Web Designs-Privacy</title>
        <meta name="description" content="The professionals here to help" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-20">
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          Privacy Policy
        </h1>

        <p>
          Spider Web Designs Pty Ltd ({"us"}, {"we"}, or {`"our"`}) operates the{" "}
          <a href="https://www.spiderwebdesignssa.co.za">
            www.spiderwebdesignssa.co.za
          </a>{" "}
          website (the {"Service"}).
        </p>

        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>

        <p>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <h2>Information Collection and Use</h2>

        <p>We do not collect any personal data from users of our Service.</p>

        <h2>Changes to This Privacy Policy</h2>

        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <p>
          This website was designed and created by CJDesign Studio and all
          rights belong to them.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>

        <ul>
          <li>By phone number: +27 (65) 880 8362</li>
        </ul>
      </div>
    </>
  );
}

export default Privacy;
