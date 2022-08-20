import React from "react";
import Spinner from "../Spinner";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    label,
    onClick,
    loading,
    type,
    className,
    size,
    weight,
    disabled,
    rounding
  } = props;

  const getSizing = () => {
    switch (size) {
      case 'sm':
        return 'text-sm p-2';
      case 'md':
        return 'text-base p-2';
      case 'lg':
        return 'text-lg p-3';
      case 'xl':
        return 'text-xl p-3';
      case '2xl':
        return 'text-2xl p-3';
      default:
        return 'text-base p-2';
    }
  }

  const getWeight = () => {
    switch (weight) {
      case 'normal':
        return 'font-normal';
      case 'bold':
        return 'font-bold';
      default:
        return 'font-medium';
    }
  }

  const getRounding = () => {
    switch (rounding) {
      case 'sm':
        return 'rounded';
      case 'md':
        return 'rounded-md';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-lg';
    }
  }

  const getColor = () => {
    switch (disabled) {
      case true:
        return 'bg-light-accent dark:bg-dark-accent cursor-not-allowed';
      default:
        return 'bg-light hover:bg-light-accent dark:bg-dark dark:hover:bg-dark-accent';
    }
  }

  return (
    <button className={`${getColor()}
                        ${getSizing()}
                        ${getWeight()}
                        ${getRounding()}
                        transition-colors duration-250
                        flex justify-between items-center gap-2
                        ${className}`}
            onClick={onClick?.()}
            disabled={disabled}>
      <div className="whitespace-nowrap">{label}</div>
      {
        loading &&
        <div><Spinner size="md" /></div>
      }
    </button>
  )
};

export default Button;