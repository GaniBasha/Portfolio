import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile-placeholder.png"; // Replace with your actual profile image

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center md:items-start py-12 gap-8 px-6 md:px-20"
    >
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="S.haik Gani Basha"
          className="w-48 h-48 rounded-full border-4 border-cyan-500 shadow-lg object-cover transition-transform transform hover:scale-105"
        />
      </div>

      {/* About Text */}
      <div
        className={`max-w-3xl text-lg transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Full-Stack Developer & AI Engineer | Building Intelligent Web Applications with the MERN Stack.
          Specializing in creating seamless, end-to-end systems that integrate intelligent machine learning models into scalable web platforms.
        </p>
        <p>
          Proficient in developing RESTful APIs with Node.js, dynamic UIs with React, and deploying AI features like predictive analytics and NLP.
          Focused on architecting data-driven solutions that are both powerful and user-centric.
        </p>
      </div>
    </section>
  );
};

export default About;
