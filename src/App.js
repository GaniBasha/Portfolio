import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import FadeInSection from "./components/FadeInsection";

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white scroll-smooth">
      {!showResume ? (
        <>
          {/* Header */}
          <Header setShowResume={setShowResume} />

          {/* Main content with padding top to account for fixed header */}
          <main className="px-6 md:px-20 pt-24">
            <FadeInSection delay={100}><About /></FadeInSection>
            <FadeInSection delay={200}><Projects /></FadeInSection>
            <FadeInSection delay={300}><Skills /></FadeInSection>
            <FadeInSection delay={400}><Education /></FadeInSection>
            <FadeInSection delay={500}><Contact /></FadeInSection>
          </main>
        </>
      ) : (
        /* Resume page */
        <Resume setShowResume={setShowResume} />
      )}
    </div>
  );
}

export default App;
