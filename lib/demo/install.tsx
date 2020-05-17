import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import './demo.scss'
export default function () {
    const code = `npm install ryoko-ui-react
// 或
yarn add ryoko-ui-react`
    return (
        <div className="container install">
            <h1>安装</h1>
            <h2>NPM 安装</h2>
            <span>ryoko-ui 已发布至 NPM ，您可以使用 npm / yarn 来安装。</span>
            <Highlight {...defaultProps} code={code} language="bash">
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
        </div>
    )
}