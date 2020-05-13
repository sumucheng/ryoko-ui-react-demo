import React from 'react'
import './layout.scss'
interface SiderProps {

}
const Sider: React.FunctionComponent<SiderProps> = (props) => {

    return (
        <div className="r-sider">
            {props.children}
        </div>
    )
}
Sider.defaultProps = {

}
export default Sider