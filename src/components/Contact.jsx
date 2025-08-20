import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    icon: <FaEnvelope className="text-cyan-400" />,
    link: "mailto:bashagani18@gmail.com",
    display: "bashagani18@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-500" />,
    link: "https://www.linkedin.com/in/gani-basha-shaik-79084132a/",
    display: "Gani Basha",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-400" />,
    link: "https://github.com/GaniBasha",
    display: "GaniBasha",
  },
  {
    name: "Phone",
    icon: <FaPhone className="text-green-400" />,
    link: "tel:9391184232",
    display: "9391184232",
  },
];

const Contact = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".contact-card");
      items.forEach((item, index) => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setVisibleIndex((prev) => Math.max(prev, index));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="min-h-screen py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-card flex items-center gap-3 bg-gray-950 p-4 rounded-xl shadow-lg w-80 transform hover:scale-105 transition-transform duration-300 transition-opacity ease-out ${
              index <= visibleIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-3xl">{contact.icon}</div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">{contact.name}</span>
              <span className="text-gray-400 text-sm">{contact.display}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
