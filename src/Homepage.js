// src/Homepage.js
import React from 'react';
import './Homepage.css'; 

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>This is a simple React homepage deployed with Vercel.</p>
        <a href="#features">Explore Features ↓</a>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <ul>
          <li>⚛️ Built with React</li>
          <li>🚀 Fast and lightweight</li>
          <li>🌐 Hosted on Vercel</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
