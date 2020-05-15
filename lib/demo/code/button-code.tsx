import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface Props {
    code: string
}
export default function (props: Props) {
    return (
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

        </Highlight>

    )
}