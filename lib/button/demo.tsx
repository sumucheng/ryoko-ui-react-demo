import React from 'react'
import Button from './button'

export default function () {
    return (
        <div>
            <div className="item">
                <Button onClick={() => console.log(123)}>click me</Button>
            </div>

        </div>
    )
}