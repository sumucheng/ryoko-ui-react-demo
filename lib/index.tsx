import React from 'react'
import ReactDOM from 'react-dom'

import Icon from './icon'
const fn: (React.MouseEventHandler) = e => {
    console.log(e)
}
ReactDOM.render(<Icon name='close' onClick={fn} />, document.querySelector('#root'))
