import React, { ReactElement } from 'react'

import './demo.scss'
interface DemoTemplateProps extends React.HTMLAttributes<HTMLElement> {
    header: string,
    items: Array<ReactElement>
}
const DemoTemplate: React.FunctionComponent<DemoTemplateProps> = (props) => {
    return (
        <div className="container">
            <header>
                <span>{props.header}</span>
            </header>
            <div className="demo">
                {props.items.map((item, index) =>
                    <div className="item" key={index}>
                        {item}
                    </div>
                )}

            </div>

        </div>
    )
}
export default DemoTemplate