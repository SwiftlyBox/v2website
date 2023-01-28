import "../styles/globals.css";
import Hero from '../components/Hero';
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Hero />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
