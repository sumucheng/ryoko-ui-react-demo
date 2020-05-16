import React, { ReactElement } from 'react'
import Code from "./demo-code"
import './demo.scss'

interface DemoTemplateProps extends React.HTMLAttributes<HTMLElement> {
    header: string,
    items: Array<{
        demo: ReactElement,
        code: string
    }>
}
const DemoTemplate: React.FunctionComponent<DemoTemplateProps> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={`container ${className}`} {...rest}>
            <header>
                <span>{props.header}</span>
            </header>
            <div className="content">
                {props.items.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="demo">{item.demo}</div>

                        <Code code={item.code} ></Code>
                    </div>
                )}

            </div>

        </div>
    )
}
export default DemoTemplate