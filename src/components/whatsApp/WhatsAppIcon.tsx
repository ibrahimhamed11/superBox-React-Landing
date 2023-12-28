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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#2EBB11",
        borderRadius: "10px",
        padding: "5px",
        cursor: "pointer",
        width: "300px",
        height: "70px",
        animation: "vibrate 0.8s linear infinite",
        margin: "0 auto", // Add this line to center the element horizontally
      }}
      onClick={handleWhatsAppClick}
      role="button"
      aria-label="Open WhatsApp"
    >
      <a href="#" style={{ textDecoration: "none", color: "white" }}>
        <WhatsAppIconSvg style={{ width: "30px", height: "30px", marginRight: '5px' }} />
      </a>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0, color: "white" }}>تواصل معنا من خلال الواتس اب</p>

      {/* Define the vibration animation */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0); }
            25% { transform: translate(-1px, 1px); }
            50% { transform: translate(0); }
            75% { transform: translate(1px, -1px); }
            100% { transform: translate(0); }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppIcon;
