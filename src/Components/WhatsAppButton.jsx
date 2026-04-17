import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "2349130409941"; // Replace with your actual phone number
  const message = "Hi, I’d like to work with you";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;