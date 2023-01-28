import React from "react";
import Head from "next/head";
import WhatsAppButton from "../components/whatsapp";

function TermsofService() {
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

        <title>Spider Web Designs-Terms of Services</title>
        <meta name="description" content="The professionals here to help" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-20">
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          Terms of Service
        </h1>

        <p>
          Welcome to Spider Web Designs Pty Ltd ({"us"}, {"we"}, or {"our"}).
          The following terms and conditions govern all use of the
          www.spiderwebdesignssa.co.za website (the {"Service"}) and all
          content, services and products available at or through the Service.
        </p>

        <p>
          By using the Service, you accept these terms of service in full. If
          you disagree with these terms of service or any part of these terms of
          service, you must not use the Service.
        </p>

        <h2>Intellectual Property</h2>

        <p>
          The Service and its original content, features and functionality are
          and will remain the exclusive property of Spider Web Designs Pty Ltd
          and its licensors. The Service is protected by copyright, trademark,
          and other laws of both the Australia and foreign countries.
        </p>

        <h2>Termination</h2>

        <p>
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, under our sole discretion, for any
          reason whatsoever and without limitation, including but not limited to
          a breach of the Terms.
        </p>

        <h2>Limitations of liability</h2>

        <p>
          In no event shall Spider Web Designs Pty Ltd, nor its directors,
          employees, partners, agents, suppliers, or affiliates, be liable for
          any indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Service; (ii) any conduct or content
          of any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </p>

        <h2>Indemnification</h2>

        <p>
          You agree to defend, indemnify and hold harmless Spider Web Designs
          Pty Ltd and its licensee and licensors, and their employees,
          contractors, agents, officers and directors, from and against any and
          all claims, damages, obligations, losses, liabilities, costs or debt,
          and expenses including but not limited to {`attorney's`} fees,
          resulting from or arising out of a your use and access of the Service,
          by you or any person using your account and password; b a breach of
          these Terms, or c Content posted on the Service.
        </p>

        <h2>Contact Us</h2>

        <p>If you have any questions about these Terms, please contact us:</p>

        <ul>
          <li>By phone number: {+27} (65) 880 8362</li>
        </ul>
        <WhatsAppButton />
      </div>
    </>
  );
}

export default TermsofService;
