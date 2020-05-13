import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Sider from './sider'

export default function () {
    return (
        <div>
            <div className="item">
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>

            </div>

        </div>
    )
}