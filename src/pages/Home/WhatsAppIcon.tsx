import React from "react";
import { ReactComponent as WhatsAppIconSvg } from "./whatsapp-icon.svg"; // Adjust the path accordingly

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    const whatsappLink = "https://api.whatsapp.com/message/ERWQ3CJISVXQD1?autoload=1&app_absent=0"; // Replace with your WhatsApp number
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop:'50px'
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={handleWhatsAppClick} role="button" aria-label="Open WhatsApp">
        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
          <WhatsAppIconSvg style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>تواصل معنا من خلال الواتس اب</p>
    </div>
  );
};

export default WhatsAppIcon;
