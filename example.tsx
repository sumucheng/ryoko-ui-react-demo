
import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Link } from 'react-router-dom'

import IconDemo from './lib/icon/demo'
import DialogDemo from './lib/dialog/demo'
ReactDOM.render(
    <HashRouter>
        <ul>
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/dialog">Dialog</Link></li>
        </ul>
        <Route path="/icon" component={IconDemo}></Route>
        <Route path="/dialog" component={DialogDemo}></Route>
    </HashRouter>

    , document.querySelector('#root'))