import React, { useState, useEffect, lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Quality from "../../content/Quality.json";
import boxdetails from "../../content/boxdetails.json";
import Gold from "../../content/Gold.json";
import Reviews from "../../content/Reviews.json";
import form from "../../content/form.json";
import Slider from "./Slider";
import WhatsAppIcon from "./WhatsAppIcon";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home: React.FC = () => {
  const [slides, setSlides] = useState<
    {
      id: number;
      title: string;
      imageUrl: any;
    }[]
  >([]);

  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 3; i++) {
        const image = await import(`./sec${i}.png`);
        images.push({
          id: i,
          title: `Slide ${i}`,
          imageUrl: image.default,
        });
      }
      setSlides(images);
    };

    importImages();
  }, []);

  return (
    <Container>


      <ScrollToTop />

      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        content2={IntroContent.text}
        button={IntroContent.button}
        icon="icon1"
        id="intro"
      />

      <ContentBlock
        direction="left"
        title={boxdetails.title}
        content={boxdetails.text}
        content2={boxdetails.text2}
        section={boxdetails.section}
        icon="icon1"
        id="about"
      />
      <ToastContainer />

      <ContentBlock
        direction="right"
        title={Gold.title}
        content={Gold.text}
        content2={Gold.text}
        icon="icon2"
        id="Gold"
      />


      <ContentBlock
        direction="right"
        title={Quality.title}
        content={Quality.text}
        content2={Quality.text}
        icon="icon3"
        id="Quality"
      />



      <Slider slides={slides} />
<WhatsAppIcon/>
      <Contact title={form.title} content={form.text} id="contact" />
    </Container>
  );
};

export default Home;
