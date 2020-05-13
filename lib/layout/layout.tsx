import React, { useEffect } from 'react'
import './layout.scss'
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const { className, ...rest } = props
    const classList = ["r-layout", className].filter(Boolean).join(' ')
    return (
        <div className={classList} {...rest}>
            {props.children}
        </div>
    )
}
Layout.defaultProps = {

}
export default Layout