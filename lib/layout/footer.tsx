import React from 'react'
import './layout.scss'
interface FooterProps {

}
const Footer: React.FunctionComponent<FooterProps> = (props) => {

    return (
        <div className="r-footer">
            {props.children}
        </div>
    )
}
Footer.defaultProps = {

}
export default Footer