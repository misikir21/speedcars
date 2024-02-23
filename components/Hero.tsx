import React from "react";
import { CustomButton } from ".";
function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book or Renta car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experieance with our effortless booking
          process
        </p>
        <CustomButton />
      </div>
    </div>
  );
}

export default Hero;
