import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <button className={`light:bg-cadet-blue light:hover:bg-darker-blue dark:fire-opal dark:hover:bg-tyrian-purple`}>
      {props.label}
    </button>
  )
};

export default Button;