import React from 'react'
import './layout.scss'
interface SiderProps extends React.HTMLAttributes<HTMLElement> {

}
const Sider: React.FunctionComponent<SiderProps> = (props) => {
    const { className, ...rest } = props;
    return (
        <div className={["r-sider", className].filter(Boolean).join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
Sider.defaultProps = {

}
export default Sider