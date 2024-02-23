"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
function CustomButton({
  title,
  btntype,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button" || btntype}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
