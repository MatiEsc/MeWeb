import { FaWhatsapp } from "react-icons/fa";

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    window.open("https://wa.me/1167626764", "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp />
      
    </div>
  );
};

export default WhatsAppButton;