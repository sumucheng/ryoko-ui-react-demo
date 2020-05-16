import React, { Fragment } from 'react'
import Layout from '../layout/layout'
import Footer from '../layout/footer'
import Content from '../layout/content'
import Header from '../layout/header'
import Sider from '../layout/sider'
import DemoTemplate from './demoTemp'

import './demo.scss'
export default function () {
    return (
        <DemoTemplate
            header="Layout 布局"
            className="layout"
            items={[
                {
                    demo: <Fragment>
                        <Layout style={{ marginBottom: 30 }}>
                            <Header>Header</Header>
                            <Layout>
                                <Sider>Sider</Sider>
                                <Content>Content</Content>
                            </Layout>
                            <Footer>Footer</Footer>
                        </Layout>
                        <Layout style={{ marginBottom: 30 }}>
                            <Header>Header</Header>
                            <Layout>
                                <Sider>Sider</Sider>
                                <Content>Content</Content>
                            </Layout>
                            <Footer>Footer</Footer>
                        </Layout>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Layout>
                                <Header>Header</Header>
                                <Content>Content</Content>
                                <Footer>Footer</Footer>
                            </Layout>
                        </Layout>
                    </Fragment>,
                    code: ''
                }

            ]}
        >
        </DemoTemplate>
    )
}