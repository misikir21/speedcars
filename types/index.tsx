import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  btntype?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
