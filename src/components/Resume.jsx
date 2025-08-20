import React from "react";

const Resume = ({ setShowResume }) => {
  return (
    <section className="min-h-screen py-12 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto bg-gray-950 p-8 rounded-xl shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => setShowResume(false)}
          className="mb-6 bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition"
        >
          ← Back to Portfolio
        </button>

        <h2 className="text-4xl font-bold mb-6 text-center">Resume</h2>

        {/* Summary / Objective */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Summary</h3>
          <p>
            Full-Stack Developer & AI Engineer with experience building intelligent, data-driven web applications using MERN stack and machine learning frameworks.
            Skilled in developing scalable RESTful APIs, dynamic user interfaces, and integrating AI/ML solutions for real-world problems.
            Seeking opportunities to create innovative software solutions and contribute to impactful projects.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside">
            <li>CSE (AIML) - Chebrolu Engineering College | CGPA: 8.2</li>
            <li>Intermediate - NRI Junior College | 89.9%</li>
            <li>SSC - NCRNM High School | GPA: 9.7</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
          <p>
            MERN Stack (MongoDB, Express.js, React, Node.js), Java, Python, C, C++, Pandas, NumPy, TensorFlow, Matplotlib, SQL, Natural Language Processing (NLP), AI/ML Integration, RESTful API Development, Data Analysis & Visualization.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <ul className="list-disc list-inside">
            <li>
              AI Resume HR - <a href="https://ganibasha.github.io/ai-resume-hr/" target="_blank" className="text-cyan-400 hover:underline">Live</a> | <a href="https://github.com/GaniBasha/ai-resume-hr" target="_blank" className="text-cyan-400 hover:underline">GitHub</a>
            </li>
            <li>
              EchoNest - <a href="https://ganibasha.github.io/EchoNest/#/login" target="_blank" className="text-cyan-400 hover:underline">Live</a> | <a href="https://github.com/GaniBasha/EchoNest" target="_blank" className="text-cyan-400 hover:underline">GitHub</a>
            </li>
            <li>
              Mental Wellness Website - <a href="https://ganibasha.github.io/mental-wellness-website/#/login" target="_blank" className="text-cyan-400 hover:underline">Live</a> | <a href="https://github.com/GaniBasha/mental-wellness-website" target="_blank" className="text-cyan-400 hover:underline">GitHub</a>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc list-inside">
            <li>Full-Stack Web Development - MERN Stack Certification</li>
            <li>TensorFlow & AI/ML Specialization</li>
            <li>Python for Data Science and NLP</li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside">
            <li>Developed AI Resume HR platform deployed on GitHub Pages used by multiple users</li>
            <li>Built EchoNest music recommendation system integrating user preferences and ML models</li>
            <li>Created Mental Wellness Website to raise awareness and provide mental health resources</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <ul className="list-disc list-inside">
            <li>Email: bashagani18@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/gani-basha-shaik-79084132a/" target="_blank" className="text-cyan-400 hover:underline">Gani Basha</a></li>
            <li>GitHub: <a href="https://github.com/GaniBasha" target="_blank" className="text-cyan-400 hover:underline">GaniBasha</a></li>
            <li>Phone: 9391184232</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Resume;
