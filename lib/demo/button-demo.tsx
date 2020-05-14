import React from 'react'
import Button from '../button/button'
import DemoTemplate from './demoTemp'
import './demo.scss'
export default function () {
    return (
        <div>
            <div className="item">

                <Button>默认按钮</Button>
                <Button level="primary">主要按钮</Button>
                <Button level="success">成功按钮</Button>
                <Button level="danger">危险按钮</Button>

                <Button plain>朴素按钮</Button>
                <Button level="primary" plain>主要按钮</Button>
                <Button level="success" plain>成功按钮</Button>
                <Button level="danger" plain>危险按钮</Button>

            </div>
            <div className="item">

                <Button level="default" disabled>默认按钮</Button>
                <Button level="primary" disabled>主要按钮</Button>
                <Button level="success" disabled>成功按钮</Button>
                <Button level="danger" disabled>危险按钮</Button>

                <Button level="default" disabled plain>朴素按钮</Button>
                <Button level="primary" disabled plain>主要按钮</Button>
                <Button level="success" disabled plain>成功按钮</Button>
                <Button level="danger" disabled plain>危险按钮</Button>

            </div>
            <div className="item">
                <Button size="large">大型按钮</Button>
                <Button size="middle">默认按钮</Button>
                <Button size="small">小型按钮</Button>
            </div>
        </div>
    )
}