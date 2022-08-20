export interface ButtonProps {
    label: string,
    onClick?: Function,
    loading?: boolean,
    type?: "button" | "submit" | "reset",
    className?: string,
    size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    weight?: 'normal' | 'medium' | 'bold',
    disabled?: boolean,
    rounding?: 'sm' | 'md' | 'lg' | 'full'
}