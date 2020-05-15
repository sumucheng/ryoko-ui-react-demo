import React, { Fragment } from 'react'
import Button from '../button/button'
import DemoTemplate from './demoTemp'
import Code from './code/button-code'
import './demo.scss'
export default function () {
    const code = require('!!raw-loader!./button-demo').default
    return (
        <DemoTemplate
            header="Button 按钮"
            className="button"
            items={[
                <Fragment>
                    <Button>默认按钮</Button>
                    <Button level="primary">主要按钮</Button>
                    <Button level="success">成功按钮</Button>
                    <Button level="danger">危险按钮</Button>

                    <Button plain>朴素按钮</Button>
                    <Button level="primary" plain>主要按钮</Button>
                    <Button level="success" plain>成功按钮</Button>
                    <Button level="danger" plain>危险按钮</Button>
                </Fragment>,
                <Fragment>
                    <Button level="default" disabled>默认按钮</Button>
                    <Button level="primary" disabled>主要按钮</Button>
                    <Button level="success" disabled>成功按钮</Button>
                    <Button level="danger" disabled>危险按钮</Button>

                    <Button level="default" disabled plain>朴素按钮</Button>
                    <Button level="primary" disabled plain>主要按钮</Button>
                    <Button level="success" disabled plain>成功按钮</Button>
                    <Button level="danger" disabled plain>危险按钮</Button>
                </Fragment>,
                <Fragment>
                    <Button size="large">大型按钮</Button>
                    <Button size="middle">默认按钮</Button>
                    <Button size="small">小型按钮</Button>
                    <Code code={code}></Code>
                </Fragment>


            ]}>

        </DemoTemplate>

    )
}