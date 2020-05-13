import React from 'react'
import './layout.scss'
interface HeaderProps {

}
const Header: React.FunctionComponent<HeaderProps> = (props) => {

    return (
        <div className="r-header">
            {props.children}
        </div>
    )
}
Header.defaultProps = {

}
export default Header