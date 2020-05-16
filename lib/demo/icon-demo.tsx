import React from 'react'
import Icon from '../icon/icon'
import DemoTemplate from './demoTemp'
import './demo.scss'
export default function () {
    return (
        <DemoTemplate
            header="Icon 图标"
            className="icon"
            items={[{
                demo: <Icon name="close" />,
                code: ''
            }]}
        >
        </DemoTemplate>
    )
}