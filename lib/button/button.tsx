import React, { ButtonHTMLAttributes } from 'react'
import './button.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'default' | "primary" | "warning" | "error"
    size?: string
    plain?: boolean
    disabled?: boolean
}
const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { className, children, level, size, plain, disabled, ...rest } = props
    return (
        <button
            className={`r-button ${level} ${size} ${plain && 'plain'}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button >
    )
}
Button.defaultProps = {
    level: "default",
    size: "middle",
    plain: false,
    disabled: false
}
export default Button