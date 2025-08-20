import React, { useEffect, useState } from "react";

const educationList = [
  {
    degree: "CSE (AIML) - Chebrolu Engineering College",
    year: "2022 - 2026",
    grade: "CGPA: 8.2",
  },
  {
    degree: "Intermediate - NRI Junior College",
    year: "2020 - 2022",
    grade: "Percentage: 89.9%",
  },
  {
    degree: "SSC - NCRNM High School",
    year: "2020",
    grade: "GPA: 9.7",
  },
];

const Education = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".edu-card");
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
    <section id="education" className="min-h-screen py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className={`edu-card bg-gray-950 p-6 rounded-xl shadow-lg w-80 transform hover:scale-105 transition-transform duration-300 transition-opacity ease-out ${
              index <= visibleIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-gray-400 mb-2">{edu.year}</p>
            <p className="text-white font-medium">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
