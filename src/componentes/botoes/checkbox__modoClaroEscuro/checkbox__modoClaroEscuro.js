import React, { useState } from "react";
import './checkbox__modoClaroEscuro.css'

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <div className="slider round">
        <div className="sun-moon">
          <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-1">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-2">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-3">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-1">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-2">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-3">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>

          <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-1">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-2">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-3">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-4">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-5">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
          <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-6">
            <circle r="50" cy="50" cx="50"></circle>
          </svg>
        </div>
        <div className="stars">
          <svg viewBox="0 0 20 20" className="star" id="star-1">
            <path
              d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
            ></path>
          </svg>
          <svg viewBox="0 0 20 20" className="star" id="star-2">
            <path
              d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
            ></path>
          </svg>
          <svg viewBox="0 0 20 20" className="star" id="star-3">
            <path
              d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
            ></path>
          </svg>
          <svg viewBox="0 0 20 20" className="star" id="star-4">
            <path
              d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
            ></path>
          </svg>
        </div>
      </div>
    </label>
  );
}