import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { toast } from 'react-toastify';

type UserLocation = {
  latitude: number;
  longitude: number;
};

const Contact = ({ title, content, id, t }: ContactProps) => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getUserIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error getting IP address:", error);
      return null;
    }
  };

  const handleClickSubmit = async () => {
    const ipAddress = await getUserIpAddress();

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    const formData = {
      ...values,
      userLocation,
      ipAddress,
      utmSource,
      utmMedium,
      utmCampaign,
    };

    console.log("form data", formData);

    if (formData.name.trim() || formData.phone.trim() || formData.address.trim()) {
      toast.success('تم ارسال الطلب بنجاح سيتم التواصل معك', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: 'green',
          color: 'white',
          fontSize: 20,
        },
      });
    } else {
      toast.error('الرجاء ملء جميع الحقول المطلوبة', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: 'red',
          color: 'white',
          fontSize: 20,
        },
      });
    }
  };

  return (
    <ContactContainer id={id} style={{ direction: "rtl", textAlign: "right" }}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  arabicName="الاسم"
                  type="text"
                  name="name"
                  placeholder="اسمك"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  arabicName="رقم الجوال"
                  type="text"
                  name="phone"
                  placeholder="رقم جوالك"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <Input
                  arabicName="العنوان"
                  type="text"
                  name="address"
                  placeholder="عنوانك"
                  value={values.address || ""}
                  onChange={handleChange}
                />
                <ValidationType type="address" />
              </Col>
              <ButtonContainer>
                <button
                  type="submit"
                  name="submit"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "1.5em",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                  onClick={handleClickSubmit}
                >
                  {t("Submit")}
                </button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
