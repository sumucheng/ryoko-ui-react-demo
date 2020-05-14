import React from 'react'
import './layout.scss'
interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}
const Footer: React.FunctionComponent<FooterProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={["r-footer", className].filter(Boolean).join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
Footer.defaultProps = {

}
export default Footer