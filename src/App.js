import React from "react";
import "./App.css"; // Stil faylimizni chaqiryapmiz

function App() {
  return (
    <div className="container">
      {/* Birinchi rasm */}
      <div className="image-wrapper">
        <img
          src="https://picsum.photos/id/10/200/200" // Rasmning linki
          alt="Aylanuvchi rasm 1"
          className="rotating-image"
        />
      </div>

      {/* Ikkinchi rasm */}
      <div className="image-wrapper">
        <img
          src="https://picsum.photos/id/20/200/200" // Ikkinchi rasmning linki
          alt="Aylanuvchi rasm 2"
          className="rotating-image"
        />
      </div>
    </div>
  );
}

export default App;
