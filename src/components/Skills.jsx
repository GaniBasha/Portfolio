import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaChartBar } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiNumpy, SiPandas, SiCplusplus, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-300" /> },
  { name: "Pandas", icon: <SiPandas className="text-indigo-400" /> },
  { name: "Matplotlib", icon: <FaChartBar className="text-red-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
  { name: "NLP", icon: <FaPython className="text-purple-400" /> },
];

const Skills = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".skill-card");
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
    <section id="skills" className="min-h-screen py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-card flex flex-col items-center gap-2 bg-gray-950 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-32 transition-opacity ease-out ${
              index <= visibleIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
