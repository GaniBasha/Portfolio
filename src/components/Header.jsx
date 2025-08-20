import React from "react";

const Header = ({ setShowResume }) => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-gray-950 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Shaik Gani Basha</h1>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setShowResume(true)}
            className="bg-cyan-500 text-black px-3 py-1 rounded hover:bg-cyan-400 transition"
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
