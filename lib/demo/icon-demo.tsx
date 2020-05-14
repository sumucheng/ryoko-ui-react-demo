import React from 'react'
import Icon from '../icon/icon'
import DemoTemplate from './demoTemp'
import './demo.scss'
export default function () {
    return (
        <DemoTemplate
            header="Icon 图标"
            items={[<Icon name="close" />]}
        >
        </DemoTemplate>
    )
}