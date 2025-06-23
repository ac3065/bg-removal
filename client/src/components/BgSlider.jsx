import React, { useState } from "react";
import image_w_bg from "../assets/image_w_bg.png";
import image_wo_bg from "../assets/image_wo_bg.png";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      {/* Title */}
      <h1 className="mb-9 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        Remove Background with High <br /> Quality and Accuracy
      </h1>

      {/* Image container */}
      <div className="relative w-full max-w-[600px] overflow-hidden m-auto rounded-xl aspect-[4/3] shadow-xl shadow-yellow-600/30 border border-yellow-600">
        <img
          src={image_w_bg}
          alt="Without BG"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        />
        <img
          src={image_wo_bg}
          alt="With BG"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-yellow-400 z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider absolute top-1/2 left-0 -translate-y-1/2 w-full accent-yellow-500 z-10"
        />
      </div>
    </div>
  );
};

export default BgSlider;
