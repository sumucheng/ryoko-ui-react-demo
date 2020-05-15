import React from 'react'
import ReactDOM from 'react-dom'
import './example.scss'
import { HashRouter, Route, NavLink } from 'react-router-dom'

import { Layout, Header, Content, Sider } from './lib/layout/layout'

import IconDemo from './lib/demo/icon-demo'
import DialogDemo from './lib/demo/dialog-demo'
import ButtonDemo from './lib/demo/button-demo'
import LayoutDemo from './lib/demo/layout-demo'

const list = [
    { link: '/icon', name: 'Icon', component: IconDemo },
    { link: '/dialog', name: 'Dialog', component: IconDemo },
    { link: '/button', name: 'Button', component: IconDemo },
    { link: '/layout', name: 'Layout', component: IconDemo },
]
ReactDOM.render(
    <HashRouter>
        <Layout className="demo-container">
            <Header style={{ height: 60 }}>
                <span>Ryoko UI</span>
                <a href="https://github.com/sumucheng/ryoko-ui-react-demo" >GitHub</a>
            </Header>
            <Layout>
                <Sider style={{ width: 200 }}>
                    <ul>
                        {list.map((i, index) =>
                            <li key={index}><NavLink to={i.link}>{i.name}</NavLink></li>
                        )}
                    </ul>
                </Sider>
                <Content>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={DialogDemo}></Route>
                    <Route path="/button" component={ButtonDemo}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                </Content>
            </Layout>

        </Layout>


    </HashRouter>

    , document.querySelector('#root'))