"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";
function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero xl:w-full">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book or Renta car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experieance with our effortless booking
          process
        </p>
        <CustomButton
          title="explore cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
