import React, { useState } from 'react'
import Dialog from './dialog'

const dialogDemo: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>click me</button>
            <Dialog visible={visible} >
                <div>hi</div>
            </Dialog>
        </div>

    )
}
export default dialogDemo