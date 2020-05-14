import React from 'react'
import './layout.scss'
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}
const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={["r-header", className].filter(Boolean).join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
Header.defaultProps = {

}
export default Header