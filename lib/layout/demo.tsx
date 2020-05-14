import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Sider from './sider'

import './demo.scss';

export default function () {
    return (
        <div>
            <div className="item">
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
            </div>

        </div>
    )
}