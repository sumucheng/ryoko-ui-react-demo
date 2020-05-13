import React from 'react'
import './layout.scss'
interface ContentProps {

}
const Content: React.FunctionComponent<ContentProps> = (props) => {

    return (
        <div className="r-content">
            {props.children}
        </div>
    )
}
Content.defaultProps = {

}
export default Content