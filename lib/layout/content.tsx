import React from 'react'
import './layout.scss'
interface ContentProps extends React.HTMLAttributes<HTMLElement> {

}
const Content: React.FunctionComponent<ContentProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={["r-content", className].filter(Boolean).join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
Content.defaultProps = {

}
export default Content