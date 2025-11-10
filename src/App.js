import React from "react";
import "./App.css"; // Stil faylimizni chaqiryapmiz

function App() {
  return (
    <div className="container">
      {/* Birinchi rasm */}
      <div className="image-wrapper">
        <img
          src="https://www.google.com/imgres?q=menicraft&imgurl=https%3A%2F%2Fartline.ua%2Fstorage%2Fimages%2Feditor%2Feditor_1609241070375106_0.jpg&imgrefurl=https%3A%2F%2Fartline.ua%2Fnews%2Figrovoy-pk-minecraft&docid=m-uWZiW0GZswoM&tbnid=KwdYdV_F6MfFcM&vet=12ahUKEwiGm-H9zeeQAxUTPhAIHUVkIfAQM3oECBwQAA..i&w=750&h=500&hcb=2&ved=2ahUKEwiGm-H9zeeQAxUTPhAIHUVkIfAQM3oECBwQAA" // Rasmning linki
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
