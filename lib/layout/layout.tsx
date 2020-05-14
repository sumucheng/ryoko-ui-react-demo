import React, { ReactElement } from 'react'
import './layout.scss'
import Sider from './sider'
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const { className, ...rest } = props
    const children = props.children as Array<ReactElement>
    const hasSider = children.length > 0 &&
        children.reduce((result, node) => result || node.type === Sider, false)
    const classList = ["r-layout", hasSider && 'r-layout-hasSider', className].filter(Boolean).join(' ')
    return (
        <div className={classList} {...rest}>
            {children}
        </div>
    )
}
Layout.defaultProps = {

}
export default Layout
export { Layout }
export { default as Header } from './header'
export { default as Sider } from './sider'
export { default as Content } from './content'
export { default as Footer } from './footer'
