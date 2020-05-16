import React, { useState, Fragment } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface Props {
    code: string
}
export default function (props: Props) {
    const [visible, setVisible] = useState(false)
    return (
        <Fragment>
            <div className="codeControl" onClick={() => setVisible(!visible)}>
                <span >{visible ? '隐藏代码' : '显示代码'}</span>
            </div>
            {visible &&
                <Highlight {...defaultProps} code={props.code} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div  {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })}></span>
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>}

        </Fragment>

    )
}