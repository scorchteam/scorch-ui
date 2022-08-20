import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <button className="text-9xl">{props.label}</button>;
};

export default Button;