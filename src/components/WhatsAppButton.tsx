import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "94767393088"; // no +
  const message = "Hello! I’d like to inquire about your transport services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={2.2} />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
