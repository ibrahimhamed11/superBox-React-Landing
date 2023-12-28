import React from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

import Pngicon from "../../sec1.png";
import Pngicon2 from "../../sec2.png";
import Pngicon3 from "../../sec3.png";
import Pngicon0 from "../../sec0.png";

import ProductComponent from "../OfferAnimation/OfferAnimation";
import "./ContentBlock.css"; // Import the CSS file for styling

const ContentBlock = ({
  icon,
  title,
  content,
  content2,
  section,
  button,
  t,
  id,
  direction,
  showProductComponent, // New prop to control visibility
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <img
              src={
                icon === "icon1" ? Pngicon :
                icon === "icon2" ? Pngicon2 :
                icon === "icon0" ? Pngicon0 :
                icon === "icon3" ? Pngicon3 : undefined
              }
              alt="Icon"
              style={{
                width: "100%", // default width
                height: "100%", // default height
                maxWidth: "100%", // ensure responsiveness
              }}
            />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h5 className="bold-title">{t(title)}</h5>

              {/* Conditionally render ProductComponent */}
              {showProductComponent && (
                <ProductComponent
                  name="بوكس السوبر الحري"
                  weight="8 - 10 كيلو تقريبا"
                  currentPrice={599}
                  originalPrice={799}
                />
              )}

              <Content className="small-font">{t(content)}</Content>
              <Content className="small-font">{t(content2)}</Content>

              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("contact")}
                        >
                          {t(item.title)}
                        </Button>
                      )
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => (
                          <Col key={id} span={11}>
                            <img
                              src={Pngicon}
                              alt={item.title}
                              style={{
                                width: "100%", // make it responsive
                                height: "auto", // maintain aspect ratio
                                maxWidth: "60px", // maximum width
                                maxHeight: "60px", // maximum height
                              }}
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        )
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
