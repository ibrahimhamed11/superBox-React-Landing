import React, { useState, useEffect, lazy } from "react";
import styled from "styled-components";
import IntroContent from "../../content/IntroContent.json";
import Quality from "../../content/Quality.json";
import boxdetails from "../../content/boxdetails.json";
import Gold from "../../content/Gold.json";
import Reviews from "../../content/Reviews.json";
import form from "../../content/form.json";
import Slider from "../../components/Slider/Slider";
import WhatsAppIcon from "../../components/whatsApp/WhatsAppIcon";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ImageGallery from "../../components/ImageGallery";
import TextComponent from "../../components/TextComponent/TextComponent";
import ProductComponent from "../../components/OfferAnimation/OfferAnimation";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home: React.FC = () => {
  const iconPaths = ["/icon1.png", "/icon2.png", "/icon3.png"]; // Update with your actual icon paths

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
        const image = await import(`../../assets/sec${i}.png`);
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

  // Styled Button Component
const StyledButton = styled.button`
  margin-bottom: 50px; /* Adjust the margin as needed */
  /* Add other styling properties */

  &.hidden {
    display: none;
  }

  &.visible {
    display: block; /* or any other display property */
  }
`;

  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        content2={""}
        button={IntroContent.button}
        icon="icon0"
        id="intro"
        showProductComponent={true}
      />

      <ContentBlock
        direction="left"
        title={boxdetails.title}
        content={boxdetails.text}
        content2={boxdetails.text2}
        section={boxdetails.section}
        icon="icon1"
        id="about"
        showProductComponent={false}
      />
      <ToastContainer />

      <TextComponent text="بعض اراء العملاء" />

      <ContentBlock
        direction="right"
        title={Gold.title}
        content={Gold.text}
        content2={Gold.text2}
        icon="icon2"
        id="Gold"
        showProductComponent={false}
      />

      <ContentBlock
        direction="right"
        title={Quality.title}
        content={Quality.text}
        content2={Quality.text2}
        icon="icon3"
        id="Quality"
        showProductComponent={false}
      />

      <ImageGallery />
      <TextComponent text="بعض اراء العملاء" />
      <Slider slides={slides} />
      <WhatsAppIcon />
      <Contact title={form.title} content={form.text} id="contact" />

    </Container>
  );
};

export default Home;
