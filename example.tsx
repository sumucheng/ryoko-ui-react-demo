import React from 'react'
import ReactDOM from 'react-dom'
import './example.scss'
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom'
import Icon from './lib/icon/icon'
import { Layout, Header, Content, Sider } from './lib/layout/layout'

import Install from './lib/demo/install'
import Quick from './lib/demo/quick'
import IconDemo from './lib/demo/icon-demo'
import DialogDemo from './lib/demo/dialog-demo'
import ButtonDemo from './lib/demo/button-demo'
import LayoutDemo from './lib/demo/layout-demo'

const list = [
    {
        name: '开始 Start',
        icon: 'a',
        open: false,
        child: [
            { link: '/install', name: 'Install' },
            { link: '/quick', name: 'Quick' },
        ]
    },
    {
        name: '组件 Component',
        icon: 'b',
        open: false,
        child: [
            { link: '/icon', name: 'Icon' },
            { link: '/dialog', name: 'Dialog' },
            { link: '/button', name: 'Button' },
            { link: '/layout', name: 'Layout' },
        ]
    }
]
ReactDOM.render(
    <HashRouter>
        <Layout className="demo-container">
            <Header style={{ height: 60 }}>
                <span>Ryoko UI</span>
                <a href="https://github.com/sumucheng/ryoko-ui-react-demo" >GitHub</a>
            </Header>
            <Layout>
                <Sider style={{ width: 300 }}>
                    <ul>
                        {list.map((i, index) =>
                            i.child ?
                                <li className="sidebar" onClick={() => {
                                    i.open = !i.open
                                    console.log(i.open)
                                }}>
                                    <p className="sidebar-header">
                                        <Icon name={i.icon} />
                                        {i.name}
                                    </p>
                                    {i.open && i.child.map((j, index) =>
                                        <li key={index}><NavLink to={j.link}>{j.name}</NavLink></li>
                                    )}
                                </li> : null

                            // <li key={index}>
                            //     <NavLink to={i.link}>
                            //         <Icon name={i.icon} />
                            //         {i.name}
                            //     </NavLink>
                            // </li>

                        )}
                    </ul>
                </Sider>
                <Content>
                    <Route path="/install" component={Install}></Route>
                    <Route path="/quick" component={Quick}></Route>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={DialogDemo}></Route>
                    <Route path="/button" component={ButtonDemo}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                    <Redirect path="/" to={{ pathname: '/install' }} />
                </Content>
            </Layout>

        </Layout>


    </HashRouter>

    , document.querySelector('#root'))