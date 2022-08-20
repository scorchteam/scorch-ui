import { MouseEventHandler } from "react";

export interface ButtonProps {
    label: string,
    onClick?: Function,
    loading?: boolean,
    type?: "button" | "submit" | "reset",
    className?: string,
    size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    disabled?: boolean
}